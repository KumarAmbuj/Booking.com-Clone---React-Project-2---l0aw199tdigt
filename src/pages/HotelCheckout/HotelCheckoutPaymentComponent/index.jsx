import "./hotelCheckoutPaymentComponent.css";

import { memo } from "react";
function HotelCheckoutPaymentSummaryComponent() {
  return (
    <div className="hotelCheckoutPaymentContainer">
      <div className="paymentSchedule">Your payment schedule</div>
      <div className="paymentScheduleLightText">
        You will be charged a prepayment of the total price at any time.
      </div>
    </div>
  );
}
export default memo(HotelCheckoutPaymentSummaryComponent);
