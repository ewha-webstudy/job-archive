const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like', {
    userid: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'membership',
        key: 'userid'
      }
    },
    wantedAuthNo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    alertDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'like',
    timestamps: false,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "wantedAuthNo" },
        ]
      },
    ]
  });
};
