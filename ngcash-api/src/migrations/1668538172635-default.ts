import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668538172635 implements MigrationInterface {
    name = 'default1668538172635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_76ade6f775352ef0eebcb78f16f"`);
        await queryRunner.query(`ALTER TABLE "Transactions" RENAME COLUMN "creditedAccountId" TO "accountId"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_f578061e39a1028d3ade911eb49" FOREIGN KEY ("accountId") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_f578061e39a1028d3ade911eb49"`);
        await queryRunner.query(`ALTER TABLE "Transactions" RENAME COLUMN "accountId" TO "creditedAccountId"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_76ade6f775352ef0eebcb78f16f" FOREIGN KEY ("creditedAccountId") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
