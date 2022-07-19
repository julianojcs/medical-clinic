import { Shift } from "../@types";
import { healthPlans } from './lists'

export * from './lists'

export const shiftValues = {
  timePeriod: ['morning', 'afternoon', 'evening'],
  weekDays: [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ]
}

export const defaultShift = {
  timePeriod: ['morning', 'afternoon'],
  weekDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
}

export const validateShift = (value: Shift = defaultShift): string[] => {
  const { timePeriod, weekDays } = value
  const errorMessages: string[] = []

  if (timePeriod.length > 3)
    errorMessages.push('Invalid timePeriod length: ' + timePeriod.length)
  if (weekDays.length > 7)
    errorMessages.push('Invalid weekDays length: ' + weekDays.length)
  const invalidWeekDays = weekDays.filter(
    (value) => !shiftValues.weekDays.includes(value)
  )
  if (invalidWeekDays.length > 0)
    errorMessages.push('Invalid weekDays value(s): ' + invalidWeekDays)
  const invalidTimePeriod = timePeriod.filter(
    (value) => !shiftValues.timePeriod.includes(value)
  )
  if (invalidTimePeriod.length > 0)
    errorMessages.push('Invalid timePeriod value(s): ' + invalidTimePeriod)
  if (errorMessages.length > 0) console.log(errorMessages)
  return errorMessages
}

export const isValidShift = (value: Shift): boolean => {
  return validateShift(value).length === 0
}

export const transformPhone = (value: string): string => {
  return value.replace(/\D/g, '')
}

export const transformPhones = (value: string[] = []): string[] => {
  if (value.length === 0) return []
  return value.map((value) => transformPhone(value), '')
}

export const transformName = (value: string): string => {
  return value
    ?.split(' ')
    .map((s) => {
      return s.length > 2
        ? s[0].toUpperCase() + s.slice(1).toLowerCase()
        : s.toLowerCase()
    })
    .join(' ')
}

export const transformEmail = (value: string): string => {
  return value?.toLowerCase()
}

export const randomHealthPlan = (): string => {
  return healthPlans[Math.floor(Math.random() * healthPlans.length)]
}