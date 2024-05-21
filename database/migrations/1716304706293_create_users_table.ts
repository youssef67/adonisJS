import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('surname').notNullable()
      table.string('compagny_name').notNullable()
      table.string('siret_number').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('status').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}