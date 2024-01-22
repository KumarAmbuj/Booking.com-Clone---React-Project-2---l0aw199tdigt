import "./hotelCheckoutGoodToKnowComponent.css";
import { memo } from "react";
function HotelCheckoutGoodToKnowComponent() {
  return (
    <>
      <div className="goodToKnowBox">
        <div className="goodToKnowBoldText">Good to know:</div>
        <div className="goodToKnowLightText">
          <span>
            <svg
              class="bk-icon -streamline-credit_card_crossed"
              fill="#008009"
              height="20px"
              role="presentation"
              width="20px"
              viewBox="0 0 128 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M88.72 108a4 4 0 0 1-4 4H12c-6.627 0-12-5.373-12-12V28a4 4 0 0 1 8 0v12h12.11a4 4 0 0 1 0 8H8v52a4 4 0 0 0 4 4h72.72a4 4 0 0 1 4 4zM116 16H43.1a4 4 0 0 0 0 8H116a4 4 0 0 1 4 4v12H66.86a4 4 0 0 0 0 8H120v52a4 4 0 0 0 8 0V28c0-6.627-5.373-12-12-12zM44.3 64H28a4 4 0 0 0 0 8h16.3a4 4 0 0 0 0-8zM24 84a4 4 0 0 0 4 4h29.88a4 4 0 0 0 0-8H28a4 4 0 0 0-4 4zM6.83 1.17a4.002 4.002 0 1 0-5.66 5.66l120 120a4.002 4.002 0 1 0 5.66-5.66z"></path>
            </svg>
          </span>
          <span>No credit card needed!</span>
        </div>
      </div>
    </>
  );
}
export default memo(HotelCheckoutGoodToKnowComponent);
