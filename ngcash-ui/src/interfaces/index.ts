export interface IAccount {
  id?: number
  balance: number
  transactions?: Transaction[]
  user?: IUser
}

export interface IUser {
  id?: number
  username: string
  password: string
  account?: IAccount
}

export interface IUserToken extends IUser {
  token: string
}

export interface Transaction {
  id?: number
  value: number
  createdAt?: Date
  debitedAccountId?: number
  creditedAccountId?: number
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

