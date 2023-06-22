import { Knex } from "knex";


/**
 * Run the migrations.
 * @return void
 */

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("wallets", table => {
        table.uuid("id").primary();
        table.decimal("balance", 8, 2);
        table.uuid('user_id').nullable()
        table.foreign("user_id").references("users.id").onDelete("cascade");
        table.uuid('currency_id').nullable()
        table.foreign("currency_id").references("currencies.id").onDelete("cascade");
        table.timestamps(true, true);
    })
}


/**
 * Reverse the migrations.
 * @return void
 */

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("wallets");
}
