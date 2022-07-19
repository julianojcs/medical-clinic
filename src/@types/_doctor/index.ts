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

export interface DoctorDetailCreateProps {
  doctorDetails?: {
    create: {
      shift: Shift
      specialities: {
        connect: { name: string }[]
      }
    }
  }
}

export interface DoctorCreateProps extends UserProps {
  doctorDetails?: {
    create: {
      shift: Shift
      specialities: {
        connect: { name: string }[]
      }
    }
  }
}
// const teste: DoctorCreateProps = {
//   name: '',
//   email: '',
//   password: '',
//   role: '',
//   doctorDetails: {
//     create: {
//       shift: {
//         timePeriod: ['afternoon'],
//         weekDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
//       },
//       specialities: {
//         connect: [
//           { name: 'spec1' },
//           { name: 'spec2' },
//           { name: 'spec3' },
//         ]
//       }
//     }
//   }
// }
// console.log(teste)

export interface DoctorProps extends UserProps {
  doctorDetails: {
    shift: Shift
    specialities: [
      {
        name: string
        description: string
      }
    ]
  }
}
// const teste: DoctorProps = {
//   name: '',
//   email: '',
//   password: '',
//   role: '',
//   doctorDetails: {
//     shift: {
//       timePeriod: [],
//       weekDays: []
//     },
//     specialities: [
//       {
//         name: '',
//         description: ''
//       }
//     ]
//   }
// }
// console.log(teste)