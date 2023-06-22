import { Knex } from "knex";


/**
 * Run the migrations.
 * @return void
 */

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users", table => {
        table.uuid("id").primary();
        table.string("username", 200).notNullable();
        table.string("email", 100).unique();
        table.string("password")
        table.timestamps(true, true);
    });
}


/**
 * Reverse the migrations.
 * @return void
 */

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("users");
}
