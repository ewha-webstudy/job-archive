const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('membership', {
    realname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    born: {
      type: "YEAR",
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    alert: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'membership',
    timestamps: true,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
