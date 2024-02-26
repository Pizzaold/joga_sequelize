'use strict';
module.exports = {
    up (queryInterface, Sequelize) { 
        return Promise.all([
            queryInterface.bulkInsert('Tags', [{ 
                name: 'yogapractice',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Tags', [{
                name: 'yogainspiration',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Tags', [{
                name: 'wellness',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Tags', [{
                name: 'nature',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Tags', [{
                name: 'spititual',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Tags', [{
                name: 'sports',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Tags', [{
                name: 'yogateacher',
                createdAt: new Date(),
                updatedAt: new Date()
            }])
        ])
    },
    
    down: (queryInterface) => {
        return queryInterface.bulkDelete('Tags', null, {});
    }
};