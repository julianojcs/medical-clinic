import { DoctorProps, PatientProps, MedicineManufacturerProps } from '../'

export interface PrescriptionProps {
  description: string
  patient: PatientProps
  doctor: DoctorProps
  medicines: MedicineManufacturerProps[]
}
// const prescription: PrescriptionProps = {
//   description: '',
//   patient: {
//     name: '',
//     email: '',
//     phones: [],
//     healthPlan: {
//       name: '',
//       description: '',
//     },
//   },
//   doctor: {
//     name: '',
//     email: '',
//     password: '',
//     role: '',
//     doctorDetails: {
//       shift: {
//         timePeriod: ['afternoon'],
//         weekDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
//       },
//       specialities: [
//         {
//           name: '',
//           description: '',
//         },
//       ],
//     },
//   },
//   medicines: [{
//     tradeName: '',
//     scientificName: ',',
//     pharmaceuticalForm: '',
//     administrationRoute: '',
//     size: 0,
//     sizeUnit: '',
//     packageTypes: '',
//     packageSize: 0,
//     manufacturer: {
//       name: '',
//       country: '',
//     },
//   }],
// }

export interface PrescriptionCreateProps {
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
