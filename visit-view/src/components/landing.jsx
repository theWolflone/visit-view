import React, { Component } from "react";
import background from "../assets/background.jpg";
import WhiteLogo from "../assets/whiteLogo.png";
class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overflow-y-hidden">
          <div className="h-[94.2%] w-full absolute bg-emerald-800 z-50 opacity-70"></div>
          <div className="absolute opacity-100 z-50 m-auto ">
            <img
              src={WhiteLogo}
              alt="White Logo"
              className=" h-20  opacity-100"
            />
          </div>
          <div className="h-[94.2%] w-full absolute">
            <img className="h-[100%] w-full" src={background} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Landing };
