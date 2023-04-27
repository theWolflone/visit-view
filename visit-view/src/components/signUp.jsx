import React, { Component } from "react";
import { Menu } from "./menu";
import { Places } from "./addPlaces";
import login from "../assets/login.jpg";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
      },
      personasActuales: [],
    };
  }
  goToLogIn = () => {
    this.props.loginView(true);
    this.props.signupView(false);
    this.props.homeView(false);
  };

  render() {
      return (
        <React.Fragment>
          <div className="bg-white">
            <div className="flex justify-start h-[88.6vh]">
              <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-4/6	">
                <div className="flex-1">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-center text-gray-70">
                      Registrarse
                    </h2>

                    <p className="mt-3 text-gray-500">Ingresa tus datos</p>
                  </div>

                  <div className="mt-6">
                    <div className="pl-8">
                      <label className="block mb-2 text-sm text-gray-60">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre"
                        className=" block w-11/12 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
                      />
                    </div>
                    <div className=" mt-6 pl-8">
                      <label className="block mb-2 text-sm text-gray-60">
                        Apellido
                      </label>
                      <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        placeholder="Apellido"
                        className=" block w-11/12 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
                      />
                    </div>
                    <div className=" mt-6 pl-8">
                      <label className="block mb-2 text-sm text-gray-60">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                        className=" block w-11/12 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
                      />
                    </div>

                    <div className="mt-6 pl-8">
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
                        className="block w-11/12 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
                      />
                    </div>

                    <div className="mt-6 flex">
                      <button
                        type="submit"
                        className="mx-auto w-1/3 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                        onClick={this.guardarPersona}
                      >
                        Crear cuenta
                      </button>
                    </div>

                    <p className="mt-4 text-sm text-center text-gray-400">
                      ¿Ya tienes cuenta?{" "}
                      <a
                        href="#"
                        className="text-blue-500 focus:outline-none focus:underline hover:underline"
                      >
                        Log in
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className=" bg-cover lg:block lg:w-2/4 bg-signup">
                <div className="flex items-center justify-end h-full px-20 bg-emerald-800 bg-opacity-40">
                  <div>
                    <h2 className="text-4xl text-right font-bold text-white">
                      Crea y expande
                    </h2>

                    <p className="max-w-xl text-right mt-3 text-lg font-medium text-gray-300">
                      tu mundo, ayúdanos a conocer el mundo juntos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
  }
  actualizadatosaverificar(evt) {
    var objetolocalpersona = new Object();

    objetolocalpersona = this.state.persona;
    switch (evt.target.id) {
      case "nombre": {
        console.log(this.state.persona);
        objetolocalpersona.nombre = evt.target.value;
        break;
      }
      case "apellido": {
        console.log(this.state.persona);
        objetolocalpersona.apellido = evt.target.value;
        break;
      }
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

  guardarPersona = () => {
    var objetolocal = this.state.persona;
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona&#39;;
    const recipeUrl = "http://localhost:8888/api/nuevousuario";
    const requestMetadata = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    fetch(recipeUrl, requestMetadata)
      .then((res) => res.json())
      .then((personasActuales) => {
        this.setState({ personasActuales: personasActuales });
        alert("Guardado");
        this.goToLogIn();
      });
  };
}

export { Signup };
