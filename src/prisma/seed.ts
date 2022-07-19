import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import {
  PatientCreateProps,
  DoctorCreateProps,
  MedicineManufacturerCreateProps,
  SpecialityProps,
  TestProps,
  MedicineListProps,
  MedicineManufacturerProps,
  PatientHealthPlanProps,
  DoctorProps,
  PrescriptionProps
} from '../@types'
import {
  specialities,
  healthPlans,
  labs,
  tests,
  manufacturers,
  medicines
} from '../util'
import {
  randomSpeciality,
  randomHealthPlan,
  randomTimePeriod,
  randomShiftValues,
  randomShift,
  randomPhones
} from './seed-util'

// Instantiate Prisma Client
const prisma = new PrismaClient()

const randomMedicine = async (): Promise<any | null> => {
  let result: MedicineManufacturerProps | null = null

  const randomMedicine: MedicineListProps =
    medicines[Math.floor(Math.random() * medicines.length)]
  try {
    const medicine: any | null = await prisma.medicine.findFirst({
      where: {
        isActive: true,
        tradeName: randomMedicine.tradeName,
        packageTypes: randomMedicine.packageTypes,
        packageSize: randomMedicine.packageSize
      },
      include: {
        manufacturer: true
      }
    })
    result = medicine
  } catch (error: any) {
    console.error(error.message)
  } finally {
    return result
  }
}

const createUser = (type: string) => {
  let user: any = {
    name: faker.name.findName(),
    email: faker.internet.email().toLocaleLowerCase(),
    phones: randomPhones()
  }

  switch (type) {
    case 'doctor':
      user = {
        ...user,
        password: faker.internet.password(8),
        isAdmin: faker.datatype.boolean(),
        role: 'doctor',
        doctorDetails: {
          create: {
            shift: randomShift(),
            specialities: {
              connect: {
                name: randomSpeciality()
              }
            }
          }
        }
      }
      break
    case 'attendant':
      user = {
        ...user,
        password: faker.internet.password(8),
        phones: randomPhones(),
        isAdmin: faker.datatype.boolean(),
        role: 'attendant'
      }
      break
    case 'patient':
      user = {
        ...user,
        healthPlan: {
          connect: {
            name: randomHealthPlan()
          }
        }
      }
      break
  }
  return user
}

interface manyUsersProps {
  type: string
  total: number
}
const manyUsers = (props: manyUsersProps) => {
  const { type, total } = props
  const users: (PatientCreateProps | DoctorCreateProps | any)[] = []
  for (let i = 0; i < total; i++) {
    process.stdout.write('.')
    users.push(createUser(type))
  }
  return users
}

const createManyUsers = async (props: manyUsersProps) => {
  const { type } = props
  const response: any[] = []
  const users = manyUsers(props)
  for await (const user of users) {
    switch (type) {
      case 'attendant':
        process.stdout.write('.')
        response.push(await prisma.user.create({ data: user }))
        break
      case 'doctor':
        process.stdout.write('.')
        response.push(
          await prisma.user.create({
            data: user,
            include: {
              doctorDetails: {
                include: {
                  specialities: true
                }
              }
            }
          })
        )
        break
      case 'patient':
        process.stdout.write('.')
        response.push(
          await prisma.patient.create({
            data: user,
            include: { healthPlan: true }
          })
        )
        break
    }
  }
  return response
}

const createSpecialities = async (): Promise<void> => {
  console.log('Start creating specialities...')
  const theSpecialities = await prisma.speciality.createMany({
    data: specialities.sort().map(
      (speciality): SpecialityProps =>
        <SpecialityProps>{
          name: speciality,
          description: faker.lorem.sentence()
        }
    )
  })
  console.log(`Created ${theSpecialities.count} specialities.`)
}

const createTests = async (): Promise<void> => {
  console.log('Start creating tests...')
  const data: TestProps[] = tests.sort().map((test) => ({ name: test }))
  const theTests = await prisma.test.createMany({ data: data })
  console.log(`Created ${theTests.count} tests.`)
}

const createHealthPlans = async () => {
  console.log('Start creating healthPlans...')
  const theHealthPlans = await prisma.healthPlan.createMany({
    data: healthPlans.sort().map((healthPlan) => ({
      name: healthPlan,
      description: faker.lorem.sentence()
    }))
  })
  console.log(`Created ${theHealthPlans.count} healthPlans.`)
}

const createLabs = async () => {
  console.log('Start creating laboratories...')
  const theLabs = await prisma.lab.createMany({
    data: labs.map((lab) => ({
      name: lab.name,
      email: lab.email,
      phones: lab.phones,
      address: lab.address,
      website: lab.website
    }))
  })
  console.log(`Created ${theLabs.count} laboratories.`)
}

const createManufacturers = async () => {
  console.log('Start creating manufacturers...')
  const theManufacturers = await prisma.manufacturer.createMany({
    data: manufacturers.map((manufacturer) => ({
      name: manufacturer.name,
      country: manufacturer?.country
    }))
  })
  console.log(`Created ${theManufacturers.count} manufacturers.`)
}

const createMedicines = async () => {
  const medicineList: MedicineManufacturerCreateProps[] = medicines.map(
    (medicine) => ({
      tradeName: medicine.tradeName,
      scientificName: medicine.scientificName,
      pharmaceuticalForm: medicine?.pharmaceuticalForm,
      administrationRoute: medicine?.administrationRoute,
      size: medicine?.size,
      sizeUnit: medicine?.sizeUnit,
      packageTypes: medicine?.packageTypes,
      packageSize: medicine?.packageSize,
      manufacturer: {
        connect: {
          name: medicine.name
        }
      }
    })
  )

  console.log('Start creating medicines...')
  for await (const medicine of medicineList) {
    process.stdout.write('.')
    const theMedicine = await prisma.medicine.create({
      data: medicine,
      include: {
        manufacturer: true
      }
    })
  }
  console.log(`\nCreated ${medicineList.length} medicines.`)
}

const createPatient = async (name: string, email: string): Promise<void> => {
  try {
    console.log(`\nCreating patient ${name}`)
    const patient: any = await prisma.patient.create({
      data: {
        name: name,
        email: email.toLocaleLowerCase(),
        phones: ['27981330708'],
        healthPlan: {
          connect: {
            name: randomHealthPlan()
          }
        }
      }
    })
  } catch (error: any) {
    console.log('\nPatient already exists.\n')
  }
}

const getPatient = async (email: string): Promise<any | null> => {
  let result: PatientHealthPlanProps | null = null

  try {
    const patient: any | null = await prisma.patient.findFirst({
      where: {
        isActive: true,
        email: email.toLocaleLowerCase()
      },
      include: {
        healthPlan: true
      }
    })
    result = patient
  } catch (error: any) {
    console.error(error.message)
  } finally {
    return result
  }
}

const createDoctor = async (name: string, email: string): Promise<void> => {
  try {
    console.log(`\nCreating doctor ${name}\n`)
    const doctor: any = await prisma.user.create({
      data: {
        name: name,
        email: email.toLocaleLowerCase(),
        phones: ['31958730754'],
        password: '123456',
        isAdmin: true,
        role: 'doctor',
        doctorDetails: {
          create: {
            shift: randomShift(),
            specialities: {
              connect: [
                {
                  name: randomSpeciality()
                },
                {
                  name: randomSpeciality()
                },
                {
                  name: randomSpeciality()
                }
              ]
            }
          }
        }
      },
      include: {
        doctorDetails: {
          include: {
            specialities: true
          }
        }
      }
    })
  } catch (error: any) {
    console.log('\nDoctor already exists.\n')
  }
}

const getDoctor = async (email: string): Promise<any | null> => {
  let result: DoctorProps | null = null

  try {
    const doctor: any | null = await prisma.user.findFirst({
      where: {
        isActive: true,
        email: email.toLocaleLowerCase()
      },
      include: {
        doctorDetails: {
          include: {
            specialities: true
          }
        }
      }
    })
    result = doctor
  } catch (error: any) {
    console.error(error.message)
  } finally {
    return result
  }
}

interface CreatePrescriptionProps {
  description: string
  patient: PatientHealthPlanProps
  doctor: any
  medicines: any[]
}

const createPrescription = async (
  props: CreatePrescriptionProps
): Promise<PrescriptionProps | null> => {
  const { description, patient, doctor, medicines } = props
  let result: PrescriptionProps | null = null
  try {
    const prescription: any = await prisma.prescription.create({
      data: {
        description: description,
        patient: {
          connect: { email: patient.email }
        },
        doctor: {
          connect: { email: doctor.email }
        },
        medicines: {
          connect: medicines.map((medicine) => ({
            id: medicine.id
          }))
        }
      },
      include: {
        patient: {
          include: {
            healthPlan: true
          }
        },
        doctor: {
          include: {
            doctorDetails: {
              include: {
                specialities: true
              }
            }
          }
        },
        medicines: {
          include: {
            manufacturer: true
          }
        }
      }
    })
    result = prescription
  } catch (error: any) {
    console.error(error.message)
  } finally {
    return result
  }
}

const clearDB = async (): Promise<void> => {
  try {
    await prisma.user.deleteMany({})
    await prisma.patient.deleteMany({})
    await prisma.doctorDetails.deleteMany({})
    await prisma.speciality.deleteMany({})
    await prisma.healthPlan.deleteMany({})
    await prisma.test.deleteMany({})
    await prisma.lab.deleteMany({})
    await prisma.medicine.deleteMany({})
    await prisma.manufacturer.deleteMany({})
    await prisma.testRequest.deleteMany({})
    await prisma.prescription.deleteMany({})
    await prisma.appointment.deleteMany({})
  } catch (error) {
    console.error(error)
  }
}

async function main() {
  await clearDB()
  const logs = false

  console.log(
    'Start seeding the database...\nHold on.\nThis process may take some minutes.'
  )

  await createTests()
  await createSpecialities()
  await createHealthPlans()
  await createLabs()
  await createManufacturers()
  await createMedicines()

  console.log('\nStart creating users...\n')

  let totalUsers: number = 0

  console.log('Start creating random doctors...')
  totalUsers = Math.floor(Math.random() * 20 + 1)
  const doctors = await createManyUsers({ type: 'doctor', total: totalUsers })
  logs && console.log(doctors)
  console.log(`\n-> ${doctors.length} doctors created.`)

  console.log('Start creating random attendants...')
  totalUsers = Math.floor(Math.random() * 5 + 1)
  const attendants = await createManyUsers({
    type: 'attendant',
    total: totalUsers
  })
  logs && console.log(attendants)
  console.log(`\n-> ${attendants.length} attendants created.`)

  console.log('Start creating random patients...')
  totalUsers = Math.floor(Math.random() * 150 + 1)
  const patients = await createManyUsers({ type: 'patient', total: totalUsers })
  logs && console.log(patients)
  console.log(`\n-> ${patients.length} patients created.`)

  await createPatient('Juliano Costa Silva', 'apfjuliano@gmail.com')
  const juliano = await getPatient('apfjuliano@gmail.com')
  logs && console.log(juliano)

  await createDoctor('Geraldo de Souza', 'souza.geraldo@medicina.ufmg.br')
  const geraldo = await getDoctor('souza.geraldo@medicina.ufmg.br')
  logs && console.log(JSON.stringify(geraldo, null, 2))

  const randMed: any[] = []
  for (let i = 0; i < 2; i++) {
    randMed.push(await randomMedicine())
  }
  logs && console.log(JSON.stringify(randMed, null, 2))

  const prescription: PrescriptionProps | null = await createPrescription({
    description: 'Prescription for patient',
    patient: juliano,
    doctor: geraldo,
    medicines: randMed
  })

  logs &&
    console.log(
      `\nCreated prescription:\n ${JSON.stringify(prescription, null, 2)}`
    )
}

main()
  .catch((e: Error) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  });
