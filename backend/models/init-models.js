var DataTypes = require("sequelize").DataTypes;
var _membership = require("./membership");

function initModels(sequelize) {
  var membership = _membership(sequelize, DataTypes);

  return {
    membership,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
