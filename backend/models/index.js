'use strict';


const Membership = require('./membership');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.Job = require('./job')(sequelize, Sequelize);
db.Membership = require('./membership')(sequelize, Sequelize);
db.Like = require('./like')(sequelize, Sequelize);


db.Membership.hasMany(db.Like, {
  as: "Like",
  foreginKey: "userid",
  onDelete: "cascade",
  hooks: true
});

db.Like.belongsTo(db.Membership, {
  foreginKey: "userid",
  as: "Membership",
  onDelete: "cascade",
  hooks: true
}); 

module.exports = db;
