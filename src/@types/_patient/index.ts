import { HealthPlanProps } from '..'

export interface PatientProps {
  name: string
  email: string
  phones?: string[]
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

export interface PatientHealthPlanProps extends PatientProps, HealthPlanProps {}
