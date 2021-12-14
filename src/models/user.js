const {
  Model, DataTypes
} = require('sequelize');

class User extends Model {
  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
  }

  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      role: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'User',
    })
  }
}

module.exports = User;