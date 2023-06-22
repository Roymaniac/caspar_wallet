import { Knex } from "knex";


/**
 * Run the migrations.
 * @return void
 */

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("currencies", table => {
        table.uuid("id").primary();
        table.string("name");
        table.string("abbreviation");
        table.timestamps(true, true);
    })
}


/**
 * Reverse the migrations.
 * @return void
 */

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("currencies");
}
