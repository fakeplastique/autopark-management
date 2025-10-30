import { MigrationInterface, QueryRunner } from "typeorm";

export class AddVehicleStatusEnum1761862879564 implements MigrationInterface {
    name = 'AddVehicleStatusEnum1761862879564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "status" DROP DEFAULT`);

        await queryRunner.query(`CREATE TYPE "public"."vehicles_status_enum" AS ENUM('available', 'in_use', 'maintenance', 'out_of_service')`);

        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "status" TYPE "public"."vehicles_status_enum" USING "status"::text::"public"."vehicles_status_enum"`);

        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "status" SET DEFAULT 'available'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "status" DROP DEFAULT`);

        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "status" TYPE character varying USING "status"::text`);

        await queryRunner.query(`DROP TYPE "public"."vehicles_status_enum"`);

        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "status" SET DEFAULT 'available'`);
    }

}
