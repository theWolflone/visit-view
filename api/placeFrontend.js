
class Place {
  constructor(
    _id,
    NOMBRE,
    PROVINCIA,
    CANTON,
    DISTRITO,
    FOTO,
  ) {
    this._id = _id;
    this.NOMBRE = NOMBRE;
    this.PROVINCIA = PROVINCIA;
    this.CANTON = CANTON;
    this.DISTRITO = DISTRITO;
    this.FOTO = FOTO;
}

  Guardar() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", "/api/nuevolugar");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoAenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }

  // Función para eliminar operaciones específicas de la base de datos.
  Eliminar() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", "/api/eliminalugar");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoAenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }

  // Función para modificar las operaciones de la base de datos.
  Modificar() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/modificalugar");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoAenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }

  Listar(){
      var objetoAenviar = this;
      return new Promise(function (resolve, reject) {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "/api/listarlugar");
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function () {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
            } else {
              reject(xhr);
            }
          };
          xhr.send(JSON.stringify(objetoAenviar));
        } catch (err) {
          reject(err.message);
        }
      });
    }
}


