import React, { Component } from "react";
import Swal from "sweetalert2";

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
        <div className="h-[90vh]">
          <div className="flex items-center justify-center h-full">
            <div className="container mx-auto flex justify-center items-center lg:px-20 md:px-14 sm:px-8 py-12 h-full">
              <div className="grid lg:grid-cols-3 grid-col-1">
                <div className="bg-green-700 px-9 py-14">
                  <h1 className="text-3xl text-white font-medium">
                    Sube tus lugares
                  </h1>
                  <p className="py-2 text-base text-gray-100">
                    Escribe la información del lugar que estés visitando
                  </p>
                  <div className="location mt-7">
                    <div className="flex my-4 items-center">
                      <span className="border-2 border-solid border-b-gray-100 bg-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                        <i className="fa-solid fa-location-dot text-green-700">
                          1
                        </i>
                      </span>
                      <p className="text-gray-100">
                        Toma una foto del paisaje o lugar en el que estés
                      </p>
                    </div>
                    <div className="flex my-4 items-center">
                      <span className="border-2 border-solid border-b-gray-100 bg-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                        <i className="fa-solid fa-phone text-green-700">2</i>
                      </span>
                      <span className="text-gray-100">
                        Llena la información requerida
                      </span>
                    </div>
                    <div className="flex my-4 items-center">
                      <span className="border-2 border-solid border-b-gray-100 bg-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                        <i className="fa-solid fa-envelope text-green-700">3</i>
                      </span>
                      <span className="text-gray-100">
                        Envía la información cuando esté lista
                      </span>
                    </div>
                    <div className="flex my-4 items-center">
                      <span className="border-2 border-solid border-b-gray-100 bg-gray-100 p-4 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                        <i className="fa-brands fa-chrome text-green-700">4</i>
                      </span>
                      <span className="text-gray-100">
                        ¡Guarda y ve a visitar tus lugares por el mundo!
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white col-span-2 py-14 lg:px-10 px-8">
                  <h2 className="text-3xl text-gray-900 font-medium">
                    Ingresar lugar
                  </h2>
                  <div className="grid md:grid-cols-2 grid-col-1 gap-4">
                    <div className="flex flex-col py-4">
                      <label className="font-normal text-base text-gray-400 py-2">
                        Nombre del lugar
                      </label>
                      <input
                        value={this.state.NOMBRE}
                        type="text"
                        id="NOMBRE"
                        className="outline-none border-b-2 border-solid focus:border-green-500 transition-all"
                        onChange={(evt) => this.actualizadatosaguardar(evt)}
                      />
                    </div>
                    <div className="flex flex-col py-4">
                      <label className="text-base font-normal text-gray-400 py-2">
                        Provincia
                      </label>
                      <input
                        value={this.state.PROVINCIA}
                        id="PROVINCIA"
                        type="text"
                        className="outline-none border-b-2 border-solid focus:border-green-500 transition-all"
                        onChange={(evt) => this.actualizadatosaguardar(evt)}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 grid-col-1 gap-4">
                    <div className="flex flex-col py-4">
                      <label className="text-base font-normal text-gray-400 py-2">
                        Distrito
                      </label>
                      <input
                        value={this.state.DISTRITO}
                        id="DISTRITO"
                        type="text"
                        className="outline-none border-b-2 border-solid focus:border-green-500 transition-all"
                        onChange={(evt) => this.actualizadatosaguardar(evt)}
                      />
                    </div>
                    <div className="flex flex-col py-4">
                      <label className="text-base font-normal text-gray-400 py-2">
                        Cantón
                      </label>
                      <input
                        value={this.state.CANTON}
                        id="CANTON"
                        type="text"
                        className="outline-none border-b-2 border-solid focus:border-green-500 transition-all"
                        onChange={(evt) => this.actualizadatosaguardar(evt)}
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col py-4 pb-8">
                    <input
                      type="file"
                      className="hidden"
                      id="FOTO"
                      placeholder="Foto"
                      onChange={(evt) => this._onChange(evt)}
                    />
                    <label
                      htmlFor="FOTO"
                      className="w-1/6 py-3 cursor-pointer border border-gray-300 rounded-xl hover:bg-white hover:text-green-600 hover:border-green-600 text-center transition-all"
                    >
                      Subir Foto
                    </label>
                  </div>
                  <button
                    className="bg-green-600 px-8 py-3 rounded-md text-white hover:bg-white hover:text-green-600 border-2 border-solid border-green-600 transition-all"
                    id="botonguardar"
                    onClick={this.guardarLugar}
                  >
                    Enviar
                  </button>
                </div>
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
        this.setState({
          NOMBRE: "",
          PROVINCIA: "",
          CANTON: "",
          DISTRITO: "",
        });
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Lugar guardado'
        })
      });
  };

}

export { Places };
