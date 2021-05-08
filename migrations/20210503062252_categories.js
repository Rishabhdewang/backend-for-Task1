
exports.up = function (knex) {
    return knex.schema.createTable("items", (t2) => {
        t2.integer("id").primary();
        t2.integer("category_id").references("id").inTable("categories").notNullable().onDelete("CASCADE");
        t2.string("name").notNullable();
        t2.string("description").notNullable();
        t2.integer("price").notNullable();
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("items");

};
