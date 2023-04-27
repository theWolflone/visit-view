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
        {/* <div className="z-10">
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
          </div> */}
        <div className=" container mx-auto flex justify-center items-center lg:px-20 md:px-14 sm:px-8 bg-gray-200 py-12 h-full">
          <div className="grid lg:grid-cols-3 grid-col-1">
            <div className="bg-green-700 px-9 py-14">
              <h1 className="text-3xl text-white font-medium">Sube tus lugares</h1>
              <p className="py-2 text-base text-gray-100">
                Escribe la información del lugar que estés visitando
              </p>
              <div className="location mt-7">
                <div className="flex my-4 items-center">
                  <span className="border-2 border-solid border-b-gray-100 bg-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                    <i className="fa-solid fa-location-dot text-green-700">1</i>
                  </span>
                  <p className="text-gray-100">
                    Toma una foto del paisaje o lugar en el que estés
                  </p>
                </div>
                <div className="flex my-4 items-center">
                  <span className="border-2 border-solid border-b-gray-100 bg-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                    <i className="fa-solid fa-phone text-green-700">2</i>
                  </span>
                  <span className="text-gray-100">Llena la información requerida</span>
                </div>
                <div className="flex my-4 items-center">
                  <span className="border-2 border-solid border-b-gray-100 bg-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                    <i className="fa-solid fa-envelope text-green-700">3</i>
                  </span>
                  <span className="text-gray-100">Envia la información cuando esté lista</span>
                </div>
                <div className="flex my-4 items-center">
                  <span className="border-2 border-solid border-b-gray-100 bg-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                    <i className="fa-brands fa-chrome text-green-700">4</i>
                  </span>
                  <span className="text-gray-100">Website: yoursite.com</span>
                </div>
              </div>
            </div>
            <div className="bg-white col-span-2 py-14 lg:px-10 px-8">
              <h2 className="text-3xl font-medium">Get in touch</h2>
              <div className="grid md:grid-cols-2 grid-col-1 gap-4">
                <div className="flex flex-col py-4">
                  <label for="First Name" className="text-base font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b-2 border-solid focus:border-green-500 transition-all"
                  />
                </div>
                <div className="flex flex-col py-4">
                  <label for="First Name" className="text-base font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b-2 border-solid focus:border-green-500 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col py-4">
                <label for="Email" className="text-base font-medium">
                  Email
                </label>
                <input
                  type="text"
                  className="outline-none border-b-2 border-solid focus:border-green-500 transition-all"
                />
              </div>
              <div className="flex flex-col py-4 pb-8">
                <label for="Message" className="text-base font-medium">
                  Message
                </label>
                <textarea
                  name="text"
                  id=""
                  cols="20"
                  rows="4"
                  className="outline-none border-b-2 border-solid focus:border-green-500 transition-all"
                ></textarea>
              </div>
              <a
                href=""
                className="bg-green-600 px-8 py-3 rounded-md text-white hover:bg-white hover:text-green-600 border-2 border-solid border-green-600 transition-all"
              >
                Submit Now
              </a>
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

export { Places };
