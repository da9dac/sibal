module.exports = (sequelize, DataTypes) => (
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: true,
    },
    nick: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dnick: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: `imsi`,
    },
    dcategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    uyear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2022,
    },
    ascore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    bscore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    cscore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    dscore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    escore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  }, {
    timestamps: false,
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })
);
