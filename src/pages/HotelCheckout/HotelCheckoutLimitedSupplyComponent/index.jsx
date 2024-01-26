import "./hotelCheckoutLimitedSupplyComponent.css";

import { memo } from "react";
function HotelCheckoutLimitedSupplyComponent() {
  return (
    <div className="hotelCheckoutLimitedContainer">
      <div>
        <svg
          className="bk-icon -streamline-alarm"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="rgb(179, 7, 7)"
            d="M20.25 12.75a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0zm1.5 0C21.75 7.365 17.385 3 12 3s-9.75 4.365-9.75 9.75S6.615 22.5 12 22.5s9.75-4.365 9.75-9.75zM6.67 23.585l1.387-2.77a.75.75 0 1 0-1.342-.672L5.33 22.915a.75.75 0 1 0 1.342.671zM12 12H8.609a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5zm-.75-4.5v5.25a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.5 0zM1.969 4.336l3.75-3A.75.75 0 1 0 4.78.164l-3.75 3a.75.75 0 1 0 .938 1.172zM18.67 22.915l-1.386-2.772a.75.75 0 1 0-1.342.67l1.386 2.772a.75.75 0 1 0 1.342-.67zm4.297-19.75l-3.75-3a.75.75 0 0 0-.936 1.17l3.75 3a.75.75 0 1 0 .936-1.17z"
          ></path>
        </svg>
      </div>
      <div>
        <div className="limitedSupplyBoldText">
          Limited supply for your dates:
        </div>
        <div className="limitedSupplyLightText">
          65 hotels like this are already unavailable on our site
        </div>
      </div>
    </div>
  );
}
export default memo(HotelCheckoutLimitedSupplyComponent);
