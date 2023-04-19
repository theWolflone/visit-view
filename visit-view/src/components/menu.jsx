import React, { Component } from "react";
import { Places } from "./addPlaces";
import { Tabla } from "./tabla";

class Menu extends Component {
  state = {
    muestraLugares: true,
    muestraTabla: false,
  };

  render() {
    if (this.state.muestraLugares) {
      return (
        <React.Fragment>
          <div className="space-x-32 my-4 text-center">
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
          <Places />
        </React.Fragment>
      );
    }

    if (this.state.muestraTabla) {
      return (
        <React.Fragment>
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
          <Tabla />
        </React.Fragment>
      );
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
}
export { Menu };
