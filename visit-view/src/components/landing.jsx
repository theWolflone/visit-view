import React, { Component } from "react";
import background from "../assets/background.jpg";
class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="">
          <div className="h-[94.2%] w-full absolute bg-emerald-800 z-50 opacity-70">
            <div>
              <p>Visit View</p>
            </div>
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
