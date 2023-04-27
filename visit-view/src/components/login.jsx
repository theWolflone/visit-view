import React, { Component } from "react";
import { Menu } from "./menu";
import { Places } from "./addPlaces";
import login from "../assets/login.jpg";
class Login extends Component {
  state = {
    persona: {
      nombre: "",
      apellido: "",
      email: "",
      tipousuario: "",
      password: "",
      foto: "",
    },
    personasActuales: [],
    ingresaralsistema: false,
  };

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
            <div className="flex justify-start h-[92vh]">
              <div className="hidden bg-cover lg:block lg:w-2/3 bg-login">
                <div className="flex items-center h-full px-20 bg-emerald-800 bg-opacity-40">
                  <div>
                    <h2 className="text-4xl font-bold text-white">Explora</h2>

                    <p className="max-w-xl mt-3 text-lg font-medium text-gray-300">
                      Donde los lugares que visitaste pueden volver a verse y no
                      solo ser recordarse
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-center text-gray-70">
                      Brand
                    </h2>

                    <p className="mt-3 text-gray-500">
                      Sign in to access your account
                    </p>
                  </div>

                  <div className="mt-8">
                      <div>
                        <label
                          htmlFor="exampleInputEmail1"
                          className="block mb-2 text-sm text-gray-60"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="example@example.com"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          onChange={(evt) => this.actualizadatosaverificar(evt)}
                        />
                      </div>

                      <div className="mt-6">
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="text-sm text-gray-600"
                          >
                            Password
                          </label>
                          <a
                            href="#"
                            className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                          >
                            Forgot password?
                          </a>
                        </div>

                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Your Password"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          onChange={(evt) => this.actualizadatosaverificar(evt)}
                        />
                      </div>

                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                          onClick={this.Ingreso}
                        >
                          Sign in
                        </button>
                      </div>

                    <p className="mt-6 text-sm text-center text-gray-400">
                      ¿No tienes cuenta?{" "}
                      <a
                        href="#"
                        className="text-blue-500 focus:outline-none focus:underline hover:underline"
                      >
                        Sign up
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <div>
              <div>
                <div>
                  <div>
                    <h5>Iniciar sesión</h5>
                    <div>
                      <label htmlFor="exampleInputEmail1">Correo</label>
                      <input
                        type="email"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese su correo..."
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
                      />
                    </div>
                    <div>
                      <label htmlFor="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Ingrese su contraseña..."
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
                      />
                    </div>
                    <button type="submit" onClick={this.Ingreso}>
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
          alert("Ingreso exitoso");
          this.setState({
            ingresaralsistema: true,
          });
        } else {
          alert("Algun dato es erroneo");
        }
      });
  };
}

export { Login };
