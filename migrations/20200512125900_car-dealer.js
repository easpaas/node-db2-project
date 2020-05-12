exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl.string('VIN', 17).notNullable().unique();
    tbl.string('make', 20).notNullable();
    tbl.string('model', 20).notNullable();
    tbl.decimal('mileage', .2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
