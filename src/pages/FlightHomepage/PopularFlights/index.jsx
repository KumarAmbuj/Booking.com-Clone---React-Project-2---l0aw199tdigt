import "./popularFlights.css";
function PopularFlights() {
  return (
    <div className="popularFlightsContainer">
      <div className="popularFlightsHeaderText">Popular flights near you</div>
      <div className="popularFlightsLightText">
        Find deals on domestic and international flights
      </div>
      <div className="popularFlightsButton">
        <button>International</button>
        <button>Domestic</button>
      </div>

      <div className="InternationalDomesticFlights">
        <div className="InternationalDomesticFlightsImage">
          <img src="https://q-xx.bstatic.com/xdata/images/city/square210/977254.jpg?k=63f933394752da6919853788cd62467945e5d98127c5c3a04abc9981882400b8&o=" />
          <div className="InternationalDomesticFlightsBoldText">
            Raipur to Dubai
          </div>
          <div className="InternationalDomesticFlightsLightText">
            9 jan - 6 jan . Round trip
          </div>
        </div>
        <div className="InternationalDomesticFlightsImage">
          <img src="https://q-xx.bstatic.com/xdata/images/city/square210/977254.jpg?k=63f933394752da6919853788cd62467945e5d98127c5c3a04abc9981882400b8&o=" />
          <div className="InternationalDomesticFlightsBoldText">
            Raipur to Dubai
          </div>
          <div className="InternationalDomesticFlightsLightText">
            9 jan - 6 jan . Round trip
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopularFlights;
