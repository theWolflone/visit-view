var Item = require("./placeModel");

//Se realiza toda la solicitud para guardar un lugar visitado

exports.Guardar = function (req, res) {
  console.log(req.body);
  Item.create(
    {
      NOMBRE: req.body.NOMBRE,
      PROVINCIA: req.body.PROVINCIA,
      CANTON: req.body.CANTON,
      DISTRITO: req.body.DISTRITO,
      FOTO: req.body.FOTO,
    },
    function (err, item) {
      if (err) {
        res.send(err);
      } else {
        Item.find(function (err, item) {
          if (err) res.send(err);
          res.json(item);
        });
      }
    }
  );
};

//Se realiza toda la solicitud para modificar los eventos.
exports.Modificar = function (req, res) {
  Item.update(
    { _id: req.body._id },
    {
      $set: {
        NOMBRE: req.body.NOMBRE,
        PROVINCIA: req.body.PROVINCIA,
        CANTON: req.body.CANTON,
        DISTRITO: req.body.DISTRITO,
      },
    },
    function (err, item) {
      if (err) {
        res.send(err);
      } else {
        Item.find(function (err, item) {
          if (err) {
            res.send(err);
          }
          res.json(item);
        });
      }
    }
  );
};

exports.Eliminar = function (req, res) {
  Item.remove({ _id: req.body._id }, function (err, item) {
    if (err) {
      res.send(err);
      //Obtiene y devuelve todas las personas tras crear cada una de ellas
    } else {
      Item.find(function (err, item) {
        if (err) res.send(err);
        res.json(item);
      });
    }
  });
};
//Elimina un objeto específico.
