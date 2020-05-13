exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl.string('vin', 17).notNullable().unique();
    tbl.string('make', 20).notNullable();
    tbl.string('model', 20).notNullable();
    tbl.decimal('mileage', .2).notNullable();
    tbl.string('transmission', 20);
    tbl.string('title', 20);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
