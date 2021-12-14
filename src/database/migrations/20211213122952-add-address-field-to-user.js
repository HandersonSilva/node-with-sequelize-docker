'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      /** Add new column */
      return queryInterface.addColumn(
        'users',
        'address',
        {
          type: Sequelize.STRING
        }
      );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'address'
    );
  }
};
