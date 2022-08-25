const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsTo(models.Category, {
      as: 'postId',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsTo(models.BlogPost, {
      as: 'categoryId',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };


  return PostCategory;
};

module.exports = PostCategory;