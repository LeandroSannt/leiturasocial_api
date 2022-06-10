import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateComments1645013774855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:"comments",
          columns:[
            {
              name:'id',
              type:'uuid',
              isPrimary:true,
              generationStrategy:'uuid',
              default:'uuid_generate_v4()'
            },

            {
              name:'description',
              type:'text',
              isNullable:false
            },

            {
              name: 'post_id',
              type: 'uuid',
              isNullable: false,
            },

            {
              name:'created_at',
              type:'timestamp',
              default:'now()'
            },
          ],
          foreignKeys: [
            {
              name: 'FKPostsComments',
              referencedTableName: 'posts',
              referencedColumnNames: ['id'],
              columnNames: ['post_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("comments")
    }
}
