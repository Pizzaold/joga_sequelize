'use strict';
const {
  Model
} = require('sequelize');
const article = require('./article');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Article, {
        foreignKey: 'author_id',
        as: 'articles'
      });
      this.hasMany(models.Article, {
        foreignKey: 'author_id',
        sourceKey: 'id'
      });
    }    
  }
  Author.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};