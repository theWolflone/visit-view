// // Se importan los módulos necesarios de React, la libreria de SweetAlert y algunos archivos de imagen.
import React, { Component } from "react";
import { Places } from "./addPlaces";
import { Tabla } from "./tabla";
import { Landing } from "./landing";
import { Login } from "./login";
import { Signup } from "./signUp";
import MenuLogo from "../assets/logo-no-background.png";

// Se crea el componente por medio de clases
class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
        // Define el estado inicial de la clase, que son para saber qué mostrar dependiendo de la sección en la que se encuentre".
      muestraLugares: true,
      muestraTabla: false,
      muestraHome: true,
      muestraLogIn: false,
      muestraSignUp: false,
      userLogged: false,
    }
  }
  // Funciones para así declarar el state del menú y que cuando esté en otro componente le permita también cambiar entre páginas sin problema alguno
  // {
  userState = ()=> {
    this.setState({userLogged:true})
  }
  loginView = ()=> {
    this.setState({muestraLogIn:true})
  }
  signupView = ()=> {
    this.setState({muestraSignUp:false})
  }
  homeView = ()=> {
    this.setState({muestraHome:false})
  }

//}
  

  render() {
    // Si la persona está loggeada, que pase a la siguiente condicional para determinar qué mostrar
    if (this.state.userLogged) {
      // Si la persona está loggeada y está en la página de "Añadir lugares", que muestre el componente de "Añadir lugares"
      if (this.state.muestraLugares) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-6 text-center bg-white flex items-center justify-end text-lg pr-24 ">
              <img
                className="absolute md:h-10 my-auto left-10 sm:h-8 h-4 cursor-pointer"
                type="button"
                src={MenuLogo}
                // onClick={(e) => this.muestraLugares()}
              />
              <button
                onClick={(e) => this.muestraLugares()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Añadir lugares
                </span>
              </button>

              <button
                onClick={(e) => this.muestraTabla()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Ver lugares
                </span>
              </button>
              <br />
            </div>
            <Places/>
          </React.Fragment>
        );
      }

      // Si la persona está loggeada y está en la página de "Ver lugares", que muestre el componente de "Ver lugares"
      if (this.state.muestraTabla) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-6 text-center bg-white flex items-center justify-end text-lg pr-24 ">
              <img
                className="absolute md:h-10 my-auto left-10 sm:h-8 h-4 cursor-pointer"
                type="button"
                src={MenuLogo}
                // onClick={(e) => this.muestraLugares()}
              />
              <button
                onClick={(e) => this.muestraLugares()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Añadir lugares
                </span>
              </button>

              <button
                onClick={(e) => this.muestraTabla()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Ver lugares
                </span>
              </button>
              <br />
            </div>
            <Tabla/>
          </React.Fragment>
        );
      }
    } else {
      // Si la persona no está loggeada, que muestre el componente de "Home"
      if (this.state.muestraHome) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-6 text-center bg-white flex items-center justify-end text-lg pr-24 ">
              <img
                className="absolute md:h-10 my-auto left-10 sm:h-8 h-4 cursor-pointer"
                type="button"
                src={MenuLogo}
                // onClick={(e) => this.muestraHome()}
              />
              <button
                onClick={(e) => this.muestraSignUp()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Registrarse
                </span>
              </button>

              <button
                onClick={(e) => this.muestraLogIn()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Iniciar sesión
                </span>
              </button>
              <br />
            </div>
            <Landing loginView={this.loginView} signupView={this.signupView} homeView={this.homeView}/>
          </React.Fragment>
        );
      }

      // Si la persona no está loggeada y está en la página de ingresar, mostrando el componente
      if (this.state.muestraSignUp) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-6 text-center bg-white flex items-center justify-end text-lg pr-24">
              <img
                className="absolute md:h-10 my-auto left-10 sm:h-8 h-4 cursor-pointer"
                type="button"
                src={MenuLogo}
                onClick={(e) => this.muestraHome()}
              />
              <button
                onClick={(e) => this.muestraSignUp()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Registrarse
                </span>
              </button>

              <button
                onClick={(e) => this.muestraLogIn()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Iniciar sesión
                </span>
              </button>
              <br />
            </div>
            <Signup loginView={this.loginView} signupView={this.signupView} homeView={this.homeView}/>
          </React.Fragment>
        );
      }
      // Si la persona no está loggeada y está en la página de login
      if (this.state.muestraLogIn) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-6 text-center bg-white flex items-center justify-end text-lg pr-24">
              <img
                className="absolute md:h-10 my-auto left-10 sm:h-8 h-4 cursor-pointer"
                type="button"
                src={MenuLogo}
                onClick={(e) => this.muestraHome()}
              />
              <button
                onClick={(e) => this.muestraSignUp()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Registrarse
                </span>
              </button>

              <button
                onClick={(e) => this.muestraLogIn()}
                id=""
                href=""
                className="relative pl-1 pr-4 md:pr-1 group before:absolute before:inset-x-0 before:bottom-0 before:h-7 md:before:h-0.5 before:pl-10 before:origin-right before:scale-x-0 before:bg-green-600 md:before:bg-green-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span className="relative tracking-wider text-black font-helveticaNeueMed text-xl">
                  Iniciar sesión
                </span>
              </button>
              <br />
            </div>
            <Login userState={this.userState} loginView={this.loginView} signupView={this.signupView} homeView={this.homeView}/>
          </React.Fragment>
        );
      }
    }

    //  <Formulario/>
  }

  // A continuación, están todas las funciones que me permiten cambiar los states iniciales, esto da paso a cambiar entre páginas del menú, que se muestren los distintos componentes y no perder el flujo

  //Lo que hace es que cuando se presiones un botón con dicha función, que lo cambié los diferentes state a true y a false para que se muestre según lo que se solicite
  muestraLugares() {
    this.setState({ muestraLugares: true });
    this.setState({ muestraTabla: false });
  }
  muestraTabla() {
    this.setState({ muestraLugares: false });
    this.setState({ muestraTabla: true });
  }

  muestraHome() {
    this.setState({ muestraHome: true });
    this.setState({ muestraSignUp: false });
    this.setState({ muestraLogIn: false });
  }
  muestraSignUp() {
    this.setState({ muestraHome: false });
    this.setState({ muestraSignUp: true });
    this.setState({ muestraLogIn: false });
  }
  muestraLogIn() {
    this.setState({ muestraHome: false });
    this.setState({ muestraSignUp: false });
    this.setState({ muestraLogIn: true });
  }
}

//Exportamos el componente de menú conteniendo todos los menú dependiendo del login
export { Menu };
