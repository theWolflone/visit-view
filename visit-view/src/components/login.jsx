import React, { Component } from "react";
import { Menu } from "./menu";
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
          <Menu />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div>
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
