// Se importan los módulos necesarios de React y algunos archivos de imagen.
import React, { Component } from "react";
import background from "../assets/background.jpg";
import WhiteLogo from "../assets/whiteLogo.png";

// Se define una clase Landing que extiende la clase Component de React.
class Landing extends Component {

  // Se define una función llamada directLog que se utiliza para cambiar el estado de los componentes loginView, signupView y homeView que se pasan como propiedades (props) desde otro componente.
  directLog = () => {
    this.props.loginView(false);
    this.props.signupView(true);
    this.props.homeView(false);
  };

  // Se define el método render, que devuelve el contenido HTML que se mostrará en la página.
  render() {
    return (
      <React.Fragment>
        <div className="overflow-y-hidden">
          <div className="h-[92.1%] lg:h-[88.6%] w-full absolute bg-emerald-800 z-40 opacity-70"></div>
          <div className="absolute opacity-100 z-50 flex flex-col items-center justify-center w-full h-[92.1%]  lg:h-[88.6%]">
            <img
              src={WhiteLogo}
              alt="White Logo"
              className="h-20 opacity-100 mx-auto"
            />
            <h1 className="p-6 text-2xl text-white">
              Guarda y explora lo que has visitado por el mundo
            </h1>
            {/* Se define un botón que se mostrará en la página y se le asigna una función de onClick que se ejecutará cuando el usuario haga clic en el botón. */}
            <button
              onClick={this.funLog}
              className="relative rounded-xl shadow-xl group flex items-center text-green-800 justify-center bg-white px-8 py-3 hover:text-white font-semibold"
            >
              <div className="absolute rounded-xl inset-0 w-0 bg-emerald-700 transition-all duration-[250ms] ease-out group-hover:w-full group-hover:rounded-xl"></div>

              <span className="z-50 text-2xl">Ingresar</span>
            </button>
          </div>
          <div className="h-[92.1%] w-full absolute lg:h-[88.6%]">
            <img className="h-[100%] w-full" src={background} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
  // Se define una función llamada funLog que simplemente llama a la función directLog.
  funLog = () => {
    this.directLog();
  };
}
// Se exporta el componente Landing para que pueda ser utilizado en otro lugar de la aplicación.
export { Landing };
