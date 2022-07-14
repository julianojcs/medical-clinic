export interface UserProps {
  name: string
  email: string
  password: string
  phones?: string[]
  isAdmin?: boolean
  role: string
}
