// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model { }

// set up fields and rules for Product model
User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      required: true,

    },
   email: {
      type: DataTypes.STRING,
      reguired: true,
      unique: true,

    },
    // price: {
    //   type: DataTypes.DECIMAL,
    //   allowNull: false,
    // },
    // stock: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 10,
    // },
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "category",
    //     key: "id",
    //   },
    // }


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
