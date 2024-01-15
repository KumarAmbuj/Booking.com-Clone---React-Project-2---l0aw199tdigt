import "./flightSingleComponent.css";
function FlightSingleComponent(props) {
  //console.log(props.data?.arrivalTime);
  return (
    <div className="flightBestContent">
      <div className="flightBestContentChild1">
        <div className="flightBestContentInnerChild">
          <div className="flightBestContentInnerChildImage">
            <img src="https://r-xx.bstatic.com/data/airlines_logo/6E.png" />
            <div style={{ paddingLeft: "10px", marginBottom: "10px" }}>
              Indigo
            </div>
          </div>
          <div className="flightBestContentInnerChildTime">
            <div className="timeBoldText">{props?.data?.departureTime}</div>
            <div className="timeLightText">{props?.data?.source} 11 Jan</div>
          </div>
          <div className="flightBestContentInnerChildLine">
            <div>{props?.data?.duration}h 10m</div>

            <div className="timeLine"></div>

            <div>{props?.data?.stops} stop</div>
          </div>
          <div className="flightBestContentInnerChildTime">
            <div className="timeBoldText">{props?.data?.arrivalTime}</div>
            <div className="timeLightText">
              {props?.data?.destination} 11 Jan
            </div>
          </div>
        </div>

        <div className="flightBestContentInnerChild">
          <div className="flightBestContentInnerChildImage">
            <img src="https://r-xx.bstatic.com/data/airlines_logo/6E.png" />
            <div style={{ paddingLeft: "10px", marginBottom: "10px" }}>
              Indigo
            </div>
          </div>
          <div className="flightBestContentInnerChildTime">
            <div className="timeBoldText">09:35</div>
            <div className="timeLightText">
              {props?.data?.destination} 11 Jan
            </div>
          </div>
          <div className="flightBestContentInnerChildLine">
            <div>{props?.data?.duration}h 10m</div>

            <div className="timeLine"></div>

            <div>{props?.data?.stops} stop</div>
          </div>
          <div className="flightBestContentInnerChildTime">
            <div className="timeBoldText">09:35</div>
            <div className="timeLightText">{props?.data?.source} 11 Jan</div>
          </div>
        </div>
      </div>
      <div className="flightBestContentChild2">
        <div className="flightBestContentChild2Image">
          <img src="https://img.freepik.com/premium-vector/travel-luggage-bags-icon-baggage-suitcases-pictograms-isolated-white_101884-1456.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais" />
        </div>
        <div className="cabinBagText">Included: cabin bag, checked bag</div>
        <div className="flightPrice">INR {props?.data?.ticketPrice}</div>
        <div className="cabinBagText">Total price for all travellers</div>
        <div className="flightButton">
          <button>View details</button>
        </div>
      </div>
    </div>
  );
}
export default FlightSingleComponent;
