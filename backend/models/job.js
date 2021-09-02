const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job', {
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
      type: DataTypes.STRING(100),
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
    region: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    wantedInfoUrl: {
      type: DataTypes.STRING(300),
      allowNull: false
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
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    techStack: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    enterTpCd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    minEdubgIcd: {
      type: DataTypes.STRING(45),
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
      type: DataTypes.STRING(1000),
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
      allowNull: true,
      defaultValue: 0
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'job',
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
