import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class AddBookId1654823692879 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('comments',new TableColumn({
        name:'book_id',
        type:'uuid',
        isNullable:true
      }))

      await queryRunner.createForeignKey('comments', new TableForeignKey({
        name:'FKCommentsBook',
        columnNames:['book_id'],
        referencedColumnNames:['id'],
        referencedTableName:'books',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
