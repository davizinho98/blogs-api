const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  User.associate = (models) => {
    models.User.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'users'
    });
  };

  return User;
};

module.exports = User;
