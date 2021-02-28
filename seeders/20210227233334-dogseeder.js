'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("dogs", [{
      dog_name: "Juno",
      breed: "Sheltie",
      age: 7,
      food_requirements: "raw",
      friendliness: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dog_name: "Moana",
      breed: "Portuguese Waterdog",
      age: 2,
      food_requirements: "kibble",
      friendliness: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dog_name: "Snowball",
      breed: "Maltese",
      age: 10,
      food_requirements: "raw",
      friendliness: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dog_name: "Siber",
      breed: "Husky",
      age: 2,
      food_requirements: "kibble",
      friendliness: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  {
  await queryInterface.bulkInsert("accounts", [{
    username: "gkf_admin",
    password: "123",
    admin: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "gkf",
    password: "123",
    admin: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }, ])
  }
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("dogs", {}) 
    await queryInterface.bulkDelete("accounts", {}) 

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
