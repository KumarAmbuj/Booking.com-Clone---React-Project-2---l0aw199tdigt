import { useState } from "react";
import { filterAirlinesArray } from "../../../Constant/constant";
import "./flightFilterComponent.css";
import ReturnFlight from "../ReturnFlight";
import OutboundingFlight from "../OutboundingFlight";
function FlightFilterComponent() {
  const [flightReturn, setFlightReturn] = useState(false);
  function handleClick(val) {
    setFlightReturn(val);
  }
  return (
    <div className="flightFilterComponent">
      <div className="flightFilterBoldText">Filters</div>
      <div className="flightFilterLightText">Showing 645 results</div>

      <div className="filterStopsContainer">
        <div className="filterStopsContainerHeaderText">Stops</div>
        <div className="stopsRadioContainer">
          <div className="stopsRadioContent">
            <div>
              <input type="radio" />
            </div>
            <div>
              <span>Any</span>
              <br></br>
              <span>From INR32,208.40</span>
            </div>
          </div>
          <div className="stopsRadioContent">677</div>
        </div>

        <div className="stopsRadioContainer">
          <div className="stopsRadioContent">
            <div>
              <input type="radio" />
            </div>
            <div>
              <span>1 stop max</span>
              <br></br>
              <span>From INR32,208.40</span>
            </div>
          </div>
          <div className="stopsRadioContent">462</div>
        </div>
      </div>

      <div className="filterCheckBoxContainer">
        <div className="filterCheckBoxContainerHeaderText">Airlines</div>

        {filterAirlinesArray.map((val, index) => {
          return (
            <div className="stopsRadioContainer" key={index}>
              <div className="stopsRadioContent">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <span>{val.name}</span>
                </div>
              </div>
              <div className="stopsRadioContent">{val.count}</div>
            </div>
          );
        })}
      </div>

      <div className="flightTimes">
        <div className="flightTimesHeader">Flight times</div>

        <div className="flightTimesButtons">
          <button
            onClick={() => handleClick(false)}
            id={!flightReturn ? "activeType" : ""}
          >
            Outbound flight
          </button>
          <button
            onClick={() => handleClick(true)}
            id={flightReturn ? "activeType" : ""}
          >
            Return flight
          </button>
        </div>

        {flightReturn ? <ReturnFlight /> : <OutboundingFlight />}
      </div>
    </div>
  );
}
export default FlightFilterComponent;
