/* eslint-disable prettier/prettier */
import { BaseSchema } from '@adonisjs/lucid/schema'
import Roles from '../../app/enums/Roles.js'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(Roles.USER)
      table.string('name').notNullable()
      table.string('surname').notNullable()
      table.string('status').defaultTo('pending')
      table.string('compagny_name').notNullable()
      table.string('siret_number').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}