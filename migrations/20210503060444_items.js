
exports.up = function (knex) {
    return knex.schema.createTable("categories", (t1) => {
        t1.integer("id").primary();
        t1.string("name").notNullable();
        t1.string("description").notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("categories")
};
