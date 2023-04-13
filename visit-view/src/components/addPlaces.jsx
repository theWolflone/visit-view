import React, { Component } from "react";
class Places extends Component {
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

  render() {
    const inputStyleimg = {
      border_radius: "50%",
      cursor: "pointer",
      width: "100px",
    };
    const oculta = { visibility: "collapse" };
    const muestra = { visibility: "vivible" };
    return (
      <React.Fragment>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none focus:border-blue-500"
            id="NOMBRE"
            placeholder="Nombre"
            onChange={(evt) => this.actualizadatosaguardar(evt)}
          />
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none focus:border-blue-500"
            id="PROVINCIA"
            placeholder="Provincia"
            onChange={(evt) => this.actualizadatosaguardar(evt)}
          />
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none focus:border-blue-500"
            id="CANTON"
            placeholder="Cantón"
            onChange={(evt) => this.actualizadatosaguardar(evt)}
          />
          <input
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none focus:border-blue-500"
            id="DISTRITO"
            placeholder="Distrito"
            onChange={(evt) => this.actualizadatosaguardar(evt)}
          />
          <input
            type="file"
            className="w-full px-3 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            id="FOTO"
            placeholder="Foto"
            onChange={(evt) => this.actualizadatosaguardar(evt)}
          />
          <img src={this.state.LUGAR.FOTO} style={inputStyleimg} />

          <input
            type="button"
            className="btn btn-primary"
            id="botonguardar"
            value="Guardar"
            onClick={this.guardarLugar}
          />
        </div>
      </React.Fragment>
    );
  }
  actualizadatosaguardar(evt) {
    var objetolocallugar = new Object();

    objetolocallugar = this.state.LUGAR;
    switch (evt.target.id) {
      case "NOMBRE": {
        console.log(this.state.LUGAR);
        objetolocallugar.NOMBRE = evt.target.value;
        break;
      }
      case "PROVINCIA": {
        console.log(this.state.LUGAR);
        objetolocallugar.PROVINCIA = evt.target.value;
        break;
      }
      case "CANTON": {
        console.log(this.state.LUGAR);
        objetolocallugar.CANTON = evt.target.value;
        break;
      }
      case "DISTRITO": {
        console.log(this.state.LUGAR);
        objetolocallugar.DISTRITO = evt.target.value;
        break;
      }

      default: {
        console.log("default");

        break;
      }
    }

    this.setState({
      LUGAR: objetolocallugar,
    });
  }

  _onChange = (e) => {
    var objetolocallugar = new Object();
    objetolocallugar = this.state.LUGAR;
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size < 2097152) {
        var reader = new FileReader();
        reader.onload = function (e) {
          objetolocallugar.FOTO = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);

        this.setState({
          LUGAR: objetolocallugar,
        });
      }
    }

    console.log(e);
  };

  guardarLugar = () => {
    var objetolocal = this.state.LUGAR;
    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona&#39;;
    const recipeUrl = "http://localhost:8888/api/nuevolugar";
    const requestMetadata = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetolocal),
    };

    fetch(recipeUrl, requestMetadata)
      .then((res) => res.json())
      .then((lugares) => {
        this.setState({ lugares: lugares });

        // this.setState({combosactuales: recipes})
        alert("Guardado");
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

  modificarLugar = (id) => {
    console.log(id);

    var objetolocal = this.state.LUGAR;
    objetolocal._id = id;
    const Url = "http://localhost:8888/api/modificalugar";
    const requestMetadata = {
      method: "POST",
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
        alert("Modificado");
      });
  };
}

export default Places;
