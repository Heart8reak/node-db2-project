
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          VIN: '0123456789',
          make: "Land Rover",
          model: "Range Rover",
          mileage: 500,
          transmission: null,
          title: null
        },
        {
          id: 2,
          VIN: "02123465",
          make: "Honda",
          model: "CRV",
          mileage: 101752,
          transmission: null,
          title: null,
        },
        {
          id: 3,
          VIN: "02123438",
          make: "Toyote",
          model: "Celica",
          mileage: 10102,
          transmission: null,
          title: null,
        },
        {
          id: 4,
          VIN: "12323465",
          make: "Honda",
          model: "Accord",
          mileage: 101709,
          transmission: null,
          title: null,
        }
      ]);
    });
};
