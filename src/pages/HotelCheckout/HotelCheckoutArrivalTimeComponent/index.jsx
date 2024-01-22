import "./hotelCheckoutArrivalTimeComponent.css";
import { memo } from "react";

function HotelCheckoutArrivalTimeCoponent() {
  return (
    <>
      <div className="arrivalTimeContainer">
        <div className="arrivalTimeBoldText">Your arrival time</div>
        <div className="arrivalTimeFlex">
          <span>
            <svg
              class="bk-icon -streamline-checkmark_selected"
              fill="#008009"
              height="24"
              width="24"
              viewBox="0 0 128 128"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
            </svg>
          </span>
          <span>
            Your rooms will be ready for check-in between 12:00 and 12:30
          </span>
        </div>
        <div className="arrivalTimeFlex">
          <span>
            <svg
              class="bk-icon -streamline-front_desk"
              fill="#008009"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"></path>
            </svg>
          </span>
          <span>24-hour front desk – Help whenever you need it!</span>
        </div>

        <div className="hotelCheckoutInputBox">
          <div className="hotelCheckoutTypeHeader">
            Add your estimated arrival time{" "}
          </div>
          <div style={{ marginTop: "3px" }}>
            <input type="text" />
          </div>
          <div className="emailBottomText">Time is for Chennai time zone</div>
        </div>
      </div>
    </>
  );
}
export default memo(HotelCheckoutArrivalTimeCoponent);
