import "./hotelPaymentBottomComponent.css";
import { memo } from "react";
function HotelPaymentBottomComponent() {
  return (
    <>
      <div className="HotelPaymentBottomContainer">
        <div className="HotelPaymentCheckboxTextFlex">
          <input type="checkbox" />{" "}
          <label>
            Yes, I want to get marketing emails from Booking.com, including
            promotions, rewards, travel experiences and information about
            Booking.com’s products and services.
          </label>
        </div>
        <div className="HotelPaymentCheckboxTextFlex">
          <input type="checkbox" />{" "}
          <label>
            Yes, I want to get marketing emails from Booking.com, including
            promotions, rewards, travel experiences and information about
            Booking.com Transport Limited’s products and services.
          </label>
        </div>
        <div className="hotelPaymentSmallText">
          You can unsubscribe at any time. View our{" "}
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              fontWeight: "500",
            }}
          >
            privacy policy
          </span>
          .
        </div>
        <div className="hotelPaymentBottomText">
          Your booking is with Hotel Comfort Park - Opposite Sri Ramachandra
          Medical College Porur directly and by completing this booking you
          agree to the{" "}
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              fontWeight: "700",
            }}
          >
            booking conditions
          </span>
          ,{" "}
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              fontWeight: "700",
            }}
          >
            general terms
          </span>
          , and{" "}
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              fontWeight: "700",
            }}
          >
            privacy policy
          </span>
          .
        </div>
      </div>
    </>
  );
}
export default memo(HotelPaymentBottomComponent);
