import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";

@Entity("Transactions")
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: number

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @Column()
    debitedAccountId: number

    @Column()
    creditedAccountId: number

    // Tem alguma forma melhor de fazer esse relacionamento de duas colunas 
    // na entidade Transaction com uma na entidade Account?
    @ManyToOne(() => Account, account => account.transactions, {eager: true})
    @JoinColumn({name: "debitedAccountId"})
    account: Account

    @ManyToOne(() => Account, account => account.transactions, {eager: true})
    @JoinColumn({name: "creditedAccountId"})
    account2: Account
}