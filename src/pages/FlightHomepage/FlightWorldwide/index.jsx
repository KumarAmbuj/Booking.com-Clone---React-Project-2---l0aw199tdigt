import { useState } from "react";
import "./flightWorldwide.css";
import FlightWorldwideNorthAmericaComponent from "../FlightWorldwideNorthAmericaComponent";
import FlightWorldwideAfricaComponent from "../FlightWorldwideAfricaComponent";
import FlightWorldwideAsiaComponent from "../FlightWorldwideAsiaComponent";
import FlightWorldwideOceaniaComponent from "../FlightWorldwideOceaniaComponent";
import FlightWorldwideSouthAmericaComponent from "../FlightWorldwideSouthAmericaComponent";
import FlightWorldwideEuropeComponent from "../FlightWorldwideEuropeComponent";

function FlightWorldwide() {
  const [flightWorldwideType, setFlightWorldwide] = useState(1);

  function handleClick(val) {
    setFlightWorldwide(val);
  }

  return (
    <div className="flightWorldwideContainer">
      <div className="flightWorldwideHeaderText">
        Fly worldwide with Booking.com
      </div>
      <div className="flightWorldwideLightText">
        Flights from wherever you are to wherever you want to go
      </div>

      <div className="flightWorldwideButtons">
        <button
          id={flightWorldwideType === 1 ? "activeType" : ""}
          onClick={() => {
            handleClick(1);
          }}
        >
          North America
        </button>
        <button
          id={flightWorldwideType === 2 ? "activeType" : ""}
          onClick={() => {
            handleClick(2);
          }}
        >
          Asia
        </button>
        <button
          id={flightWorldwideType === 3 ? "activeType" : ""}
          onClick={() => {
            handleClick(3);
          }}
        >
          Europe
        </button>
        <button
          id={flightWorldwideType === 4 ? "activeType" : ""}
          onClick={() => {
            handleClick(4);
          }}
        >
          Oceania
        </button>
        <button
          id={flightWorldwideType === 5 ? "activeType" : ""}
          onClick={() => {
            handleClick(5);
          }}
        >
          Africa
        </button>
        <button
          id={flightWorldwideType === 6 ? "activeType" : ""}
          onClick={() => {
            handleClick(6);
          }}
        >
          South America
        </button>
      </div>

      {flightWorldwideType == 1 && <FlightWorldwideNorthAmericaComponent />}
      {flightWorldwideType == 2 && <FlightWorldwideAsiaComponent />}
      {flightWorldwideType == 3 && <FlightWorldwideEuropeComponent />}
      {flightWorldwideType == 4 && <FlightWorldwideOceaniaComponent />}
      {flightWorldwideType == 5 && <FlightWorldwideAfricaComponent />}
      {flightWorldwideType == 6 && <FlightWorldwideSouthAmericaComponent />}
    </div>
  );
}
export default FlightWorldwide;
