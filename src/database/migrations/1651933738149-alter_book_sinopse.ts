import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterBookSinopse1651933738149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('books',new TableColumn({
        name:'sinopse',
        type:'varchar',
        isNullable:true,
        length:'200'
      }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('books','sinopse')


    }

}
