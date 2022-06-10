import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterUserIsAdmin1652219342685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('users',new TableColumn({
        name:'isAdmin',
        type:'boolean',
        isNullable:true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('users','isAdmin')

    }

}
