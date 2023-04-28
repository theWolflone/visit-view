// Importamos las librerías necesarias: React, Component y SweetAlert2. Además importamos Places que será necesario para acceder.
import React, { Component } from "react";
import { Places } from "./addPlaces";
import Swal from "sweetalert2";

// Creamos la clase Login que extiende de Component
class Login extends Component {
  // Creamos el constructor con las propiedades
  constructor(props) {
    super(props);
    // Creamos el estado con los datos de la persona y un arreglo de personas actuales
    this.state = {
      persona: {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        foto: "",
      },
      personasActuales: [],
      ingresaralsistema: false,
    };
  }
  // Creamos la función para enviar a otro componente el estado del usuario, si está loggeado o no
  handleLogged = () => {
    this.props.userState(true);
  };
  

  render() {
    // Creamos un condicional para saber si el usuario está loggeado o no
    if (this.state.ingresaralsistema) {
      //Si es así, redirige a la creación de un lugar
      return (
        <React.Fragment>
          <Places />
        </React.Fragment>
      );
    } else {
      // Si no, muestra el formulario de login
      return (
        <React.Fragment>
          <div className="bg-white">
            <div className="flex justify-start h-[88.6vh] 2xl:h-[92vh]">
              <div className="hidden bg-cover lg:block lg:w-2/3 bg-login">
                <div className="flex items-center h-full px-20 bg-emerald-800 bg-opacity-40">
                  <div>
                    <h2 className="text-4xl font-bold text-white">Explora</h2>

                    <p className="max-w-xl mt-3 text-lg font-medium text-gray-300">
                      Donde los lugares que visitaste pueden ser vistos y
                      recordados
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-center text-gray-70">
                      Iniciar sesión
                    </h2>

                    <p className="mt-3 text-gray-500">Ingresa tus datos</p>
                  </div>

                  <div className="mt-8">
                    <div>
                      <label className="block mb-2 text-sm text-gray-60">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="ejemplo@ejemplo.com"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(evt) => this.actualizadatosaverificar(evt)} //=> Función para seguir los cambios del input cuando se esté escribiendo en él
                      />
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <label className="text-sm text-gray-600">
                          Contraseña
                        </label>
                      </div>

                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Contraseña"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(evt) => this.actualizadatosaverificar(evt)} // => Función para seguir los cambios del input cuando se esté escribiendo en él
                      />
                    </div>

                    <div className="mt-6 flex">
                      <button
                        type="submit"
                        className="mx-auto w-1/3 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                        onClick={this.Ingreso}
                      >
                        Ingresar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  //Función para dar seguimiento a los inputs
  actualizadatosaverificar(evt) {
    //Creamos el objeto donde almacenaremos a la persona
    var objetolocalpersona = new Object();

    //Asignamos los valores del objeto persona con el state
    objetolocalpersona = this.state.persona;
    switch (evt.target.id) {
      //Seguir los eventos dependiendo del input en el que se esté interactuando
      case "email": {
        console.log(this.state.persona);
        objetolocalpersona.email = evt.target.value;
        break;
      }
      case "password": {
        objetolocalpersona.password = evt.target.value;
        break;
      }
    }
    //Igualamos el state de la persona con el objeto local que tenemos a enviar
    this.setState({
      persona: objetolocalpersona,
    });
  }

  //Función para verificar si el usuario existe en la base de datos y así, poder loggearlo
  Ingreso = () => {
    //Creamos el objeto local igualado con el state
    var objetolocal = this.state.persona;
    //Llamamos a la función del backend para loggear al usuario
    const recipeUrl = "http://localhost:8888/api/loginuser";
    //Generamos la request para enviar los datos y que se corroboren en la base de datos
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    //Enviamos la request
    fetch(recipeUrl, requestMetadata)
      .then((res) => res.json())
      .then((persona) => {
        //Si la persona existe, se loggea
        if (persona.length === 1) {
          // Se envía un alert de invreso
          Swal.fire({
            icon: "success",
            title: "¡Bienvenido de nuevo!",
            text: "Ingreso exitoso",
            showConfirmButton: false,
            timer: 3000,
          });
          setTimeout(() => {
            //Se actualiza el state para que se muestre el componente de lugares
            this.setState({
              ingresaralsistema: true,
            });
            //Se llama a la función para que se muestre el menú correspondiente
            this.handleLogged();
          }, 3000);
        } else {
          //Si no existe, se envía un alert de error
          Swal.fire({
            icon: "error",
            title: "¡Algún dato es erróneo!",
            text: "Vuelve a intentarlo",
            showConfirmButton: true,
            confirmButtonText: "Entendido",
            confirmButtonColor: "#d33",
            timer: 3000,
          });
        }
      });
  };
  
 
}

//Exportamos el componente
export { Login };
