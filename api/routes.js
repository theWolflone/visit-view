var placeController = require("./placeController.js");
var controllerPersona = require("./persona/personaController.js");
module.exports = function (app) {
  var PersonaW = require("./persona/personaModel.js");

  app.get("/ingresoUsuarios", function (req, res) {
    //localhost:8080
    console.log(req.query);
    PersonaW.find(
      { email: req.query.email, password: req.query.password },
      function (err, persona) {
        if (err) {
          res.send(err);
        } else {
          if (persona.length > 0) {
            res.sendfile("users/users.html"); //Cargar Unica de la vista
          } else {
            res.json("No andes Jakiando");
          }
        }
      }
    );
  });

  app.put("/api/nuevolugar", placeController.Guardar);
  app.delete("/api/eliminalugar", placeController.Eliminar);
  app.post("/api/modificalugar", placeController.Modificar);
  app.get("/api/listarlugar", placeController.Listar);
  app.put("/api/nuevousuario", controllerPersona.Guardar);
  app.delete("/api/eliminausuario", controllerPersona.Eliminar);
  app.post("/api/modificausuario", controllerPersona.Modificar);
  app.post("/api/loginuser", controllerPersona.Login);
};
