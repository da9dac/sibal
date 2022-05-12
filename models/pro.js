module.exports = (sequelize, DataTypes) => (
    sequelize.define('pro', {
      pnick: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      pnum: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    }, {
      timestamps: false,
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  );