import { faker } from '@faker-js/faker';

import { specialities, tests, healthPlans } from '../util'

const randomTest = (): string => {
  return tests[Math.floor(Math.random() * tests.length)]
}

const randomSpeciality = () => {
  return specialities[Math.floor(Math.random() * specialities.length)]
}

const randomHealthPlan = (): string => {
  return healthPlans[Math.floor(Math.random() * healthPlans.length)]
}

const randomTimePeriod = (): string[] => {
  const timePeriods: string[][] = [
    ['morning', 'afternoon', 'evening'],
    ['morning', 'afternoon'],
    ['afternoon', 'evening'],
    ['morning', 'evening'],
    ['morning'],
    ['afternoon'],
    ['evening']
  ]
  const randomIndex: number = Math.floor(Math.random() * 7)
  return timePeriods[randomIndex]
}

const weekDays: string[] = [
  '0monday',
  '1tuesday',
  '2wednesday',
  '3thursday',
  '4friday',
  '5saturday'
]

const randomShiftValues = () => {
  const shiftValues: Set<string> = new Set()
  const random: number = Math.floor(Math.random() * 6 + 1)
  for (let i = 1; i <= random; i++) {
    shiftValues.add(weekDays[Math.floor(Math.random() * 6)])
  }
  return Array.from(shiftValues)
    .sort()
    .map((day) => day.slice(1))
}

const randomShift = () => {
  return {
    timePeriod: randomTimePeriod(),
    weekDays: randomShiftValues()
  }
}

const randomPhones = () => {
  const random: number = Math.floor(Math.random() * 3)
  const phones: string[] = []
  for (let i = 0; i < random; i++) {
    phones.push(faker.phone.number('(##)#####-####'))
  }
  return phones
}

const createUser = (type: string) => {
  let user: any = {
    name: faker.name.findName(),
    email: faker.internet.email().toLocaleLowerCase(),
    password: faker.internet.password(8)
  }

  switch (type) {
    case 'doctor':
      user = {
        ...user,
        phones: randomPhones(),
        isAdmin: faker.datatype.boolean(),
        role: 'doctor',
        speciality: randomSpeciality(),
        shift: randomShift()
      }
      break
    case 'patient':
      user = {
        ...user,
        healthPlan: `${faker.company.companyName()} ${faker.company.companySuffix()}`
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
  }
  return user
}

export {
  createUser,
  randomPhones,
  randomShift,
  randomSpeciality,
  randomTest,
  randomHealthPlan,
  randomTimePeriod,
  randomShiftValues
}