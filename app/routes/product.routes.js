module.exports = app => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  router.post("/", products.create);

  router.get("/", products.findAll);

  router.get("/published", products.findAllPublished);

  router.get("/:id", products.findOne);

  router.put("/:id", products.update);

  router.delete("/:id", products.delete);

  router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};

// const { authJwt } = require("../middleware");
// const controller = require("../controllers/product.controller");

// module.exports = function(app) {

//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   //app.get("/api/all", controller.allAccess);

//   app.get(
//     "/api/products",
//     [authJwt.verifyToken],
//     controller.findAll
//   );

//   app.post(
//     "/api/products",
//     [authJwt.verifyToken],
//     controller.create
//   );

//   app.get(
//     "/api/mod",
//     [authJwt.verifyToken, authJwt.isInspector],
//     controller.inspectorBoard
//   );

//   app.get(
//     "/api/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
// };
