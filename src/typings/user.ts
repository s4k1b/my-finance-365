export interface User {
  id: number
  name: string
  email: string
  profilePicUrl?: string
}

export interface Account {
  id: number
  accountNumber: number
  bankName: string
  branchName: string
  balance: number
  logoUrl?: string
}
