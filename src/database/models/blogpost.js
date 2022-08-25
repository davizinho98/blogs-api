const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, 
    {
      timestamps: false,
      /* tableName: 'BlogPosts', */
      // underscored: true,
    }
  );

  BlogPost.associate = (models) => {
    models.BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users' 
    });

    models.BlogPost.hasOne(models.PostCategory, {
      foreignKey: 'postId',
      as: 'posts'
    });
  };

  return BlogPost;
};

module.exports = BlogPost;
