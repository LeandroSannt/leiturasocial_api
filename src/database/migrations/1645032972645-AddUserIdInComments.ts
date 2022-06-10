import {MigrationInterface, QueryRunner,TableColumn,TableForeignKey} from "typeorm";

export class AddUserIdInComments1645032972645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.addColumn('comments',new TableColumn({
        name:'user_id',
        type:'uuid',
        isNullable:true
      }))

      await queryRunner.createForeignKey('comments', new TableForeignKey({
        name:'FKuseridComments',
        columnNames:['user_id'],
        referencedColumnNames:['id'],
        referencedTableName:'users',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropForeignKey('comments','FKuseridComments')
      await queryRunner.dropColumn('comments','user_id')

      await queryRunner.dropColumn('comments',new TableColumn({
        name:'user_id',
        type: 'varchar'
      }))


    }

}
