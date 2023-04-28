// Se importan los módulos necesarios de React, la libreria de SweetAlert y algunos archivos de imagen.
import React, { Component } from "react";
import Trash from "../assets/trash-can-solid.jpg";
import Swal from "sweetalert2";

// Se crea el componente por medio de clases
class Tabla extends Component {
  // Define el estado inicial de la clase, el cual es un objeto con las claves NOMBRE, PROVINCIA, CANTON, DISTRITO y FOTO. También se define un array llamado "lugares".
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

  // Este es un método del ciclo de vida de React que se ejecuta después de que se monta el componente en la página. Llama al método "listarLugares" para mostrar la lista de lugares.
  componentDidMount() {
    this.listarLugares(); //=> Se llama la función que llama los lugares desde el backend
  }

  // Se define la función de "listarLugares" para mostrar en diferentes cards los lugares que ha guardado la persona
  listarLugares = () => {
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona&#39;;
    const recipeUrl = "http://localhost:8888/api/listarlugar"; // => Declaramos la ruta de la función de nuestro backend para hacer la request para llamar a los lugares
    const requestMetadata = {
      method: "GET", // => Método por el que vamos a llamar a los datos
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(recipeUrl, requestMetadata)
      .then((res) => res.json())
      .then((lugares) => {
        console.log(lugares);
        console.log(lugares.item);
        this.setState({
          lugares: lugares.item, // => Guardamos el item para el array de lugares
        });
      });
  };

  // Se define la función de "eliminarLugar" para eliminar un lugar específico
  eliminarLugar = (id) => {
    console.log(id);
    //Llamamos a la libreria de los alerts para que corrobore si está seguro de eliminar el lugar
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Si lo eliminas, no lo podrás recuperar...",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      // Sí la persona está segura, elimina dicho lugar y envía un alert
      if (result.isConfirmed) {
        var objetolocal = this.state.LUGAR;
        objetolocal._id = id;
        const Url = "http://localhost:8888/api/eliminalugar"; // => Declaramos la ruta de la función de nuestro backend para hacer la request para eliminar a los lugares
        const requestMetadata = {
          method: "DELETE", //=> Método por el que eliminamos
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
              lugares: lugares, // => En el state lugares redeclaramos los valores para que ya no se tome en cuenta al valor eliminado
            });
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
  
            Toast.fire({
              icon: "error",
              title: "Lugar eliminado",
            });
          });
        // Función para dar tiempo a que se elimine el lugar
          
      }
    });
  };

  // Se define la función de "render" para renderizar el componente
  render() {
    return (
      <React.Fragment>
        <div className="relative flex flex-wrap pt-12 items-center justify-center">
          {this.state.lugares.map(
            (
              lugar //=> De esta forma, la función pasa por cada elemento que se encuentra en el array de lugares para así imprimir uno en cada card
            ) => (
              <div
                key={lugar._id}
                className="flex w-96 flex-col justify-center items-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 my-8 mx-8"
              >
                <img
                  className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                  src={lugar.FOTO} //=> Dirección de la foto
                  alt={lugar.NOMBRE} //=> Alt con el nombre del lugar
                />
                <div className="p-4 w-full">
                  <small className="text-blue-400 text-xs"></small>
                  <h1 className="text-2xl font-medium text-slate-600 pb-2">
                    {/* Imprimimos el nombre que corresponda */}
                    {lugar.NOMBRE}
                  </h1>
                  <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                    {/* Imprimimos la provincia que corresponda */}
                    Provincia: {lugar.PROVINCIA}
                    <br />
                    {/* Imprimimos el distrito que corresponda */}
                    Distrito: {lugar.DISTRITO}
                    <br />
                    {/* Imprimimos el cantón que corresponda */}
                    Cantón: {lugar.CANTON}
                  </p>
                </div>
                <div className="ml-72 mb-4">
                  <button
                    className="px-5 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 ease-in-out focus:outline-none focus:bg-red-200"
                    onClick={() => this.eliminarLugar(lugar._id)}
                  >
                    <img
                      src={Trash}
                      alt="Eliminar"
                      className="opacity-20 h-8"
                    />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

// Se exporta el componente
export { Tabla };
