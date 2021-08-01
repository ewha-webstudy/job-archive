const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobdetail', {
    company: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    career: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    edubg: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    srchKeywordNm: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    jobCont: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    prefCd: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    workdayWorkhrCont: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    workRegion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    closeDt: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    applyUrl: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    wantedAuthNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jobbasic',
        key: 'wantedAuthNo'
      }
    }
  }, {
    sequelize,
    tableName: 'jobdetail',
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
