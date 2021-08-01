const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobbasic', {
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    companyLogo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    closeDt: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    wantedAuthNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jobbasic',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wantedAuthNo" },
        ]
      },
    ]
  });
};
