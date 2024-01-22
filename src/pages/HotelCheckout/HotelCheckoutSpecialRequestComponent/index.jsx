import "./hotelCheckoutSpecialRequestComponent.css";
import { memo } from "react";
function HotelCheckoutSpecialRequestComponent() {
  return (
    <>
      <div className="specialRequestContainer">
        <div className="specialRequestBoldText">Special requests</div>
        <div className="specialRequestLightText">
          Special requests cannot be guaranteed – but the property will do its
          best to meet your needs. You can always make a special request after
          your booking is complete!
        </div>

        <div className="specialRequestInputBox">
          <div className="specialRequestInputBoxBoldText">
            Please write your requests in English or Hindi. (optional)
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(HotelCheckoutSpecialRequestComponent);
