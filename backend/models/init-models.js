var DataTypes = require("sequelize").DataTypes;
var _jobbasic = require("./jobbasic");
var _jobdetail = require("./jobdetail");

function initModels(sequelize) {
  var jobbasic = _jobbasic(sequelize, DataTypes);
  var jobdetail = _jobdetail(sequelize, DataTypes);

  jobdetail.belongsTo(jobbasic, { foreignKey: "wantedAuthNo", targetKey: "wantedAuthNo" });
  jobbasic.hasOne(jobdetail, { foreignKey: "wantedAuthNo", sourceKey: "wantedAuthNo"});

  return {
    jobbasic,
    jobdetail,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
