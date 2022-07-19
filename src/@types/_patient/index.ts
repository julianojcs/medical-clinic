import { HealthPlanProps } from '../'

export interface PatientProps {
  name: string
  email: string
  phones?: string[]
  healthPlan?: HealthPlanProps
}

export interface PatientCreateProps {
  name: string
  email: string
  phones?: string[]
  healthPlan?: {
    connect: {
      name: string
    }
  }
}

export interface PatientHealthPlanProps {
  name: string
  email: string
  phones?: string[]
  healthPlan: {
    name: string
    description?: string
  }
}
export interface PatientHealthPlan {
  id: string
  name: string
  email: string
  phones: string[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  healthPlanId: string
  healthPlan: {
    healthPlanId: string
    name: string
    description?: string
  }
}
