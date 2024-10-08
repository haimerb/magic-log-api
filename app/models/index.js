const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users=require("./user.model.js")(sequelize, Sequelize);
db.products=require("./product.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.shoppngcarts = require("../models/shoppingcart.model.js")(sequelize, Sequelize);

db.users.hasOne(db.shoppngcarts,{
  foreignKey:"userId"
});


db.role.belongsToMany(db.users, {
  through: "user_roles"
});
db.users.belongsToMany(db.role, {
  through: "user_roles"
});

db.ROLES = ["user", "admin", "inspector"];

module.exports = db;
