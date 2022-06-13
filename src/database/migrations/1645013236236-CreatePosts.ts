import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePosts1645013236236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:"posts",
          columns:[
            {
              name:'id',
              type:'uuid',
              isPrimary:true,
              generationStrategy:'uuid',
            },

            {
              name:'description',
              type:'text',
              isNullable:false
            },

            {
              name: 'user_id',
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
              name: 'FKPostsUser',
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
      await queryRunner.dropTable("posts")
    }

}
