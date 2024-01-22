import "./flightPayment.css";
import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";
import { useLocation } from "react-router-dom";

import { FlightCode } from "../../Constant/constant";

function FlightPayment() {
  const { state } = useLocation();
  const { singleFlightData } = state;
  return (
    <div>
      <FlightRegisterSignInNavbar />
      <div className="flightCheckoutContainer">
        <div className="whoIsFlyingContainer">
          <div className="whoIsFlyingFlex">
            <div className="whoIsFlying">
              <div className="whoIsFlyingCircle">
                <i className="fa fa-check"></i>
              </div>
              <div className="whoIsFlyingText">Who's flying ?</div>
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
                Check and pay
              </div>
            </div>
          </div>
        </div>

        <div className="roundTripText">
          Round trip · 1 traveller · Sat 20 Jan - Sat 27 Jan
        </div>

        <div className="FlightFromToCity">
          {FlightCode[singleFlightData.source]} to{" "}
          {FlightCode[singleFlightData.destination]} City
        </div>

        <div className="flyingText">Check and pay</div>

        <div className="FormPriceFlexContainer">
          <div className="paymentLeftContainer">
            <div className="paymentFlightDetail">
              <div>
                <img
                  src="https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
              <div>
                <div className="paymentFlightBoldText">
                  {FlightCode[singleFlightData.source]} ({" "}
                  {singleFlightData.source}) to{" "}
                  {FlightCode[singleFlightData.destination]} (
                  {singleFlightData.destination})
                </div>
                <div className="paymentFlightLightText">
                  Thu 25 Jan · {singleFlightData.departureTime} - Thu 25 Jan ·{" "}
                  {singleFlightData.arrivalTime}
                </div>
                <div className="paymentFlightLightText">
                  Direct · {singleFlightData.duration}h 10m · Economy
                </div>
              </div>
            </div>
            <div className="paymentFlightDetail">
              <div>
                <img
                  src="https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
              <div>
                <div className="paymentFlightBoldText">
                  {FlightCode[singleFlightData.destination]} ({" "}
                  {singleFlightData.destination}) to{" "}
                  {FlightCode[singleFlightData.source]} (
                  {singleFlightData.source})
                </div>
                <div className="paymentFlightLightText">
                  Thu 25 Jan · {singleFlightData.departureTime} - Thu 25 Jan ·{" "}
                  {singleFlightData.arrivalTime}
                </div>
                <div className="paymentFlightLightText">
                  Direct · {singleFlightData.duration}h 10m · Economy
                </div>
              </div>
            </div>

            <div className="paymentContactDetail">
              <div className="formHeaderText">Contact details</div>
              <div
                className="paymentContactLightText"
                style={{ marginTop: "20px" }}
              >
                +91 9999999999
              </div>
              <div className="paymentContactLightText">a@gmail.com</div>
            </div>

            <div className="paymentContactDetail">
              <div className="formHeaderText">Traveller details</div>
              <div
                className="paymentContactLightText"
                style={{ marginTop: "20px" }}
              >
                Kumar Ambuj
              </div>
              <div className="paymentContactLightText">Adult · Male</div>
            </div>

            <div className="paymentBaggageDetail">
              <div className="formHeaderText">Baggage</div>
              <div className="formHeaderLightText">
                Total number of bags included for all travellers
              </div>
              <div className="paymentBaggageFromBoldText">Flight to Mumbai</div>
              <div className="paymentBaggageImageTextFlex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={"25px"}
                    width={"25px"}
                  >
                    <path d="m 1.5 23.25 A 0.75 0.75 0 0 1 1 22 L 22 1 a 0.75 0.75 0 0 1 1 1 L 2 23 c -0.128 0.146 -0.307 0.235 -0.5 0.25 z m 17.77 -2.87 V 9.88 a 0.75 0.75 0 0 0 -1.5 0 v 10.5 c -0.005 0.41 -0.34 0.74 -0.75 0.74 H 7 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 h 10 a 2.24 2.24 0 0 0 2.25 -2.24 z M 15 12.62 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 c 0.14 0.005 0.25 0.12 0.25 0.26 V 15 H 12.5 c -0.412 0.005 -0.745 0.338 -0.75 0.75 c 0 0.316 0.2 0.597 0.5 0.7 v 0.3 a 0.75 0.75 0 0 0 1.5 0 V 16.5 h 1.5 v 1.88 c -0.005 0.134 -0.116 0.24 -0.25 0.24 H 9 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 h 6 c 0.963 0 1.744 -0.777 1.75 -1.74 v -4 c 0 -0.968 -0.782 -1.754 -1.75 -1.76 z M 16 5.1 c -0.085 0.407 -0.482 0.67 -0.89 0.59 C 14.896 5.646 14.678 5.623 14.46 5.62 h -5 C 7.68 5.647 6.25 7.099 6.25 8.88 v 6 a 0.75 0.75 0 0 1 -1.5 0 v -6 C 4.757 6.72 6.22 4.835 8.31 4.29 a 3.73 3.73 0 0 1 7.38 0 C 15.952 4.469 16.076 4.792 16 5.1 z m -6.15 -1 h 4.22 a 2.23 2.23 0 0 0 -4.22 0 z"></path>
                  </svg>
                </div>
                <div>No personal items included</div>
              </div>

              <div className="paymentBaggageImageTextFlex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={"25px"}
                    width={"25px"}
                  >
                    <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                  </svg>
                </div>
                <div>
                  <div>1 cabin bag</div>
                  <div>25 x 35 x 55 cm · Max weight 7 kg</div>
                </div>
              </div>

              <div className="paymentBaggageImageTextFlex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={"25px"}
                    width={"25px"}
                  >
                    <path d="m 15 9.25 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 13 C 15.745 12.588 15.412 12.255 15 12.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 0 4.5 C 15.745 17.088 15.412 16.755 15 16.75 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 4 -12 v 15 c 0 1.243 -1.007 2.25 -2.25 2.25 h -1.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 6.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -15 C 4.25 4.257 5.257 3.25 6.5 3.25 h 1.75 v -2 C 8.25 0.56 8.81 0 9.5 0 h 5 c 0.69 0 1.25 0.56 1.25 1.25 v 2 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -10 -2.25 h 4.5 V 1.5 h -4.5 z m 8.5 2.25 C 18.245 5.088 17.912 4.755 17.5 4.75 h -11 C 6.088 4.755 5.755 5.088 5.75 5.5 v 15 c 0.005 0.412 0.338 0.745 0.75 0.75 h 11 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                  </svg>
                </div>
                <div>
                  <div>1 checked bag</div>
                  <div>Max weight 15 kg</div>
                </div>
              </div>

              <div
                className="paymentBaggageFromBoldText"
                style={{ marginTop: "30px" }}
              >
                Flight to Bhopal
              </div>
              <div className="paymentBaggageImageTextFlex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={"25px"}
                    width={"25px"}
                  >
                    <path d="m 1.5 23.25 A 0.75 0.75 0 0 1 1 22 L 22 1 a 0.75 0.75 0 0 1 1 1 L 2 23 c -0.128 0.146 -0.307 0.235 -0.5 0.25 z m 17.77 -2.87 V 9.88 a 0.75 0.75 0 0 0 -1.5 0 v 10.5 c -0.005 0.41 -0.34 0.74 -0.75 0.74 H 7 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 h 10 a 2.24 2.24 0 0 0 2.25 -2.24 z M 15 12.62 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 c 0.14 0.005 0.25 0.12 0.25 0.26 V 15 H 12.5 c -0.412 0.005 -0.745 0.338 -0.75 0.75 c 0 0.316 0.2 0.597 0.5 0.7 v 0.3 a 0.75 0.75 0 0 0 1.5 0 V 16.5 h 1.5 v 1.88 c -0.005 0.134 -0.116 0.24 -0.25 0.24 H 9 c -0.416 0.005 -0.75 0.344 -0.75 0.76 c 0.005 0.41 0.34 0.74 0.75 0.74 h 6 c 0.963 0 1.744 -0.777 1.75 -1.74 v -4 c 0 -0.968 -0.782 -1.754 -1.75 -1.76 z M 16 5.1 c -0.085 0.407 -0.482 0.67 -0.89 0.59 C 14.896 5.646 14.678 5.623 14.46 5.62 h -5 C 7.68 5.647 6.25 7.099 6.25 8.88 v 6 a 0.75 0.75 0 0 1 -1.5 0 v -6 C 4.757 6.72 6.22 4.835 8.31 4.29 a 3.73 3.73 0 0 1 7.38 0 C 15.952 4.469 16.076 4.792 16 5.1 z m -6.15 -1 h 4.22 a 2.23 2.23 0 0 0 -4.22 0 z"></path>
                  </svg>
                </div>
                <div>No personal items included</div>
              </div>

              <div className="paymentBaggageImageTextFlex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={"25px"}
                    width={"25px"}
                  >
                    <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                  </svg>
                </div>
                <div>
                  <div>1 cabin bag</div>
                  <div>25 x 35 x 55 cm · Max weight 7 kg</div>
                </div>
              </div>

              <div className="paymentBaggageImageTextFlex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={"25px"}
                    width={"25px"}
                  >
                    <path d="m 15 9.25 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 13 C 15.745 12.588 15.412 12.255 15 12.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 0 4.5 C 15.745 17.088 15.412 16.755 15 16.75 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 4 -12 v 15 c 0 1.243 -1.007 2.25 -2.25 2.25 h -1.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 6.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -15 C 4.25 4.257 5.257 3.25 6.5 3.25 h 1.75 v -2 C 8.25 0.56 8.81 0 9.5 0 h 5 c 0.69 0 1.25 0.56 1.25 1.25 v 2 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -10 -2.25 h 4.5 V 1.5 h -4.5 z m 8.5 2.25 C 18.245 5.088 17.912 4.755 17.5 4.75 h -11 C 6.088 4.755 5.755 5.088 5.75 5.5 v 15 c 0.005 0.412 0.338 0.745 0.75 0.75 h 11 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                  </svg>
                </div>
                <div>
                  <div>1 checked bag</div>
                  <div>Max weight 15 kg</div>
                </div>
              </div>

              <div className="paymentLightText">
                For more detailed baggage information and options, check airline
                baggage policies: IndiGo
              </div>
            </div>

            <div className="paymentFormContainer">
              <div className="formHeaderText">Your payment</div>
              <div className="formHeaderLightText">
                Simple, safe and secure.
              </div>

              <div className="paymentOptiontext">
                How would you like to pay?
              </div>
              <div className="payOptionsImage">
                <div>
                  <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/discover.svg" />
                </div>
                <div>
                  <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/mc.svg" />
                </div>
                <div>
                  <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/jcb.svg" />
                </div>
                <div>
                  <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg" />
                </div>
              </div>
              <div style={{ marginTop: "10px" }}>
                <form>
                  <div className="emailInputText">
                    Cardholder's Name{" "}
                    <span style={{ color: "red", marginTop: "10px" }}>*</span>
                  </div>
                  <div className="paymentInputBox">
                    <input
                      type="text"
                      placeholder="Enter cardholder's name"
                      required
                    />
                  </div>

                  <div className="emailInputText" style={{ marginTop: "20px" }}>
                    Card Number{" "}
                    <span style={{ color: "red", marginTop: "10px" }}>*</span>
                  </div>
                  <div className="paymentCardholderBox">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      height={"25px"}
                      width={"25px"}
                    >
                      <path d="M116 112H12c-6.627 0-12-5.373-12-12V28c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v72c0 6.627-5.373 12-12 12zM12 24a4 4 0 0 0-4 4v72a4 4 0 0 0 4 4h104a4 4 0 0 0 4-4V28a4 4 0 0 0-4-4zm50.67 49.33a4 4 0 0 0-4-4h-36a4 4 0 0 0 0 8h36a4 4 0 0 0 4-4zm-8 16a4 4 0 0 0-4-4h-28a4 4 0 0 0 0 8h28a4 4 0 0 0 4-4zm49.52-32.92h-23a5.88 5.88 0 0 1-6.09-5.63V38.55a5.88 5.88 0 0 1 6.09-5.63h23a5.88 5.88 0 0 1 6.09 5.63v12.23a5.88 5.88 0 0 1-6.09 5.63zm-21.14-8h19.23v-7.49H83.05zm21.14-7.49z"></path>
                    </svg>
                    <input
                      type="number"
                      placeholder="Enter card number"
                      required
                    />
                  </div>

                  <div className="expiryDateCvc">
                    <div className="paymentExpiryDate">
                      <div className="emailInputText">
                        Expiry Date <span style={{ color: "red" }}>*</span>
                      </div>
                      <div className="expiryDateInputBox">
                        <input type="text" placeholder="MM / YY" required />
                      </div>
                    </div>
                    <div className="paymentCvc">
                      <div className="emailInputText">
                        CVC <span style={{ color: "red" }}>*</span>
                      </div>
                      <div className="expiryDateInputBox">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          height={"25px"}
                          width={"25px"}
                        >
                          <path d="M22.5 12v6.75a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75V12zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v13.5A2.25 2.25 0 0 0 2.25 21h19.5A2.25 2.25 0 0 0 24 18.75V12zM.75 9h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm4.5 4.5h8.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5zm0 3h5.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5z"></path>
                        </svg>
                        <input type="text" required />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="formBottomText">
              By clicking "pay now" you agree with the terms and conditions and
              privacy policies of Booking.com, Gotogate International AB, IndiGo
              and with the fare rules.
            </div>
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
              <div className="feedbackContainerTopText">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 32"
                    height={"25px"}
                    width={"50px"}
                  >
                    <g fill="none">
                      <rect
                        width="80"
                        height="32.049"
                        fill="#004cb8"
                        rx="4"
                      ></rect>
                      <path
                        fill="#fff"
                        d="m44.9668352 5.5533056c.216944 0 .339024.090062.3661543.269157l.0058137.082203v6.00384c0 .598784.15488 1.081728.468224 1.446784.311552.365184.752384.546944 1.318784.546944.8360411 0 1.5222034-.3462224 2.0583844-1.0386671l.1210716-.1659409v-6.79296c0-.204512.088396-.320138.2661313-.345849l.0816447-.005511h2.201984c.203392 0 .318388.090062.343959.269157l.005481.082203v9.97056c0 .204512-.089572.318864-.267687.3442565l-.081753.0054395h-1.787008c-.2109806 0-.3651605-.0750446-.4590737-.2251337l-.0419183-.0812983-.26176-.635136c-.290944.26304-.542208.467328-.752256.612736-.210048.147072-.507904.282112-.893568.406656-.385664.12288-.81088.185216-1.275648.185216-1.220608 0-2.186496-.375552-2.8992-1.128448-.6602514-.6974537-1.0146749-1.6397022-1.0619382-2.8224411l-.0054538-.2772069v-6.3552c0-.204512.094864-.320138.283563-.345849l.086613-.005511zm12.803968-.35456c1.773184 0 3.117824.562432 4.033664 1.687424.140112.165088.140476.320866.0022925.4651045l-.0677005.0611035-1.1776 1.095552c-.173824.131456-.34944.108928-.523392-.065792-.624896-.657664-1.358336-.986496-2.201856-.986496-.521728 0-.940032.07616-1.253376.230144-.311552.15232-.468224.361728-.468224.624768 0 .306304.19968.559104.59904.756352.401152.195584 1.057152.375552 1.972992.536576 2.49984.422272 3.749632 1.5264 3.749632 3.309056 0 1.079936-.42176 1.934976-1.263616 2.5632-.843648.628224-1.874816.941568-3.095424.941568-1.265408 0-2.306944-.266624-3.128192-.799616-.821248-.53312-1.39968-1.208064-1.733632-2.026752-.088928-.192304-.049966-.338254.116886-.44128l.079338-.041536 1.656192-.744192c.218624-.102144.37184-.043264.457984.174848.175616.453376.480256.825472.91584 1.117952s.958976.437888 1.570176.437888c.507776 0 .919296-.095232 1.230848-.283776.313344-.190464.468352-.446592.468352-.768512 0-.365184-.203136-.655872-.609408-.875776-.408064-.219776-1.119104-.423936-2.136576-.612608-1.031168-.190336-1.84896-.558976-2.451584-1.107712-.604288-.546816-.9056-1.230464-.9056-2.049152 0-.977792.37888-1.756672 1.134592-2.332928.754048-.576384 1.764608-.865408 3.028352-.865408zm-36.68096 0c1.642496 0 2.928512.507136 3.858176 1.523072.929664 1.014144 1.394432 2.289664 1.394432 3.823104v.700928c0 .233728-.115328.35136-.347648.35136h-7.499392c.160128.671488.476928 1.21152.948608 1.621632.47168.408448 1.07264.612736 1.79904.612736.988288 0 1.742336-.408448 2.265728-1.227136.087808-.131456.225536-.15232.414848-.065664l1.874816.78912c.21696.072704.268544.204288.151552.394624-1.06048 1.79648-2.628864 2.694784-4.706944 2.694784-1.570048 0-2.902528-.526208-4.000896-1.576704-1.096704-1.052288-1.645952-2.397056-1.645952-4.03264 0-1.635456.545792-2.980224 1.635584-4.032512 1.089792-1.050624 2.375808-1.576704 3.858048-1.576704zm-12.376576-5.1987456c2.16 0 4.13952.7363072 5.660544 1.9553792.07296.0590464.118144.1424.125056.232704.010368.0937728-.017408.1840768-.076416.2570112-.388992.4688768-1.19808 1.4448384-1.59744 1.9241344-.059008.0729344-.14592.11808-.239616.1250304-.093824.0069504-.184064-.0243072-.253568-.0833536-.958464-.8127232-2.226048-1.3059072-3.61856-1.3059072-2.976256 0-5.389824 2.3757312-5.389824 5.1542272s2.413568 5.036032 5.389824 5.036032c1.156352 0 2.226048-.340352 3.10464-.92032v-2.250624h-2.54912c-.09024 0-.18048-.034688-.246528-.100736-.062464-.06592-.100736-.152832-.100736-.246528v-2.181248c0-.093696.038272-.180608.100736-.246528.066048-.062592.156288-.100736.246528-.100736h5.025152c.190976 0 .347264.156288.347264.347264v6.307328c0 .208384-.09024.402816-.25344.538368-1.524608 1.219072-3.51104 1.955328-5.674496 1.955328-4.8098688 0-8.7132672-3.646848-8.7132672-8.1376 0-4.4942592 3.9033984-8.2592256 8.7132672-8.2592256zm24.552448 5.1987456c1.220608 0 2.162304.332288 2.823424.996864.6138971.61710629.9427154 1.47006759.9865573 2.56011373l.0050587.25575827v6.793088c0 .2044-.08967.318738-.2677238.3441288l-.0817162.0054392h-2.200192c-.203392 0-.318486-.088788-.3440815-.2674788l-.0054865-.0820892v-6.026368c0-1.315328-.602496-1.972992-1.809408-1.972992-.406272 0-.814336.124672-1.220608.373888-.33856.20618667-.6125867.42801778-.82008.66556741l-.116496.14441659v6.815488c0 .2044-.094864.318738-.2846778.3441288l-.0871622.0054392h-2.179584c-.215376 0-.337162-.088788-.3642433-.2674788l-.0058047-.0820892v-9.970688c0-.2044.094864-.320012.2834773-.34572125l.0865707-.00551075h1.7888c.2109806 0 .3587657.08134531.4422269.24194015l.0363651.08689185.284032.6144c.929664-.818688 1.947136-1.227136 3.050752-1.227136zm7.523712.265216c.216832 0 .337526.090062.3643115.26907125l.0057365.08216075v9.970688c0 .204512-.09359.318766-.2829995.344134l-.0870485.005434h-2.179584c-.216944 0-.337652-.08869-.3644393-.267442l-.0057367-.082126v-9.970688c0-.2044.09359-.320012.2830852-.34572125l.0870908-.00551075zm-19.699584 2.211456c-.63872 0-1.174144.162688-1.602816.49152s-.736896.756352-.926208 1.282432h5.013248c-.101504-.49664-.383872-.917248-.848768-1.259904-.46656-.342656-1.01056-.514048-1.635456-.514048z"
                        transform="translate(9 7)"
                      ></path>
                      <path
                        fill="#febb02"
                        d="m37.6090112 2.1196288c0 .5691264.204288 1.058944.614656 1.4694272.410496.4084992.900224.6147328 1.469312.6147328s1.058816-.2062336 1.469312-.6147328c.408448-.4104832.614656-.9003008.614656-1.4694272s-.206208-1.0589312-.614656-1.4694272c-.410496-.4104832-.900224-.6147328-1.469312-.6147328s-1.058816.2042496-1.469312.6147328c-.410368.410496-.614656.9003008-.614656 1.4694272z"
                        transform="translate(9 7)"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span>Trip savings</span>
              </div>
              <div className="feedbackBoldText">
                Unlock Genius members-only deals
              </div>
              <div className="tellusText">
                Sign in to get 10% off or more on stays, plus other travel
                rewards.
              </div>
            </div>

            <div className="feedbackContainer">
              <div className="feedbackText">Give feedback</div>
              <div className="tellusText">
                Tell us how we're doing and what could be better
              </div>
            </div>
          </div>
        </div>

        <div className="flightCheckoutButtons">
          <button className="flightCheckoutBackButton">
            <i className="fa fa-angle-left" style={{ marginRight: "10px" }}></i>
            Back
          </button>
          <button className="flightPaymentNextButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={"20px"}
              width={"20px"}
              style={{ marginRight: "5px" }}
            >
              <path
                fill={"white"}
                d="M19.5 16.5v5.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 18.75 9H5.25A2.25 2.25 0 0 0 3 11.25v10.5A2.25 2.25 0 0 0 5.25 24h13.5A2.25 2.25 0 0 0 21 21.75V16.5zM7.5 9.75V6a4.5 4.5 0 0 1 9 0v3.75a.75.75 0 0 0 1.5 0V6A6 6 0 0 0 6 6v3.75a.75.75 0 0 0 1.5 0zM12 15a1.125 1.125 0 1 0 .004 0h-.006a.75.75 0 0 0 .004 1.5H12a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"
              ></path>
            </svg>
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
}
export default FlightPayment;
