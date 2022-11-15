import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668546303087 implements MigrationInterface {
    name = 'default1668546303087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "accountId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_13f7031faec63ad1ad7c9ad6a28" UNIQUE ("accountId")`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_13f7031faec63ad1ad7c9ad6a28" FOREIGN KEY ("accountId") REFERENCES "Accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_13f7031faec63ad1ad7c9ad6a28"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_13f7031faec63ad1ad7c9ad6a28"`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "accountId" SET NOT NULL`);
    }

}
