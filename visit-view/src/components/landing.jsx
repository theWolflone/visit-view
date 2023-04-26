import React, { Component } from "react";
import background from "../assets/background.jpg";
import WhiteLogo from "../assets/whiteLogo.png";
class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overflow-y-hidden">
          <div className="h-[92.1%] w-full absolute bg-emerald-800 z-40 opacity-70"></div>
          <div className="absolute opacity-100 z-50 flex items-center justify-center w-full h-[92.1%]">
            <img
              src={WhiteLogo}
              alt="White Logo"
              className="h-20  opacity-100 mx-auto"
            />
            <button className="" value="Comenzar"></button>
          </div>
          <div className="h-[92.1%] w-full absolute">
            <img className="h-[100%] w-full" src={background} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Landing };
