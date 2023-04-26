import React, { Component } from "react";
import { Places } from "./addPlaces";
import { Tabla } from "./tabla";
import { Landing } from "./landing";
import MenuLogo from "../assets/logo-no-background.png"

class Menu extends Component {
  state = {
    muestraLugares: true,
    muestraTabla: false,
    muestraHome: true,
    muestraLogIn: false,
    muestraSignUp: false,
    userLogged: false,
  };

  render() {
    if (this.state.userLogged) {
      if (this.state.muestraLugares) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-4 text-center bg-white">
              <input
                type="button"
                value="Añadir lugares"
                onClick={(e) => this.muestraLugares()}
              />
              <input
                type="button"
                value="Tabla"
                onClick={(e) => this.muestraTabla()}
              />
              <br />
            </div>
          </React.Fragment>
        );
      }

      if (this.state.muestraTabla) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-4 text-center bg-white">
              <input
                type="button"
                value="Añadir lugares"
                onClick={(e) => this.muestraLugares()}
              />
              <input
                type="button"
                value="Tabla"
                onClick={(e) => this.muestraTabla()}
              />
              <br />
            </div>
          </React.Fragment>
        );
      }
    } else {
      if (this.state.muestraHome) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-6 text-center bg-white flex items-center justify-end text-lg pr-24">
              <img className="absolute md:h-10 my-auto left-10 sm:h-8 h-4"
                type="button"
                src={MenuLogo}
                onClick={(e) => this.muestraHome()}
              />
              <input className=""
                type="button"
                value="Sign Up"
                onClick={(e) => this.muestraSignUp()}
              />
              <input
                type="button"
                value="Log In"
                onClick={(e) => this.muestraLogIn()}
              />
              <br />
            </div>
            <Landing/>
          </React.Fragment>
        );
      }

      if (this.state.muestraSignUp) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-6 text-center bg-white flex items-center justify-end text-lg pr-24">
              <img className="absolute md:h-10 my-auto left-10 sm:h-8 h-4"
                type="button"
                src={MenuLogo}
                onClick={(e) => this.muestraHome()}
              />
              <input className=""
                type="button"
                value="Sign Up"
                onClick={(e) => this.muestraSignUp()}
              />
              <input
                type="button"
                value="Log In"
                onClick={(e) => this.muestraLogIn()}
              />
              <br />
            </div>
          </React.Fragment>
        );
      }
      if (this.state.muestraLogIn) {
        return (
          <React.Fragment>
            <div className="space-x-32 py-6 text-center bg-white flex items-center justify-end text-lg pr-24">
              <img className="absolute md:h-10 my-auto left-10 sm:h-8 h-4"
                type="button"
                src={MenuLogo}
                onClick={(e) => this.muestraHome()}
              />
              <input className=""
                type="button"
                value="Sign Up"
                onClick={(e) => this.muestraSignUp()}
              />
              <input
                type="button"
                value="Log In"
                onClick={(e) => this.muestraLogIn()}
              />
              <br />
            </div>
          </React.Fragment>
        );
      }
    }

    //  <Formulario/>
  }

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
  muestraSignUp(){
    this.setState({ muestraHome: false });
    this.setState({ muestraSignUp: true });
    this.setState({ muestraLogIn: false });
  }
  muestraLogIn(){
    this.setState({ muestraHome: false });
    this.setState({ muestraSignUp: false });
    this.setState({ muestraLogIn: true });
  }
}
export { Menu };
