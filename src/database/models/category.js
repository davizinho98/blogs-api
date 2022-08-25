const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  Category.associate = (models) => {
    models.Category.belongsToMany(models.PostCategory, {
      foreignKey: 'categoryId',
      as: 'categories'
    });
  };

  return Category;
};

module.exports = Category;
