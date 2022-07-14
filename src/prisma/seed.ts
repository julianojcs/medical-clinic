import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import {
  DoctorProps,
  PatientProps,
  AttendantProps,
  userCreateProps,
} from '../@types';
import { specialities, healthPlans, labs } from '../util';

// Instantiate Prisma Client
const prisma = new PrismaClient();

const randomSpeciality = (): string => {
  return specialities[Math.floor(Math.random() * specialities.length)];
};

const randomHealthPlan = (): string => {
  return healthPlans[Math.floor(Math.random() * healthPlans.length)];
};

const randomTimePeriod = (): string[] => {
  const timePeriods: string[][] = [
    ['morning', 'afternoon', 'evening'],
    ['morning', 'afternoon'],
    ['afternoon', 'evening'],
    ['morning', 'evening'],
    ['morning'],
    ['afternoon'],
    ['evening'],
  ];
  const randomIndex: number = Math.floor(Math.random() * 7);
  return timePeriods[randomIndex];
};

const weekDays: string[] = [
  '0monday',
  '1tuesday',
  '2wednesday',
  '3thursday',
  '4friday',
  '5saturday',
];

const randomShiftValues = () => {
  const shiftValues: Set<string> = new Set();
  const random: number = Math.floor(Math.random() * 6 + 1);
  for (let i = 1; i <= random; i++) {
    shiftValues.add(weekDays[Math.floor(Math.random() * 6)]);
  }
  return Array.from(shiftValues)
    .sort()
    .map((day) => day.slice(1));
};

const randomShift = () => {
  return {
    timePeriod: randomTimePeriod(),
    weekDays: randomShiftValues(),
  };
};

const randomPhones = () => {
  const random: number = Math.floor(Math.random() * 3);
  const phones: string[] = [];
  for (let i = 0; i < random; i++) {
    phones.push(faker.phone.number('(##)#####-####'));
  }
  return phones;
};

const createUser = (type: string) => {
  let user: any = {
    name: faker.name.findName(),
    email: faker.internet.email().toLocaleLowerCase(),
    phones: randomPhones(),
  };

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
                name: randomSpeciality(),
              }
            },
          }
        },
      };
      break;
    case 'attendant':
      user = {
        ...user,
        password: faker.internet.password(8),
        phones: randomPhones(),
        isAdmin: faker.datatype.boolean(),
        role: 'attendant',
      };
      break;
    case 'patient':
      user = {
        ...user,
        healthPlan: {
          connect: {
            name: randomHealthPlan(),
          },
        },
      };
      break;
    }
  return user;
};

const clearDB = async () => {
  try {
    await prisma.appointment.deleteMany({});
    await prisma.doctorDetails.deleteMany({});
    await prisma.examRequest.deleteMany({});
    await prisma.exam.deleteMany({});
    await prisma.healthPlan.deleteMany({});
    await prisma.lab.deleteMany({});
    await prisma.manufacturer.deleteMany({});
    await prisma.medicine.deleteMany({});
    await prisma.patient.deleteMany({});
    await prisma.prescription.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.speciality.deleteMany({});
  } catch (error) {
    console.error(error);
  }
};

interface manyUsersProps {
  type: string;
  total: number;
}
const manyUsers = (props: manyUsersProps) => {
  const { type, total } = props;
  const users: ( PatientProps | userCreateProps | any)[] = [];
  for (let i = 0; i < total; i++) {
    process.stdout.write('.')
    users.push(createUser(type));
  }
  return users;
};

const createManyUsers = async (props: manyUsersProps) => {
  const { type } = props;
  const response: any[] = [];
  const users = manyUsers(props);
  for await (const user of users) {
    switch (type) {
      case 'attendant':
        process.stdout.write('.')
        response.push(await prisma.user.create({ data: user }));
        break;
      case 'doctor':
        process.stdout.write('.')
        response.push(await prisma.user.create({
          data: user,
          include: {
            doctorDetails: {
              include: {
                specialities: true
              }
            },
          },
        }));
        break;
      case 'patient':
        process.stdout.write('.')
        response.push(await prisma.patient.create({
          data: user,
          include: {  healthPlan: true },
        }));
        break;
    }
  };
  return response;
}

const createSpecialities = async () => {
  console.log('Start creating specialities...');
  const theSpecialities = await prisma.speciality.createMany({
    data: specialities.sort().map(speciality => ({
      name: speciality,
      description: faker.lorem.sentence(),
    })),
  });
  console.log(`Created ${theSpecialities.count} specialities.`);
}

const createHealthPlans = async () => {
  console.log('Start creating healthPlans...');
  const theHealthPlans = await prisma.healthPlan.createMany({
    data: healthPlans.sort().map(healthPlan => ({
      name: healthPlan,
      description: faker.lorem.sentence(),
    })),
  });
  console.log(`Created ${theHealthPlans.count} healthPlans.`);
}

const createLabs = async () => {
  console.log('Start creating laboratories...');
  const theLabs = await prisma.lab.createMany({
    data: labs.sort().map(lab => ({
      name: lab.name,
      email: lab.email,
      phones: lab.phones,
      address: lab.address,
      website: lab.website,
    })),
  });
  console.log(`Created ${theLabs.count} laboratories.`);
}

async function main() {
  console.log('Start seeding the database...\nHold on.\nThis process may take several minutes.')

  // await clearDB();

  await createSpecialities();
  await createHealthPlans();
  await createLabs();


  let totalUsers: number = 0;

  // console.log('Start creating random doctors...');
  // totalUsers = Math.floor(Math.random() * 20 + 1);
  // const doctors = await createManyUsers({type: 'doctor', total: totalUsers});
  // // console.log(doctors);
  // console.log(`\n-> ${doctors.length} doctors created.`);

  // console.log('Start creating random attendants...');
  // totalUsers = Math.floor(Math.random() * 5 + 1);
  // const attendants = await createManyUsers({type: 'attendant', total: 50});
  // // console.log(attendants);
  // console.log(`\n-> ${attendants.length} attendants created.`);

  // console.log('Start creating random patients...');
  // totalUsers = Math.floor(Math.random() * 50 + 1);
  // const patients = await createManyUsers({type: 'patient', total: totalUsers});
  // // console.log(patients);
  // console.log(`\n-> ${patients.length} patients created.`);
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
