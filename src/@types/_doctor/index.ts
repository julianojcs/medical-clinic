import { HealthPlanProps } from '../_healthPlan'
import { UserProps } from '../_user'

export interface Shift {
  timePeriod: string[]
  weekDays: string[]
}

export interface DoctorDetailProps {
  shift: Shift
  specialities: [
    {
      name: string
      description: string
    }
  ]
}

export interface DoctorCreateProps {
  name: string
  email: string
  password: string
  phones?: string[]
  isAdmin?: boolean
  role?: string
  doctorDetails?: {
    create: {
      shift: Shift | any
      specialities: {
        connect: {
          name: string
        }
      }
    }
  }
}

export interface DoctorDetailCreateProps {
  doctorDetails?: {
    create: {
      shift: Shift | any
      speciality: {
        connect: {
          name: string
        }
      }
    }
  }
}

export interface DoctorProps extends UserProps, DoctorDetailProps {}

export interface UserDoctorDetailProps extends UserProps, HealthPlanProps {}
