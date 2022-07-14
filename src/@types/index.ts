
export interface Shift {
  timePeriod: string[];
  weekDays: string[];
}

export interface userCreateProps {
  name: string;
  email: string;
  password: string;
  phones?: string[];
  isAdmin?: boolean;
  role?: string;
  doctorDetails?: {
    create: {
      shift: Shift | any;
      specialities: {
        connect: {
          name: string
        },
      },
    },
  },
}

export interface PatientProps {
  name: string
  email: string
  phones?: string[]
  healthPlan?: {
    connect: {
      name: string
    }
  },
}

export interface AttendantProps {
  name: string;
  email: string;
  phones?: string[];
  password: string;
  role: string;
  isAdmin?: boolean;
}

export interface doctorDetailProps {
  doctorDetails?: {
    create: {
      shift: Shift | any;
      speciality: {
        connect: {
          name: string
        }
      }
    }
  },
}

export interface DoctorProps extends AttendantProps, doctorDetailProps{}

export interface HealthPlanProps {
  name: string;
  description?: string;
}

export interface ExamRequestProps {
  requestDate?: Date
}

export interface LabProps {
  name: string;
  email?: string;
  phones?: string[];
  address?: string;
  website?: string;
}

export interface ExamProps {
  name: string;
  examRequest: string;
}

export interface AppointmentProps {
  date: string;
}

export interface MedicineProps {
  tradeName: string;
  scientificName: string;
  pharmaceuticalForm?: string;
  AdministrationRoute?: string;
  size?: number;
  sizeUnit?: string;
  packageTypes?: string;
  packageSize?: number;
}

export interface ManufacturerProps {
  name: string;
  country?: string;
}