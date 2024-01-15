import { useState } from "react";
import "./singleFlightDetailsFilterAndFlight.css";
import FlightBestComponent from "../FlightBestComponent";
import FlightCheapestComponent from "../FlightCheapestComponent";
import FlightFastestComponent from "../FlightFastestComponent";
import FlightFilterComponent from "../FlightFilterComponent";

function SingleFlightDetailsFilterAndFlight(props) {
  const [flightType, setFlightType] = useState(1);
  function handleClick(val) {
    setFlightType(val);
  }
  return (
    <div className="singleFlightDetailsFilterAndFlightContainer">
      <div className="flightFilter">
        <FlightFilterComponent />
      </div>

      <div className="flightComponent">
        <div className="flightComponentTopButtons">
          <button
            onClick={() => handleClick(1)}
            id={flightType === 1 ? "activeType" : ""}
          >
            Best
          </button>
          <button
            onClick={() => handleClick(2)}
            id={flightType === 2 ? "activeType" : ""}
          >
            Cheapest
          </button>
          <button
            onClick={() => handleClick(3)}
            id={flightType === 3 ? "activeType" : ""}
          >
            Fastest
          </button>
        </div>

        {flightType === 1 && <FlightBestComponent data={props.data} />}
        {flightType === 2 && <FlightCheapestComponent data={props.data} />}
        {flightType === 3 && <FlightFastestComponent data={props.data} />}
      </div>
    </div>
  );
}
export default SingleFlightDetailsFilterAndFlight;
