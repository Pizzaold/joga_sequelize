'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
        name: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date()
       }
      ]),
      queryInterface.bulkInsert('Authors', [{ 
        name: 'Jane Smith',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]),
      queryInterface.bulkInsert('Authors', [{ 
        name: 'Alice Johnson', 
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ])
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
