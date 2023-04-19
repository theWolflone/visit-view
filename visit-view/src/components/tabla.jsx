import React, { Component } from "react";
class Tabla extends Component {
  render() {
    const inputStyleimg = {
      border_radius: "50%",
      cursor: "pointer",
      width: "100px",
    };
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.NOMBRE}</td>
          <td>{this.props.PROVINCIA}</td>
          <td>{this.props.CANTON}</td>
          <td>{this.props.DISTRITO}</td>
          <td>
            <img src={this.props.FOTO} style={inputStyleimg} alt="" />
          </td>

          <td>
            <button className="btn-primary">Modificar</button>{" "}
          </td>
          <td>
            {" "}
            <button
              className="btn-primary"
              onClick={() => this.props.eliminarEvento(this.props._id)}
            >
              Eliminar
            </button>{" "}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
export {Tabla};
