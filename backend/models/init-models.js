var DataTypes = require("sequelize").DataTypes;
var _job = require("./job");
var _like = require("./like");
var _membership = require("./membership");

function initModels(sequelize) {
  var job = _job(sequelize, DataTypes);
  var like = _like(sequelize, DataTypes);
  var membership = _membership(sequelize, DataTypes);

like.belongsTo(membership, { as: "user", foreignKey: "userid"});
membership.hasMany(like, { as: "likes", foreignKey: "userid"});

  return {
    job,
    like,
    membership,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
