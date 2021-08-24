var DataTypes = require("sequelize").DataTypes;
var _job = require("./job");
var _membership = require("./membership");
var _like = require("./like");

function initModels(sequelize) {
  var job = _job(sequelize, DataTypes);
  var membership = _membership(sequelize, DataTypes);
  var like = _like(sequelize, DataTypes);


  return {
    job,
    membership,
    like,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
