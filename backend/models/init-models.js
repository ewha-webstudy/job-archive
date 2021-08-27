var DataTypes = require("sequelize").DataTypes;
var _job = require("./job");
var _membership = require("./membership");

function initModels(sequelize) {
  var job = _job(sequelize, DataTypes);
  var membership = _membership(sequelize, DataTypes);


  return {
    job,
    membership,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
