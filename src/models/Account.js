module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      balance: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      bank_id: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

  Account.associate = (models) => {
    models.Bank.belongsToMany(models.User, {
      as: 'users',
      through: Account,
      foreignKey: 'bank_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Bank, {
      as: 'banks',
      through: Account,
      foreignKey: 'user_id',
      otherKey: 'bank_id',
    });
  };

  return Account;
};