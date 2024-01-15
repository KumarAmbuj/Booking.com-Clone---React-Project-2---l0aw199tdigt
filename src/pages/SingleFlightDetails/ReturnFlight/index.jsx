import {
  DepartsFromArray,
  ArrivesAtDubaiArray,
} from "../../../Constant/constant";

function ReturnFlight() {
  return (
    <div>
      <div className="departsFrom">Departs from Dubai</div>
      {DepartsFromArray.map((val) => {
        return (
          <div className="stopsRadioContainer">
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
      <div className="departsFrom">Arrives At Raja Bhoj Airport</div>
      {ArrivesAtDubaiArray.map((val) => {
        return (
          <div className="stopsRadioContainer">
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
export default ReturnFlight;
