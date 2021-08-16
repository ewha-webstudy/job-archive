const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobbasic', {
    wantedAuthNo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    regDt: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    salTpNm: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    sal: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    minSal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxSal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    avgSal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    zipCd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    wantedInfoUrl: {
      type: DataTypes.STRING(200),
      allowNull: false
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
