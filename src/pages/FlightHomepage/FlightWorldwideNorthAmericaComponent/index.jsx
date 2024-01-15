import "./flightWorldwideNorthAmericaComponent.css";
import { FlightWorldwideNorthAmericaArray } from "../../../Constant/constant";
import { Link } from "react-router-dom";

function FlightWorldwideNorthAmericaComponent() {
  return (
    <div className="flightWorldwideComponentContainer">
      {FlightWorldwideNorthAmericaArray.map((val, index) => {
        return (
          <Link
            to={`/single-flight-details?search=${JSON.stringify(val.search)}`}
            key={index}
          >
            <div className="flightWorldwideContent">
              <div className="flightWorldwideImage">
                <img src={val.image} />
              </div>
              <div className="flightWorldwideText">
                <div className="flightWorldwideBoldText">{val.name}</div>
                <div className="flightWorldwideLightText">{val.text}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default FlightWorldwideNorthAmericaComponent;
