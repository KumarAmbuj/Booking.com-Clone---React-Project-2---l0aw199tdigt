import "./flightCheckout.css";
import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FlightCode } from "../../Constant/constant";

function FlightCheckout() {
  const { state } = useLocation();
  const { singleFlightData } = state;
  const navigate = useNavigate();
  //console.log(state);
  function handleToNavigate() {
    navigate("/flight-payment", { state: { singleFlightData } });
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
          Round trip · 1 traveller · Sat 20 Jan - Sat 20 Jan
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
                    required
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
                    required
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
                    placeholder="Enter email address"
                    required
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
                    type="number"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div className="emailInputContainer">
                <div className="emailInputText">
                  Gender specified on your travel document{" "}
                  <span style={{ color: "red", marginLeft: "px" }}>*</span>
                </div>

                <div className="emailInputBox">
                  <select required>
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
