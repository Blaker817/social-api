const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Thought extends Model {}

Thought.init(
  {
  thought_text:{
    type: DataTypes.STRING, 
    required: true,
    
  },
  createdAt:{
    type: DataTypes.DATE,

  },
 username:{
  type: DataTypes.STRING, 
  required: true,
 }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Thought',
  }
);

module.exports = Thought;
