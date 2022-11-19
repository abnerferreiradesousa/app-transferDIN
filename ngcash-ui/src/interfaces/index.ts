export type Token = {
  token: string
}

export interface Transaction {
  id?: number
  value: number
  createdAt?: Date
  debitedAccountId?: number
  creditedAccountId?: number
}

export interface Account {
  id?: number
  balance: number
  transactions?: Transaction[]
  user?: User
}

export interface User {
  id?: number
  username: string
  password: string
  account?: Account
}

export type SimpleUser = {
  username: string
  password: string
  account: {
    balance: number
  }
}

export type TransferData = {
  usernameCredited: string
  value: number
}

export type TransactionData = {
  value: number
  debitedAccountId?: number
  creditedAccountId?: number
}

export type FilterInfo = {
  dataStart: Date
  dataEnd: Date
  transactionType?: string
}

