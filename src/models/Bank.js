module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    country: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });


  return Bank;
};