import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Account} from "./Account";

@Entity("Users")
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({type: 'text'})
	username: string;

	@Column({type: 'text'})
	password: string;

	@OneToOne(() => Account, account => account.user, {cascade: true, eager: true , onDelete: "CASCADE"})
	@JoinColumn({name: 'accountId'})
	account: Account;
}
