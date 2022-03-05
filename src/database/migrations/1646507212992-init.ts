import {MigrationInterface, QueryRunner} from "typeorm";

export class init1646507212992 implements MigrationInterface {
    name = 'init1646507212992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "testdb_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_40993c74c43bf0a33db4efc5dfa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "testdb_entity"`);
    }

}
