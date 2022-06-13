import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1629551831045 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name:"users",
        columns:[
          {
            name:'id',
            type:'uuid',
            isPrimary:true,
            generationStrategy:'uuid',
          },
          {
            name:'name',
            type:'varchar',
            isNullable:false
          },

          {
            name:'surname',
            type:'varchar',
            isNullable:false
          },

          {
            name:'email',
            type:'varchar',
            isNullable:false
          },

          {
            name:'telephone',
            type:'varchar',
            isNullable:false
          },

          {
            name:'password',
            type:'varchar',
            isNullable:false
          },

          {
            name:'avatar',
            type:'varchar',
            isNullable:true

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

      await queryRunner.dropTable("users")
    }

}
