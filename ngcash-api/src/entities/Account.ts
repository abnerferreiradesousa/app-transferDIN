import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";
import { User } from "./User";

@Entity("Accounts")
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    balance: number

    @OneToMany(() => Transaction, (transaction) => transaction.account)
    transactions: Transaction[]

    @OneToOne(() => User, (user) => user.account)
    user: User
}