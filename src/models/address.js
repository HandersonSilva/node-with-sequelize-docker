const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }

  static init(sequelize) {
    super.init(
      {
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        complement: DataTypes.STRING,
        zip_code: DataTypes.STRING,
        city: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Address",
      }
    );
  }
}

module.exports = Address;
