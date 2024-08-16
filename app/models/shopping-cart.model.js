module.exports = (sequelize, Sequelize) => {
  const ShoppingCart = sequelize.define("shopping_cart", {
    name: {
      type:Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING      
    }
  });

  return ShoppingCart;
};
