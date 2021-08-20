const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobdetail', {
    wantedAuthNo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jobbasic',
        key: 'wantedAuthNo'
      }
    },
    wantedTitle: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    salTpCd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    jobCont: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    enterTpCd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    minEdubglcd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pfCond: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    empTpNm: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    workdayWorkhrCont: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    receiptCloseDt: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    likeNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    indTpCdNm: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    reperNm: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    corpAddr: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    homePg: {
      type: DataTypes.STRING(500),
      allowNull: true
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
