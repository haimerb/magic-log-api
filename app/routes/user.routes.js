// module.exports = app => {
//   const users = require("../controllers/user.controller.js");

//   var router = require("express").Router();

  
//   router.post("/", users.create);

//   router.get("/", users.findAll);

//   router.get("/published", users.findAllPublished);

//   router.get("/:id", users.findOne);

//   router.put("/:id", users.update);

//   router.delete("/:id", users.delete);

//   router.delete("/", users.deleteAll);
//   app.use("/api/users", router);
// };

const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/all", controller.allAccess);

  app.get(
    "/api/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/mod",
    [authJwt.verifyToken, authJwt.isInspector],
    controller.inspectorBoard
  );

  app.get(
    "/api/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
