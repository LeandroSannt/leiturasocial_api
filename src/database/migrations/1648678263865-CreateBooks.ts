import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooks1648678263865 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
      new Table({
          name:"books",
          columns:[
            {
              name:'id',
              type:'uuid',
              isPrimary:true,
              generationStrategy:'uuid',
              default:'uuid_generate_v4()'
            },

            {
              name:'title',
              type:'varchar',
              isNullable:false
            },
            {
              name:'photo',
              type:'varchar',
            },

            {
              name:'text',
              type:'varchar',
              isNullable:false
            },

            {
              name:'author',
              type:'varchar',
              isNullable:false
            },

            {
              name:'numberpages',
              type:'integer',
              isNullable:false
            },


            {
              name:'category_id',
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
              name: 'FKbooks_Categories',
              referencedTableName: 'categories',
              referencedColumnNames: ['id'],
              columnNames: ['category_id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("books")

    }

}
