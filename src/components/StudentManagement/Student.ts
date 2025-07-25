export interface Note {
  id: number
  title: string
  description: string
  course: string
  branch: string
  status: "Active" | "Completed"
  file?: File
  location: string
  email: string
}

export interface FormData {
  title: string
  description: string
  course: string
  branch: string
  password: string
  firstName: string
  lastName: string
  email: string
  dateOfBirth: string
  gender: string
  qualification: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  pinCode: string
  phoneNumber: string
  altPhoneNumber: string
}
