let express = require("express");
let app = express(); //Utilizamos express
var cors = require('cors');
let mongoose = require("mongoose"); // mongoose para mongodb
let port = process.env.PORT || 8888; // establecemos nuestro puerto

app.configure(function () {
  // app.use(express.static(__dirname + '/'));
  app.use(express.logger("dev"));
  app.use(express.methodOverride());
  app.use(express.static('client/build'));
});

const mongoAtlasUrl =
  "mongodb+srv://pruebasLobo:pruebas@cluster0.k1wcl9w.mongodb.net/?retryWrites=true&w=majority"; // URL del string de conexión a la base de datos de MongoDB Atlas
try {
  mongoose.connect(mongoAtlasUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
    () =>
      // Conectamos a la base de datos
      console.log("Conectado a la base de datos");
} catch (error) {
  console.log("error connecting to MongoDB:", error.message);
}
const dbCOnnection = mongoose.connection;
dbCOnnection.on("error", (err) => console.error(`Connection error ${err}`));
dbCOnnection.once("open", () => console.log("Connected to DB!"));

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


app.use(cors());

require("./api/routes.js")(app); // Cargamos los endpoints

// Cogemos el puerto para escuchar
app.listen(port);
console.log("App listening on port " + port);
