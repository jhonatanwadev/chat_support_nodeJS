import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsInConnection1619211964052 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.addColumn("connections", new TableColumn({
            name: "socket_id",
            type: "varchar"
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("connections", new TableColumn({
            name: "socket_id",
            type: "varchar"
        }));

    }

}
