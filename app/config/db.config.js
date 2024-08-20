module.exports = {
  //HOST: "magicilogdbinstance.c32u00ygqu44.us-east-2.rds.amazonaws.com",
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "MiTelefono.37*",
  DB: "magiclog",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
