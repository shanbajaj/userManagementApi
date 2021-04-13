'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Tickets', [{
    id:"01111111111111111111111111111111",
    ticketName: 'dse',
    ticketPrice: 454,
    userId: "11111111111111111111111111111111",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:"00111111111111111111111111111111",
    ticketName: 'dseascxa',
    ticketPrice: 584,
    userId: "11111111111111111111111111111110",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:"00011111111111111111111111111111",
    ticketName: 'axasc',
    ticketPrice: 82,
    userId: "11111111111111111111111111111101",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:"00001111111111111111111111111111",
    ticketName: 'wsdwaxdse',
    ticketPrice: 44,
    userId: '11111111111111111111111111111011',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  ]);

}
export async function down(queryInterface, Sequelize) {

  await queryInterface.bulkDelete('Tickets', null, {});
}
