import React, { Component } from "react";
import background from "../assets/background.jpg";
import WhiteLogo from "../assets/whiteLogo.png";
class Landing extends Component {
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
              Guarda y explora lo visitado por el mundo
            </h1>
            <button className="relative rounded-full shadow-xl group flex items-center text-black justify-center bg-gradient-to-r bg-white px-5 py-2">
              <div className="absolute rounded-full inset-0 w-0 bg-black transition-all duration-[0.3s] ease-out group-hover:w-full"></div>
              
              <span className="">Ingresar</span>
            </button>
          </div>
          <div className="h-[92.1%] w-full absolute lg:h-[88.6%]">
            <img className="h-[100%] w-full" src={background} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Landing };
