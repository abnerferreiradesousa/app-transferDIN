import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668537796508 implements MigrationInterface {
    name = 'default1668537796508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_ae4b2af385de8a17c81f9939f8a"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "debitedAccountId"`);
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "account_id"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "creditedAccountId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_76ade6f775352ef0eebcb78f16f" FOREIGN KEY ("creditedAccountId") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP CONSTRAINT "FK_76ade6f775352ef0eebcb78f16f"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ALTER COLUMN "creditedAccountId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "account_id" integer`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "debitedAccountId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD CONSTRAINT "FK_ae4b2af385de8a17c81f9939f8a" FOREIGN KEY ("account_id") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
