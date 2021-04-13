'use strict';

export async function up(queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Users', [{
    id : "11111111111111111111111111111111",
    name: 'John Doe',
    address: "adadavvf",
    mno: "45454",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id : "11111111111111111111111111111110",
    name: 'shan',
    address: "adawdadavvf",
    mno: "454554544",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id : "11111111111111111111111111111101",
    name: 'Johny',
    address: "seadadavvf",
    mno: "1541545454",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id : '11111111111111111111111111111011',
    name: 'kkJohn',
    address: "readadavvf",
    mno: "8212145454",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id : "11111111111111111111111111110111",
    name: 'Doe',
    address: "ercxzadadavvf",
    mno: "2154845454",
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
}
