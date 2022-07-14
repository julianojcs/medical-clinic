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
