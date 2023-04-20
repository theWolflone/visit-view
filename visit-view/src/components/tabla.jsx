import React, { Component } from "react";

class Tabla extends Component {
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

  componentDidMount() {
    this.listarLugares();
  }

  listarLugares = () => {
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona&#39;;
    const recipeUrl = "http://localhost:8888/api/listarlugar";
    const requestMetadata = {
      method: "GET",
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
          lugares: lugares.item,
        });
      });
  };

  eliminarLugar = (id) => {
    console.log(id);

    var objetolocal = this.state.LUGAR;
    objetolocal._id = id;
    const Url = "http://localhost:8888/api/eliminalugar";
    const requestMetadata = {
      method: "DELETE",
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
          lugares: lugares,
        });
        alert("Eliminado");
      });
  };

  render() {
    return (
      <React.Fragment>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-400">Nombre</th>
              <th className="py-2 px-4 border border-gray-400">Provincia</th>
              <th className="py-2 px-4 border border-gray-400">Cantón</th>
              <th className="py-2 px-4 border border-gray-400">Distrito</th>
              <th className="py-2 px-4 border border-gray-400">Foto</th>
              <th className="py-2 px-4 border border-gray-400">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lugares.map((lugar) => (
              <tr key={lugar._id} className="border border-gray-400">
                <td className="py-2 px-4 border border-gray-400">
                  {lugar.NOMBRE}
                </td>
                <td className="py-2 px-4 border border-gray-400">
                  {lugar.PROVINCIA}
                </td>
                <td className="py-2 px-4 border border-gray-400">
                  {lugar.CANTON}
                </td>
                <td className="py-2 px-4 border border-gray-400">
                  {lugar.DISTRITO}
                </td>
                <td className="py-2 px-4 border border-gray-400 ">
                  <img
                    src={lugar.FOTO}
                    alt={lugar.NOMBRE}
                    className="w-20 rounded-full cursor-pointer"
                  />
                </td>
                <td className="py-2 px-4 border border-gray-400">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => this.eliminarLugar(lugar._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export { Tabla };
