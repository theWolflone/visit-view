import React, { Component } from "react";
import { Places } from "./addPlaces";
import Swal from "sweetalert2";
class Login extends Component {
  constructor(props) {
    super(props);
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
  handleLogged = () => {
    this.props.userState(true);
  };
  createAccount = () => {
    this.props.loginView(false);
    this.props.signupView(true);
    this.props.homeView(false);
  }

  render() {
    if (this.state.ingresaralsistema) {
      return (
        <React.Fragment>
          <Places />
        </React.Fragment>
      );
    } else {
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
                        placeholder="example@example.com"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
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
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
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

                    {/* <p className="mt-4 text-sm text-center text-gray-400">
                      ¿No tienes cuenta?{" "}
                      <button
                        className="text-blue-500 focus:outline-none focus:underline hover:underline cursor-pointer"
                        onClick={this.noAccount}
                        >
                        Sign up
                      </button>
                      .
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  actualizadatosaverificar(evt) {
    var objetolocalpersona = new Object();

    objetolocalpersona = this.state.persona;
    switch (evt.target.id) {
      case "email": {
        console.log(this.state.persona);
        objetolocalpersona.email = evt.target.value;
        break;
      }
      case "password": {
        console.log(this.state.persona);
        objetolocalpersona.password = evt.target.value;
        break;
      }
    }
    this.setState({
      persona: objetolocalpersona,
    });
  }

  Ingreso = () => {
    var objetolocal = this.state.persona;
    const recipeUrl = "http://localhost:8888/api/loginuser";
    const requestMetadata = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    fetch(recipeUrl, requestMetadata)
      .then((res) => res.json())
      .then((persona) => {
        if (persona.length === 1) {
          Swal.fire({
            icon: "success",
            title: "¡Bienvenido de nuevo!",
            text: "Ingreso exitoso",
            showConfirmButton: false,
            timer: 3000,
          });
          setTimeout(() => {
            this.setState({
              ingresaralsistema: true,
            });
            this.handleLogged();
          }, 3000);
        } else {
          alert("Algun dato es erroneo");
        }
      });
  };
  
  noAccount = () => {
    this.createAccount();
  };
}

export { Login };
