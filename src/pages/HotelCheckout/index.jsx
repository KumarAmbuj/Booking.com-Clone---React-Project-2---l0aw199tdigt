import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";
import "./hotelCheckout.css";
import HotelCheckoutAddToYourStayComponent from "./HotelCheckoutAddToYourStayComponent";
import HotelCheckoutArrivalTimeComponent from "./HotelCheckoutArrivalTimeComponent";
import HotelCheckoutBookingDetailsComponent from "./HotelCheckoutBookingDetailsComponent";
import HotelCheckoutComfortDoubleComponent from "./HotelCheckoutComfortDoubleComponent";
import HotelCheckoutGoodToKnowComponent from "./HotelCheckoutGoodToKnowComponent";
import HotelCheckoutLeftNameComponent from "./HotelCheckoutLeftNameComponent";
import HotelCheckoutLimitedSupplyComponent from "./HotelCheckoutLimitedSupplyComponent";

import HotelCheckoutPaymentComponent from "./HotelCheckoutPaymentComponent";
import HotelCheckoutPriceComponent from "./HotelCheckoutPriceComponent";
import HotelCheckoutSpecialRequestComponent from "./HotelCheckoutSpecialRequestComponent";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HotelCheckout() {
  const { state } = useLocation();
  const { hotelDetail, index } = state;
  const navigate = useNavigate();
  // console.log(hotelDetail);
  // console.log(index);
  function handleClick() {
    navigate("/hotel-payment", {
      state: { hotelDetail: hotelDetail, index: index },
    });
  }
  return (
    <>
      <FlightRegisterSignInNavbar />
      <div className="hotelCheckoutContainer">
        <div className="HotelCheckoutTopContainer">
          <div className="whoIsFlyingFlex">
            <div className="whoIsFlying">
              <div className="whoIsFlyingCircle">
                <i className="fa fa-check"></i>
              </div>
              <div className="whoIsFlyingText">Your selection</div>
            </div>
            <div className="whoIsFlyingLine"></div>
            <div className="checkAndPay">
              <div
                className="checkAndPayCircle"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                }}
              >
                2
              </div>
              <div className="checkAndPayText" style={{ color: "black" }}>
                Your details
              </div>
            </div>
            <div className="whoIsFlyingLine"></div>
            <div className="checkAndPay">
              <div className="checkAndPayCircle">3</div>
              <div className="checkAndPayText">Final step</div>
            </div>
          </div>
        </div>

        <div className="hotelCheckoutDetailFormFlex">
          <div className="hotelCheckoutDetail">
            <HotelCheckoutLeftNameComponent data={hotelDetail} />
            <HotelCheckoutBookingDetailsComponent
              data={hotelDetail}
              index={index}
            />
            <HotelCheckoutPriceComponent data={hotelDetail} index={index} />
            <HotelCheckoutPaymentComponent />
            <HotelCheckoutLimitedSupplyComponent />
          </div>

          <div className="hotelCheckoutForm">
            <div className="hotelCheckoutFormContainer">
              <div className="enterDetails">Enter your details</div>
              <div className="almostDone">
                <svg
                  class="bk-icon -streamline-info_sign"
                  height="22px"
                  role="presentation"
                  width="22px"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                </svg>
                Almost done! Just fill in the * required info
              </div>

              <div className="firstNameLastName">
                <div className="hotelCheckoutInputBox">
                  <div className="hotelCheckoutTypeHeader">
                    First name{" "}
                    <span style={{ color: "red", marginLeft: "-1px" }}>*</span>
                  </div>
                  <div style={{ marginTop: "3px" }}>
                    <input type="text" />
                  </div>
                </div>
                <div className="hotelCheckoutInputBox">
                  <div className="hotelCheckoutTypeHeader">
                    Last name{" "}
                    <span style={{ color: "red", marginLeft: "-1px" }}>*</span>
                  </div>
                  <div style={{ marginTop: "3px" }}>
                    <input type="text" />
                  </div>
                </div>
                <div className="hotelCheckoutInputBox">
                  <div className="hotelCheckoutTypeHeader">
                    Email address{" "}
                    <span style={{ color: "red", marginLeft: "-1px" }}>*</span>
                  </div>
                  <div style={{ marginTop: "3px" }}>
                    <input type="text" />
                  </div>
                  <div className="emailBottomText">
                    Confirmation email goes to this address
                  </div>
                </div>
              </div>

              <div className="hotelCheckoutBorderLine"></div>

              <div className="hotelCheckoutAddressContainer">
                <div className="yourAddressText">Your address</div>

                <div className="AddressContainer">
                  <div className="hotelCheckoutInputBox">
                    <div className="hotelCheckoutTypeHeader">
                      Address{" "}
                      <span style={{ color: "red", marginLeft: "-1px" }}>
                        *
                      </span>
                    </div>
                    <div style={{ marginTop: "3px" }}>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="hotelCheckoutInputBox">
                    <div className="hotelCheckoutTypeHeader">
                      City{" "}
                      <span style={{ color: "red", marginLeft: "-1px" }}>
                        *
                      </span>
                    </div>
                    <div style={{ marginTop: "3px" }}>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="hotelCheckoutInputBox">
                    <div className="hotelCheckoutTypeHeader">
                      Zip/Post code{" "}
                      <span style={{ color: "red", marginLeft: "-1px" }}>
                        *
                      </span>
                    </div>
                    <div style={{ marginTop: "3px" }}>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="hotelCheckoutInputBox">
                    <div className="hotelCheckoutTypeHeader">
                      Country/region{" "}
                      <span style={{ color: "red", marginLeft: "-1px" }}>
                        *
                      </span>
                    </div>
                    <div style={{ marginTop: "3px" }}>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="hotelCheckoutInputBox">
                    <div className="hotelCheckoutTypeHeader">
                      Telephone (mobile number preferred){" "}
                      <span style={{ color: "red", marginLeft: "-1px" }}>
                        *
                      </span>
                    </div>
                    <div style={{ marginTop: "3px" }}>
                      <input type="text" />
                    </div>
                    <div className="emailBottomText">
                      Needed by the property to validate your booking
                    </div>
                  </div>

                  <div className="hotelCheckoutInputCheckbox">
                    <input type="checkbox" />
                    <label>
                      Yes, I'd like free paperless confirmation (recommended)
                      We'll text you a link to download our app
                    </label>
                  </div>
                </div>

                <div className="hotelCheckoutBorderLine"></div>

                <div className="hotelCheckoutInputRadioBox">
                  <div className="hotelCheckoutTypeHeader">
                    Who are you booking for?{" "}
                    <span style={{ color: "red", marginLeft: "-1px" }}>*</span>
                  </div>
                  <div className="radioInput">
                    <input type="radio" name="bookingFor" />
                    <label>I am the main guest</label>
                  </div>
                  <div className="radioInput">
                    <input type="radio" name="bookingFor" />
                    <label>Booking is for someone else</label>
                  </div>
                </div>

                <div className="hotelCheckoutInputRadioBox">
                  <div className="hotelCheckoutTypeHeader">
                    Are you travelling for work?{" "}
                    <span style={{ color: "red", marginLeft: "-1px" }}>*</span>
                  </div>
                  <div className="radioInput">
                    <input type="radio" name="travellingForWork" />
                    <label>Yes</label>

                    <input type="radio" name="travellingForWork" />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>

            <HotelCheckoutGoodToKnowComponent />

            <HotelCheckoutComfortDoubleComponent />

            <HotelCheckoutAddToYourStayComponent />

            <HotelCheckoutSpecialRequestComponent />

            <HotelCheckoutArrivalTimeComponent />
            <div className="hotelCheckBottomButtons">
              <button className="priceMatchButton">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={"16px"}
                    width={"16px"}
                  >
                    <path
                      fill="blue"
                      d="M.311 2.56v6.257a3.75 3.75 0 0 0 1.098 2.651l11.56 11.562a2.25 2.25 0 0 0 3.182 0l6.88-6.88a2.25 2.25 0 0 0 0-3.181L11.468 1.408A3.75 3.75 0 0 0 8.818.31H2.56a2.25 2.25 0 0 0-2.25 2.25zm1.5 0a.75.75 0 0 1 .75-.75h6.257a2.25 2.25 0 0 1 1.59.659l11.562 11.56a.75.75 0 0 1 0 1.06l-6.88 6.88a.75.75 0 0 1-1.06 0L2.47 10.409a2.25 2.25 0 0 1-.659-1.59V2.56zm5.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0z"
                    ></path>
                  </svg>
                </span>
                We Price Match
              </button>
              <button className="checkoutNextButton" onClick={handleClick}>
                Next: Final Details
                <span>
                  <svg
                    class="bk-icon -streamline-arrow_nav_right"
                    height="24"
                    role="presentation"
                    width="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="white"
                      d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HotelCheckout;
