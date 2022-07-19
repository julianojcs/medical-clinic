import { PrismaClient } from '@prisma/client'
// Instantiate Prisma Client
const prisma = new PrismaClient()

async function main() {
  const updatedAttendant = await prisma.user.update({
    where: {
      id: '9d97ee7f-5f36-42a9-9115-461d9202596d'
    },
    data: {
      email: 'ryani@gmail.com'
    }
  })
  console.log(updatedAttendant)
}

main()
  .catch((e: Error) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // Disconnect Prisma Client
    await prisma.$disconnect()
  })
