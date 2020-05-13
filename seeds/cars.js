
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 'ABDK402238AC', make: 'Cheverolet', model: 'Corvette', mileage: 20, transmission: 'manual', title: 'clean'},
        {id: 2, vin: 'CDKKS9238AC', make: 'Cheverolet', model: 'Bel Air', mileage: 100, transmission: 'manual', title: 'salvage'},
        {id: 3, vin: '287K40GFF38AC', make: 'Cheverolet', model: 'Camaro', mileage: 20000, transmission: 'manual', title: 'clean'},
        {id: 4, vin: 'AAA02113DFAAC', make: 'Cheverolet', model: 'Corvette', mileage: 144000, transmission: 'manual', title: 'clean'},
        {id: 5, vin: 'DDKC46438AC', make: 'Cheverolet', model: 'Pickup', mileage: 200000},
        {id: 6, vin: 'LCAOK828ACAL', make: 'Cheverolet', model: 'Chevelle', mileage: 1005, transmission: 'auto'}
      ]);
    });
};
