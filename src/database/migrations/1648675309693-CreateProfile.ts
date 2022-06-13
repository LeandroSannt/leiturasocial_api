import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfile1648675309693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
      new Table({
          name:"profiles",
          columns:[
            {
              name:'id',
              type:'uuid',
              isPrimary:true,
              generationStrategy:'uuid',
            },

            {
              name:'name',
              type:'text',
              isNullable:false
            },

            {
              name:'created_at',
              type:'timestamp',
              default:'now()'
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("profiles")
    }

}
