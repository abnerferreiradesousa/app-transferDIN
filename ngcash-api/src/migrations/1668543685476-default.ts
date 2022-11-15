import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668543685476 implements MigrationInterface {
    name = 'default1668543685476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_f578061e39a1028d3ade911eb49"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "accountId"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "debitedAccountId" integer`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "creditedAccountId" integer`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_8f0050abe277e9f24b93128f975" FOREIGN KEY ("debitedAccountId") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_76ade6f775352ef0eebcb78f16f" FOREIGN KEY ("creditedAccountId") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_76ade6f775352ef0eebcb78f16f"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_8f0050abe277e9f24b93128f975"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "creditedAccountId"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "debitedAccountId"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "accountId" integer`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_f578061e39a1028d3ade911eb49" FOREIGN KEY ("accountId") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
