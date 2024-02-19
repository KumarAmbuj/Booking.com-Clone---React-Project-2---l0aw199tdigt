import "./flightCheckout.css";
import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";
import {
  nameValidator,
  emailValidator,
  mobileNumberValidator,
} from "../../Constant/constant";

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FlightCode } from "../../Constant/constant";
import { monthNames, dayNames } from "../../Constant/constant";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext, useRef } from "react";

function FlightCheckout() {
  const { date } = useContext(AuthContext);
  const { state } = useLocation();
  const { singleFlightData } = state;
  const navigate = useNavigate();
  const fName = useRef(null);
  const lName = useRef(null);
  const emailAd = useRef(null);
  const pNumber = useRef(null);
  const gender = useRef(null);

  //console.log(state);
  function handleToNavigate() {
    if (
      fName.current.value &&
      lName.current.value &&
      emailAd.current.value &&
      pNumber.current.value &&
      gender
    ) {
      navigate("/flight-payment", {
        state: {
          singleFlightData,
          firstName: fName.current.value,
          lastName: lName.current.value,
          email: emailAd.current.value,
          phoneNumber: pNumber.current.value,
          gender: gender.current.value,
        },
      });
    } else {
      if (!nameValidator(fName.current.value)) {
        fName.current.focus();
        fName.current.style.outline = "1px solid red";
      }
      if (!nameValidator(lName.current.value)) {
        lName.current.focus();
        lName.current.style.outline = "1px solid red";
      }
      if (!emailValidator(emailAd.current.value)) {
        emailAd.current.focus();
        emailAd.current.style.outline = "1px solid red";
      }
      if (!mobileNumberValidator(pNumber.current.value)) {
        pNumber.current.focus();
        pNumber.current.style.outline = "1px solid red";
      }
      if (!gender.current.value) {
        gender.current.focus();
        gender.current.style.outline = "1px solid red";
      }
    }

    //console.log("heyyy");
  }
  return (
    <div>
      <FlightRegisterSignInNavbar />
      <div className="flightCheckoutContainer">
        <div className="whoIsFlyingContainer">
          <div className="whoIsFlyingFlex">
            <div className="whoIsFlying">
              <div className="whoIsFlyingCircle">1</div>
              <div className="whoIsFlyingText">Who's flying ?</div>
            </div>
            <div className="whoIsFlyingLine"></div>
            <div className="checkAndPay">
              <div className="checkAndPayCircle">2</div>
              <div className="checkAndPayText">Check and pay</div>
            </div>
          </div>
        </div>

        <div className="roundTripText">
          Round trip · 1 traveller ·{" "}
          {`${dayNames[date.getDay()]} ${date.getDate()} ${
            monthNames[date.getMonth()]
          }`}{" "}
          - Sat 20 Jan
        </div>

        <div className="FlightFromToCity">
          {FlightCode[singleFlightData.source]} to{" "}
          {FlightCode[singleFlightData.destination]} City
        </div>

        <div className="flyingText">Who's flying?</div>

        <div className="FormPriceFlexContainer">
          <div className="formContainer">
            <div className="formHeaderText">Contact details</div>
            <div className="formrequiredText">
              <span style={{ color: "red", marginRight: "5px" }}>*</span>
              Required
            </div>
            <form>
              <div className="emailInputContainer">
                <div className="emailInputText">
                  Contact email{" "}
                  <span style={{ color: "red", marginLeft: "px" }}>*</span>
                </div>

                <div className="emailInputBox">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    ref={emailAd}
                  />
                </div>
              </div>

              <div className="emailInputContainer">
                <div className="emailInputText">
                  Phone number{" "}
                  <span style={{ color: "red", marginLeft: "px" }}>*</span>
                </div>

                <div className="emailInputBox">
                  <input
                    type="number"
                    placeholder="Enter phone number"
                    ref={pNumber}
                  />
                </div>
              </div>

              <div className="emailCheckBox">
                <input type="checkbox" placeholder="Enter phone number" />{" "}
                <label>Get free SMS updates about your flight</label>
              </div>
            </form>
          </div>

          <div className="priceContainer">
            <div className="priceTicketFlex">
              <div>Ticket (1 adult)</div>
              <div>INR {singleFlightData.ticketPrice + 677}.00</div>
            </div>
            <div className="flightFareTicketFlex">
              <div>Flight fare</div>
              <div>{singleFlightData.ticketPrice}.00</div>
            </div>
            <div className="taxesTicketFlex">
              <div>Taxes and charges</div>
              <div>INR 677.00</div>
            </div>

            <div className="totalTicketFlex">
              <div>Total</div>
              <div>INR {singleFlightData.ticketPrice + 677}.00</div>
            </div>

            <div className="includeTaxes">Includes taxes and charges</div>

            <div className="noHiddenFee">
              <i className="fa fa-check"></i>
              No hidden fees - track your price at every step
            </div>

            <div className="feedbackContainer">
              <div className="feedbackText">Give feedback</div>
              <div className="tellusText">
                Tell us how we're doing and what could be better
              </div>
            </div>
          </div>
        </div>

        <div className="FormPriceFlexContainer" style={{ marginTop: "30px" }}>
          <div className="formContainer">
            <div className="formHeaderText">Traveller 1 (Adult)</div>
            <div className="formrequiredText">
              <span style={{ color: "red", marginRight: "5px" }}>*</span>
              Required
            </div>
            <form>
              <div className="emailInputContainer">
                <div className="emailInputText">
                  First names{" "}
                  <span style={{ color: "red", marginLeft: "px" }}>*</span>
                </div>

                <div className="emailInputBox">
                  <input
                    type="text"
                    placeholder="Enter first name"
                    ref={fName}
                  />
                </div>
              </div>

              <div className="emailInputContainer">
                <div className="emailInputText">
                  Last names{" "}
                  <span style={{ color: "red", marginLeft: "px" }}>*</span>
                </div>

                <div className="emailInputBox">
                  <input
                    type="text"
                    placeholder="Enter last name"
                    ref={lName}
                  />
                </div>
              </div>

              <div className="emailInputContainer">
                <div className="emailInputText">
                  Gender specified on your travel document{" "}
                  <span style={{ color: "red", marginLeft: "px" }}>*</span>
                </div>

                <div className="emailInputBox">
                  <select ref={gender}>
                    <option>Select your gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </form>

            {/* <div className="emailCheckBox">
              <input type="checkbox" placeholder="Enter phone number" />{" "}
              <label>Get free SMS updates about your flight</label>
            </div> */}
          </div>
          <div className="priceContainer"></div>
        </div>

        <div className="flightCheckoutButtons">
          <button className="flightCheckoutBackButton">
            <i className="fa fa-angle-left" style={{ marginRight: "10px" }}></i>
            Back
          </button>

          <button
            className="flightCheckoutNextButton"
            type="submit"
            onClick={handleToNavigate}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default FlightCheckout;
