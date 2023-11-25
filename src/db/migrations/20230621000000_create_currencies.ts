import { type Knex } from 'knex';

/**
 * Run the migrations.
 * @return void
 */

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('currencies', (table) => {
    table.uuid('id').primary();
    table.string('code');
    table.string('name');
    table.string('symbol')
    table.timestamps(true, true);
  });
}

/**
 * Reverse the migrations.
 * @return void
 */

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('currencies');
}
