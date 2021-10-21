module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sendingAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'sending_account_id',
        references: {
          model: 'Accounts',
          key: 'id',
        },
      },
      receivingAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'receiving_account_id',
        references: {
          model: 'Accounts',
          key: 'id',
        },
      },
      value: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      transactionType: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'transaction_type',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Transactions');
  },
};