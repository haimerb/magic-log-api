module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type:Sequelize.STRING
    },
    description: {
      type:Sequelize.STRING
    },
    price: {
      type:Sequelize.DECIMAL(10, 2)
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  });

  return Product;
};
