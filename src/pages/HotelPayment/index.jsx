import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";
import "./hotelPayment.css";
import { memo, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import HotelCheckoutBookingDetailsComponent from "../HotelCheckout/HotelCheckoutBookingDetailsComponent";

import HotelCheckoutLeftNameComponent from "../HotelCheckout/HotelCheckoutLeftNameComponent";
import HotelCheckoutLimitedSupplyComponent from "../HotelCheckout/HotelCheckoutLimitedSupplyComponent";

import HotelCheckoutPaymentComponent from "../HotelCheckout/HotelCheckoutPaymentComponent";
import HotelCheckoutPriceComponent from "../HotelCheckout/HotelCheckoutPriceComponent";

import HotelPaymentTopComponent from "./HotelPaymentTopComponent";
import HotelPaymentBottomComponent from "./HotelPaymentBottomComponent";
import { AuthContext } from "../../authentication/AuthContext";

function HotelPayment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { date } = useContext(AuthContext);
  let newDate = new Date(date);
  //console.log(newDate.toISOString());
  const token = localStorage.getItem("booking");
  //console.log(token);
  //console.log(state);
  //console.log(date);
  const { hotelDetail, index } = state;
  //console.log(hotelDetail);
  async function completeBooking() {
    const data = {
      bookingType: "hotel",
      bookingDetails: {
        hotelId: hotelDetail._id,
        startDate: newDate.toISOString(),
        endDate: newDate.toISOString(),
      },
    };

    try {
      //setIsLoader(true);
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/booking`,
        {
          method: "POST",
          headers: {
            projectId: "0f6ipegajht2",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      let resultResponse = await result.json();
      if (resultResponse.status == "success") {
        navigate("/booking-confirm",{state:{id:resultResponse.booking._id}});
      }
      //console.log("hwyyy", resultResponse);
      //console.log(resultResponse);
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      //navigate("/signin");
    } finally {
      //setIsLoader(false);
    }
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
                <i className="fa fa-check"></i>
              </div>
              <div className="checkAndPayText" style={{ color: "black" }}>
                Your details
              </div>
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
                3
              </div>
              <div className="checkAndPayText" style={{ color: "black" }}>
                Final step
              </div>
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
            <HotelPaymentTopComponent />
            <HotelPaymentBottomComponent />

            <div className="hotelCheckBottomButtons">
              <button
                className="priceMatchButton"
                style={{ border: "1px solid blue", borderRadius: "5px" }}
              >
                Check your booking
              </button>
              <button className="checkoutNextButton" onClick={completeBooking}>
                <span>
                  <svg
                    class="bk-icon -streamline-lock_closed"
                    height="24"
                    role="presentation"
                    width="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    style={{ marginRight: "8px" }}
                  >
                    <path
                      fill="white"
                      d="M19.5 16.5v5.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 18.75 9H5.25A2.25 2.25 0 0 0 3 11.25v10.5A2.25 2.25 0 0 0 5.25 24h13.5A2.25 2.25 0 0 0 21 21.75V16.5zM7.5 9.75V6a4.5 4.5 0 0 1 9 0v3.75a.75.75 0 0 0 1.5 0V6A6 6 0 0 0 6 6v3.75a.75.75 0 0 0 1.5 0zM12 15a1.125 1.125 0 1 0 .004 0h-.006a.75.75 0 0 0 .004 1.5H12a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"
                    ></path>
                  </svg>
                </span>
                Complete booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(HotelPayment);
