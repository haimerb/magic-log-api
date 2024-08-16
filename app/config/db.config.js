module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "MiTelefono.37*",
  DB: "magic_log",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
