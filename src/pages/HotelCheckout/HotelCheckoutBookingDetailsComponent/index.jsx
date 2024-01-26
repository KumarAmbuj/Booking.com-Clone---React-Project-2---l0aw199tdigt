import { memo } from "react";
import "./hotelCheckoutBookingDetailsComponent.css";

import { AuthContext } from "../../../authentication/AuthContext";
import { useContext } from "react";
import { monthNames, dayNames } from "../../../Constant/constant";

function HotelCheckoutBookingDetailsComponent(props) {
  const { date } = useContext(AuthContext);
  const { data, index } = props;
  return (
    <>
      <div className="hotelCheckoutBookingDetailsContainer">
        <div className="yourBookingText">Your booking details</div>
        <div className="checkinCheckoutFlex">
          <div className="chekcinBox">
            <div className="checkinText">Check-in</div>
            <div className="checkinDateText">{`${
              dayNames[date.getDay()]
            } ${date.getDate()} ${
              monthNames[date.getMonth()]
            } ${date.getFullYear()}`}</div>
            <div className="checkinTimeText">12:00 – 12:30</div>
          </div>
          <div className="checkoutBox">
            <div className="checkinText">Check-out</div>
            <div className="checkinDateText">{`${
              dayNames[date.getDay()]
            } ${date.getDate()} ${
              monthNames[date.getMonth()]
            } ${date.getFullYear()}`}</div>
            <div className="checkinTimeText">12:00 – 12:30</div>
          </div>
        </div>
        <div className="totalStayText">Total length of stay:</div>
        <div className="oneNightText">1 night</div>
        <div className="youSelectedText">You selected</div>
        <div className="roomNumber">{data.rooms[index].bedDetail}</div>
      </div>
    </>
  );
}
export default memo(HotelCheckoutBookingDetailsComponent);
