module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    number: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.hasOne(models.User,
      { foreignKey: 'user_id', as: 'users' });
  };

  return Address;
};