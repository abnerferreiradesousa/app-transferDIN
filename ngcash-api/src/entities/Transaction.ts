import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";

@Entity("Transactions")
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: number

    @CreateDateColumn()
    createdAt: Date

    // Tem alguma forma melhor de fazer esse relacionamento de duas colunas 
    // na entidade Transaction com uma na entidade Account?
    @ManyToOne(() => Account, account => account.transactions)
    @JoinColumn({name: "debitedAccountId"})
    account: Account

    @ManyToOne(() => Account, account => account.transactions)
    @JoinColumn({name: "creditedAccountId"})
    account2: Account
}