import React, { Component } from "react";
import { Places } from "./addPlaces";
import { Tabla } from "./tabla";

class Menu extends Component {
  state = {
    muestraLogin: true,
    muestraSignUp: false,
  };

  render() {
    if (this.state.muestraLogin) {
      return (
        <React.Fragment>
          <div className="space-x-32 py-4 text-center bg-white">
            <input
              type="button"
              value="Log In"
              onClick={(e) => this.muestraLogin()}
            />
            <input
              type="button"
              value="Sign Up"
              onClick={(e) => this.muestraSignUp()}
            />
            <br />
          </div>
          <Places />
        </React.Fragment>
      );
    }

    if (this.state.muestraSignUp) {
      return (
        <React.Fragment>
          <div className="space-x-32 py-4 text-center bg-white">
            <input
              type="button"
              value="Log In"
              onClick={(e) => this.muestraLogin()}
            />
            <input
              type="button"
              value="Sign Up"
              onClick={(e) => this.muestraSignUp()}
            />
            <br />
          </div>
          <Tabla />
        </React.Fragment>
      );
    }

    //  <Formulario/>
  }

  muestraLogin() {
    this.setState({ muestraLogin: true });
    this.setState({ muestraSignUp: false });
  }
  muestraSignUp() {
    this.setState({ muestraLogin: false });
    this.setState({ muestraSignUp: true });
  }
}
export { Menu };
 