'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Coffee.associate = function(models) {
    // Coffee belongsTo Shop
    Coffee.belongsTo(models.Shop, { foreignKey: 'shopId' });
  };
  return Coffee;
};