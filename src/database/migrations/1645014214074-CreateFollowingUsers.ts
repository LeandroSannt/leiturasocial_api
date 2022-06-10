import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFollowingUsers1645014214074 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:"following_users",
          columns:[
            {
              name:'id',
              type:'uuid',
              isPrimary:true,
              generationStrategy:'uuid',
              default:'uuid_generate_v4()'
            },

            {
              name: 'user_id',
              type: 'uuid',
              isNullable: false,
            },

            {
              name: 'follower_user_id',
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
              name: 'FKUsersFollowing_users',
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
      await queryRunner.dropTable("following_users")

    }

}
