import "./hotelPaymentTopComponent.css";
import { memo } from "react";
function HotelPaymentTopComponent() {
  return (
    <>
      <div className="NoPaymentContainer">
        <div>
          <div className="NoPaymentBoldText">No payment details required</div>
          <div className="NoPaymentLightText">
            Your payment will be handled by Hotel Comfort Park - Opposite Sri
            Ramachandra Medical College Porur, so you don’t need to enter any
            payment details for this booking.
          </div>
        </div>
        <div>
          <img src="https://cf.bstatic.com/static/img/book/bp-no-payment-last-minute/91d509cff564c4644361f56c4b4b00d1cc9b4609.png" />
        </div>
      </div>
    </>
  );
}
export default memo(HotelPaymentTopComponent);
