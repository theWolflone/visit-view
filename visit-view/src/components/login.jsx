import React, { Component } from "react";
import Principal from "./menu";
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
          <Principal />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto mt-5">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Iniciar sesión</h5>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Correo</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese su correo..."
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Ingrese su contraseña..."
                        onChange={(evt) => this.actualizadatosaverificar(evt)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.Ingreso}
                    >
                      Enviar
                    </button>
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
    const recipeUrl = "http://localhost:8080/api/loginuser";
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

export default Login;