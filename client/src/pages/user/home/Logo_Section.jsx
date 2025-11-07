import React, { useEffect } from "react";
import "./logo_section.css";

const RandomLogoSlider = () => {
  useEffect(() => {
    const timer = 1050;
    const positions = document.querySelectorAll(".random-logo-positions .random-logo-position");
    const networkLogos = document.querySelectorAll(".random-logo-network-list li");
    let oldX = 0;
    let counter = 4;

    const generateRandomPosition = (min, max, avoid) => {
      let val;
      do {
        val = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (val === avoid);
      return val;
    };

    const interval = setInterval(() => {
      const x = generateRandomPosition(0, 3, oldX);
      const y = counter;

      positions[x].classList.remove("in");
      positions[x].classList.add("out");

      setTimeout(() => {
        positions[x].innerHTML = networkLogos[y].innerHTML;
        positions[x].style.display = "none";
        void positions[x].offsetWidth; // reflow
        positions[x].style.display = "block";
      }, 350);

      setTimeout(() => {
        positions[x].classList.remove("out");
        positions[x].classList.add("in");
      }, 650);

      oldX = x;
      counter = counter === networkLogos.length - 1 ? 0 : counter + 1;
    }, timer);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="random-logo-slider">
      <div className="random-logo-container">
        <h1 className="random-logo-sub-header">Companies we represent</h1>

        <ol className="random-logo-positions">
          <li className="random-logo-position in">
            <img src="https://sherpabrokerage.com/assets/img/partners/progressive.png" alt="progressive" />
          </li>
          <li className="random-logo-position in">
            <img src="https://sherpabrokerage.com/assets/img/partners/travelers.png" alt="travelers" />
          </li>
          <li className="random-logo-position in">
            <img src="https://sherpabrokerage.com/assets/img/partners/shelterpoint.png" alt="shelterpoint" />
          </li>
          <li className="random-logo-position in">
            <img src="https://sherpabrokerage.com/assets/img/partners/utica.png" alt="utica" />
          </li>
        </ol>

        <ul className="random-logo-network-list">
          <li><img src="https://sherpabrokerage.com/assets/img/partners/progressive.png" alt="progressive" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/travelers.png" alt="travelers" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/shelterpoint.png" alt="shelterpoint" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/utica.png" alt="utica" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/unitedhealthcare.png" alt="unitedhealthcare" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/fidelis.png" alt="fidelis" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/usliability.png" alt="usliability" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/tower-group.png" alt="tower-group" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/guard.png" alt="guard" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/blackboard.png" alt="blackboard" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/employer.png" alt="employer" /></li>
          <li><img src="https://sherpabrokerage.com/assets/img/partners/kingstone.png" alt="kingstone" /></li>
        </ul>
      </div>
    </div>
  );
};

export default RandomLogoSlider;
