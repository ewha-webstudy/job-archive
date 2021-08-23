var DataTypes = require("sequelize").DataTypes;
var _job = require("./job");
var _membership = require("./membership");
<<<<<<< HEAD
=======
var _like = require("./like");
>>>>>>> backend/userapi

function initModels(sequelize) {
  var job = _job(sequelize, DataTypes);
  var membership = _membership(sequelize, DataTypes);
<<<<<<< HEAD
=======
  var like = _like(sequelize, DataTypes);
>>>>>>> backend/userapi


  return {
    job,
    membership,
<<<<<<< HEAD
=======
    like,
>>>>>>> backend/userapi
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
