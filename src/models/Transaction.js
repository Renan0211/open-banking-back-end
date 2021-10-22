module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sendingAccountId: { type: DataTypes.INTEGER, foreignKey: true },
    receivingAccountId: { type: DataTypes.INTEGER, foreignKey: true },
    value: DataTypes.INTEGER,
    transactionType: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Account,
      { foreignKey: 'id', as: 'transactions' });
  };

  return Transaction;
};