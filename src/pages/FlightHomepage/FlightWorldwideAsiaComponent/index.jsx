import { FlightWorldwideAsiaArray } from "../../../Constant/constant";
import { Link } from "react-router-dom";

function FlightWorldwideAsiaComponent() {
  return (
    <div className="flightWorldwideComponentContainer">
      {FlightWorldwideAsiaArray.map((val, index) => {
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

      {/* <div className="flightWorldwideContent">
        <div className="flightWorldwideImage">
          <img src="https://q-xx.bstatic.com/xdata/images/city/square210/976782.jpg?k=35477ee3d4b1090e3c1fbe9472cee3f209c711c4787ffbbfea7ab9409257d289&o=" />
        </div>
        <div className="flightWorldwideText">
          <div className="flightWorldwideBoldText">Bhopal to New York</div>
          <div className="flightWorldwideLightText">
            Shortest flight time: 15h 53m
          </div>
        </div>
      </div>

      <div className="flightWorldwideContent">
        <div className="flightWorldwideImage">
          <img src="https://q-xx.bstatic.com/xdata/images/city/square210/976782.jpg?k=35477ee3d4b1090e3c1fbe9472cee3f209c711c4787ffbbfea7ab9409257d289&o=" />
        </div>
        <div className="flightWorldwideText">
          <div className="flightWorldwideBoldText">Bhopal to New York</div>
          <div className="flightWorldwideLightText">
            Shortest flight time: 15h 53m
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default FlightWorldwideAsiaComponent;
