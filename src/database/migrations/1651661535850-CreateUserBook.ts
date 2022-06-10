import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class UserBook1651661535850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
      new Table({
          name:"users_books",
          columns:[
            {
              name:'id',
              type:'uuid',
              isPrimary:true,
              generationStrategy:'uuid',
              default:'uuid_generate_v4()'
            },


            {
              name:'book_id',
              type:'uuid',
              isNullable:false
            },

            {
              name:'user_id',
              type:'uuid',
              isNullable:false
            },

            {
              name:'created_at',
              type:'timestamp',
              default:'now()'
            },
          ],
          foreignKeys: [
            {
              name: 'FKbook_User',
              referencedTableName: 'books',
              referencedColumnNames: ['id'],
              columnNames: ['book_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            {
              name: 'FKbooks_Users',
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
              columnNames: ['user_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users_books")
    }

}
