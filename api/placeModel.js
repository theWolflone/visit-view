var mongoose = require('mongoose');
var Schema = mongoose.Schema; // => Declaramos con mongoose que vamos a realizar un esquema, donde vamos a declarar todo lo que vamos a utilizar en nuestra base de datos.
var Place = new Schema({
      NOMBRE: String,
      PROVINCIA: String,
      CANTON: String,
      DISTRITO: String,
      FOTO: String
});
module.exports = mongoose.model('Place', Place); // => Exportamos nuestro esquema para poder utilizarlo en el resto de nuestro proyecto.