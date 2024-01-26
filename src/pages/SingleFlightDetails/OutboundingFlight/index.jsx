import "./OutboundingFlight.css";
import {
  DepartsFromArray,
  ArrivesAtDubaiArray,
} from "../../../Constant/constant";
function OutboundingFlight() {
  return (
    <div>
      <div className="departsFrom">Departs from Raja Bhoj Airport</div>
      {DepartsFromArray.map((val, index) => {
        return (
          <div className="stopsRadioContainer" key={index}>
            <div className="stopsRadioContent">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <span>{val.time}</span>
              </div>
            </div>
            <div className="stopsRadioContent">{val.count}</div>
          </div>
        );
      })}
      <div className="departsFrom">Arrives At Dubai</div>
      {ArrivesAtDubaiArray.map((val, index) => {
        return (
          <div className="stopsRadioContainer" key={index}>
            <div className="stopsRadioContent">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <span>{val.time}</span>
              </div>
            </div>
            <div className="stopsRadioContent">{val.count}</div>
          </div>
        );
      })}
    </div>
  );
}
export default OutboundingFlight;
