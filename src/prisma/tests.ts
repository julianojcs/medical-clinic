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

async function main() {
  console.log('Start seeding the database...\nHold on.\nThis process may take several minutes.')

  // await prisma.speciality.deleteMany({});
  // await prisma.user.deleteMany({});
  // await prisma.doctorDetails.deleteMany({});
  // await createSpecialities();

  const data: userCreateProps = {
    name: 'Juliano Costa',
    email: 'juliano@gmail.com',
    password: '123456',
    phones: ['+5511999999999'],
    isAdmin: true,
    role: 'doctor',
    doctorDetails: {
      create: {
        shift: {
          timePeriod: [ 'morning', 'afternoon'],
          weekDays: [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        },
        specialities: {
          connect: {
            name: 'Cardiologist'
          }
        }
      }
    },
  }

  const doctor = await prisma.user.create({
    data: data,
    include: {
      doctorDetails: {
        include: {
          specialities: true
        }
      },
    }
  });
  console.log(doctor);
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
