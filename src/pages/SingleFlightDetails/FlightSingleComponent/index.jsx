import "./flightSingleComponent.css";

import SingleFlightModalComponent from "../SingleFlightModalComponent";
import { useState } from "react";
import { AuthContext } from "../../../authentication/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function FlightSingleComponent(props) {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  //console.log(props.data?.arrivalTime);
  const [modalShow, setModalShow] = useState(false);

  function handleModalShow() {
    if (isLoggedIn) {
      setModalShow(true);
    } else {
      navigate("/signin");
    }
  }

  function handleModalHide() {
    setModalShow(false);
  }

  return (
    <>
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
            <button onClick={handleModalShow}>View details</button>
          </div>
        </div>
      </div>
      {modalShow ? (
        <SingleFlightModalComponent
          onclick={handleModalHide}
          id={props?.data?._id}
          data={props.data}
        />
      ) : (
        ""
      )}
    </>
  );
}
export default FlightSingleComponent;
