import React, { Component } from "react";
import { Tabla } from "./tabla";
class Places extends Component {
  state = {
    LUGAR: {
      NOMBRE: "",
      PROVINCIA: "",
      CANTON: "",
      DISTRITO: "",
      FOTO: "",
    },
    lugares: [],
  };

  render() {
    const inputStyleimg = {
      border_radius: "50%",
      cursor: "pointer",
      width: "100px",
    };
    const oculta = { visibility: "collapse" };
    const muestra = { visibility: "vivible" };
    return (
      <React.Fragment>
          <div className="z-10">
            <h1></h1>
            <div className="flex justify-center">
              <div className="border bg-white rounded-md p-4 mx-auto mt-12 items-center">
                <div className="flex flex-col space-y-4 mx-20 items-center">
                  <h1 className="text-2xl font-bold">Visit View</h1>
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md "
                    id="NOMBRE"
                    placeholder="Nombre"
                    onChange={(evt) => this.actualizadatosaguardar(evt)}
                  />
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    id="PROVINCIA"
                    placeholder="Provincia"
                    onChange={(evt) => this.actualizadatosaguardar(evt)}
                  />
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    id="CANTON"
                    placeholder="Cantón"
                    onChange={(evt) => this.actualizadatosaguardar(evt)}
                  />
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    id="DISTRITO"
                    placeholder="Distrito"
                    onChange={(evt) => this.actualizadatosaguardar(evt)}
                  />
                  <input
                    type="file"
                    className="hidden"
                    id="FOTO"
                    placeholder="Foto"
                    onChange={(evt) => this._onChange(evt)}
                  />
                  <label
                    htmlFor="FOTO"
                    className="cursor-pointer border border-gray-400 p-2 rounded-md"
                  >
                    Subir Foto
                  </label>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    id="botonguardar"
                    onClick={this.guardarLugar}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
  actualizadatosaguardar(evt) {
    var objetolocallugar = new Object();

    objetolocallugar = this.state.LUGAR;
    switch (evt.target.id) {
      case "NOMBRE": {
        console.log(this.state.LUGAR);
        objetolocallugar.NOMBRE = evt.target.value;
        break;
      }
      case "PROVINCIA": {
        console.log(this.state.LUGAR);
        objetolocallugar.PROVINCIA = evt.target.value;
        break;
      }
      case "CANTON": {
        console.log(this.state.LUGAR);
        objetolocallugar.CANTON = evt.target.value;
        break;
      }
      case "DISTRITO": {
        console.log(this.state.LUGAR);
        objetolocallugar.DISTRITO = evt.target.value;
        break;
      }

      default: {
        console.log("default");

        break;
      }
    }

    this.setState({
      LUGAR: objetolocallugar,
    });
  }

  _onChange = (e) => {
    var objetolocallugar = new Object();
    objetolocallugar = this.state.LUGAR;
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size < 2097152) {
        var reader = new FileReader();
        reader.onload = function (e) {
          objetolocallugar.FOTO = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);

        this.setState({
          LUGAR: objetolocallugar,
        });
      }
    }

    console.log(e);
  };

  guardarLugar = () => {
    var objetolocal = this.state.LUGAR;
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona&#39;;
    const recipeUrl = "http://localhost:8888/api/nuevolugar";
    const requestMetadata = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    fetch(recipeUrl, requestMetadata)
      .then((res) => res.json())
      .then((lugares) => {
        this.setState({ lugares: lugares });

        // this.setState({combosactuales: recipes})
        alert("Guardado");
      });
  };
  
  modificarLugar = (id) => {
    console.log(id);

    var objetolocal = this.state.LUGAR;
    objetolocal._id = id;
    const Url = "http://localhost:8888/api/modificalugar";
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };
    fetch(Url, requestMetadata)
      .then((res) => res.json())
      .then((lugares) => {
        console.log(lugares);

        this.setState({
          lugares: lugares,
        });
        alert("Modificado");
      });
  };
}

export {Places};
