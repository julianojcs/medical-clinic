
export interface Shift {
  timePeriod: string[]
  weekDays: string[]
}

export interface userCreateProps {
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

export interface PatientProps {
  name: string
  email: string
  phones?: string[]
  healthPlan?: {
    connect: {
      name: string
    }
  }
}

export interface AttendantProps {
  name: string
  email: string
  phones?: string[]
  password: string
  role: string
  isAdmin?: boolean
}

export interface doctorDetailProps {
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

export interface DoctorProps extends AttendantProps, doctorDetailProps {}

export interface HealthPlanProps {
  name: string
  description?: string
}

export interface ExamRequestProps {
  requestDate?: Date
}

export interface LabProps {
  name: string
  email?: string
  phones?: string[]
  address?: string
  website?: string
}

export interface ExamProps {
  name: string
  examRequest: string
}

export interface AppointmentProps {
  date: string
}

export interface MedicineProps {
  tradeName: string
  scientificName: string
  pharmaceuticalForm?: string
  administrationRoute?: string
  size?: number
  sizeUnit?: string
  packageTypes?: string
  packageSize?: number
}

export interface MedicineManufacturerCreateProps extends MedicineProps {
  manufacturer: {
    connect: {
      name: string
    }
  }
}

export interface MedicineManufacturerProps
  extends MedicineProps,
    ManufacturerProps {}

// Interface to import medicineList from json list
export interface MedicineListProps extends MedicineProps {
  name: string
}
export interface ManufacturerProps {
  name: string
  country?: string
}

export interface SpecialityProps {
  name: string
  description?: string
}

export interface TestProps {
  name: string
}

export interface PrescriptionsProps {
  description: string
  patient: {
    connect: {
      name: string
    }
  }
  doctor: {
    connect: {
      name: string
    }
  }
  medicines: {
    connect: [
      {
        tradeName: string
        packageTypes: string
        packageSize: string
      }
    ]
  }
}