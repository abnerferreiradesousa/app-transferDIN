import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";

@Entity("Accounts")
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    balance: number

    @OneToMany(() => Transaction, (transaction) => transaction.account)
    transactions: Transaction[]
}