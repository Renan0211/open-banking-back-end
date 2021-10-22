module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressId: { type: DataTypes.INTEGER, foreignKey: true }
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  User.associate = (models) => {
    User.belongsTo(models.Address,
      { foreignKey: 'id', as: 'addresses' });
  };

  return User;
};