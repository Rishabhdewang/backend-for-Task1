
exports.up = function (knex) {
    return knex.schema.createTable("carts", (t3) => {
        t3.increments("id").primary();
        t3.integer("item_id").references("id").inTable("items").notNullable().onDelete("CASCADE");
        t3.integer("quantity").notNullable();
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("carts");

};
