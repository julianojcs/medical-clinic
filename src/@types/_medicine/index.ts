import { ManufacturerProps } from '../_manufacturer'

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
