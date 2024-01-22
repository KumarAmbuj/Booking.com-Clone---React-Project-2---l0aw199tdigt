import "./hotelCheckoutAddToYourStayComponent.css";
import { memo } from "react";
function HotelCheckoutAddToYourStayComponent() {
  return (
    <>
      <div className="AddToYourStayContainer">
        <div className="addToYourStayBoldText">Add to your stay</div>
        <div className="addToYourStayFlexBox">
          <div className="addToYourStayCheckbox">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <div>I'm interested in requesting an airport shuttle</div>
              <div style={{ fontSize: "13px" }}>
                We’ll tell your accommodation that you’re interested so they can
                provide details and costs.
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              height={"36px"}
              width={"36px"}
            >
              <path d="M108.42 55.84H44.26a9 9 0 0 0-8.94 8.94v20.67H19.58a9 9 0 0 0-8.93 8.94v14.8a9 9 0 0 0 8.93 8.94h6.47c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h22.8c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h1.53c7.658-.006 13.864-6.212 13.87-13.87V64.78a9 9 0 0 0-8.93-8.94zm.93 8.94v20.67H92.68V63.84h15.74a.94.94 0 0 1 .93.94zM68 85.45V63.84h16.68v21.61zM44.26 63.84H60v21.61H43.32V64.78c0-.52.42-.94.94-.94zM39.32 120a5.87 5.87 0 1 1 5.87-5.87 5.88 5.88 0 0 1-5.87 5.87zm49.36 0a5.87 5.87 0 1 1 5.87-5.87 5.87 5.87 0 0 1-5.87 5.87zm14.8-9.87H102c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291H52.6c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291h-6.47a.94.94 0 0 1-.93-.94v-14.8a.94.94 0 0 1 .93-.94h89.77v10.81a5.87 5.87 0 0 1-5.87 5.87zm-92.29-82a4 4 0 0 1 5.467-1.451l.003.001 6.69 3.88 12.33-6-13.79-8a4 4 0 0 1 4-6.91l18.4 10.73 13.07-6.4a4.003 4.003 0 1 1 3.52 7.19l-36 17.6a4 4 0 0 1-3.76-.13l-8.54-5a4 4 0 0 1-1.39-5.52z"></path>
            </svg>
          </div>
        </div>

        <div className="addToYourStayFlexBox">
          <div className="addToYourStayCheckbox">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <div>I’ll need a flight for my trip</div>
              <div style={{ fontSize: "13px" }}>
                Skip the stress of searching - we’ll add flight options
                (provided by Booking.com) to your destination in your booking
                confirmation.
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={"36px"}
              width={"36px"}
            >
              <path d="M20.505 7.5l-15.266.022.672.415-1.1-2.2a.75.75 0 0 0-.638-.414l-2.293-.1C.82 5.228-.003 6.06.003 7.083c.002.243.051.484.146.709l2.072 4.68a2.947 2.947 0 0 0 2.701 1.778h4.043l-.676-1.075-2.484 5.168A1.831 1.831 0 0 0 7.449 21h2.099a1.85 1.85 0 0 0 1.419-.664l5.165-6.363-.582.277h4.956c1.82.09 3.399-1.341 3.49-3.198l.004-.134a3.426 3.426 0 0 0-3.44-3.419l-.074.001zm.02 1.5h.042a1.924 1.924 0 0 1 1.933 1.914l-.002.065a1.866 1.866 0 0 1-1.955 1.772l-4.993-.001a.75.75 0 0 0-.582.277l-5.16 6.355a.346.346 0 0 1-.26.118h-2.1a.336.336 0 0 1-.3-.49l2.493-5.185a.75.75 0 0 0-.676-1.075H4.924a1.45 1.45 0 0 1-1.328-.878l-2.07-4.676a.35.35 0 0 1 .326-.474l2.255.1-.638-.415 1.1 2.2a.75.75 0 0 0 .672.415L20.507 9zM16.323 7.76l-2.992-4.02A1.851 1.851 0 0 0 11.85 3H9.783a1.85 1.85 0 0 0-1.654 2.672l1.439 2.91a.75.75 0 0 0 1.344-.664L9.472 5.007a.351.351 0 0 1 .312-.507h2.066a.35.35 0 0 1 .279.14l2.99 4.017a.75.75 0 1 0 1.203-.896z"></path>
            </svg>
          </div>
        </div>

        <div className="addToYourStayFlexBox">
          <div className="addToYourStayCheckbox">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <div>I'm interested in renting a car</div>
              <div style={{ fontSize: "13px" }}>
                Make the most out of your trip and check car hire options in
                your booking confirmation.
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={"36px"}
              width={"36px"}
            >
              <path d="M21.75 17.75A2.25 2.25 0 0 0 24 15.5v-2.251c0-.679-.27-1.33-.75-1.81l-2.47-2.47a.75.75 0 0 0-.53-.219H3.75a.75.75 0 0 0-.53.22L.75 11.44c-.48.48-.75 1.13-.75 1.809V15.5a2.25 2.25 0 0 0 2.25 2.25h19.5zm0-1.5H2.25a.75.75 0 0 1-.75-.75v-2.251c0-.28.112-.55.31-.749l2.47-2.47-.53.22h16.5l-.53-.22 2.47 2.47c.198.199.31.468.31.75v2.25a.75.75 0 0 1-.75.75zm-20.838-3h3.717a.75.75 0 0 1 .53.22l1.06 1.06a.75.75 0 0 0 1.061-1.06l-1.06-1.061a2.25 2.25 0 0 0-1.59-.659H.911a.75.75 0 0 0 0 1.5zm22.176-1.5h-3.717a2.25 2.25 0 0 0-1.59.659l-1.061 1.06a.75.75 0 1 0 1.06 1.061l1.061-1.06a.75.75 0 0 1 .53-.22h3.717a.75.75 0 0 0 0-1.5zM4.452 9.763l1.7-4.54c.22-.586.78-.974 1.406-.973h8.883a1.5 1.5 0 0 1 1.404.973l1.7 4.54.702-1.013H3.75l.702 1.013zm-1.404-.526a.75.75 0 0 0 .702 1.013h16.497a.75.75 0 0 0 .702-1.013l-1.7-4.54a3 3 0 0 0-2.808-1.947H7.559a2.999 2.999 0 0 0-2.811 1.947l-1.7 4.54zM4.28 8.97l-1.5-1.5a.75.75 0 0 0-.53-.22H.75a.75.75 0 0 0 0 1.5h1.5l-.53-.22 1.5 1.5a.75.75 0 1 0 1.06-1.06zm16.5 1.06l1.5-1.5-.53.22h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0-.53.22l-1.5 1.5a.75.75 0 1 0 1.06 1.06zM1.5 17v1.5a2.25 2.25 0 0 0 4.5 0V17a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75zM3 17l-.75.75h3L4.5 17v1.5a.75.75 0 0 1-1.5 0V17zm18 0v1.5a.75.75 0 0 1-1.5 0V17l-.75.75h3L21 17zm1.5 0a.75.75 0 0 0-.75-.75h-3A.75.75 0 0 0 18 17v1.5a2.25 2.25 0 0 0 4.5 0V17z"></path>
            </svg>
          </div>
        </div>

        <div className="addToYourStayFlexBox">
          <div className="addToYourStayCheckbox">
            <div style={{ flex: "1" }}>
              <input type="checkbox" />
            </div>
            <div>
              <div>Want to book a taxi or shuttle ride in advance?</div>
              <div style={{ fontSize: "13px" }}>
                Avoid surprises - get from the airport to your accommodation
                without a hitch. We'll add taxi options to your booking
                confirmation.
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={"36px"}
              width={"36px"}
            >
              <path d="M21.75 15.5V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-16.5 0V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM3 8.75h3a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zm6.75 6.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 0 1.5 0v-6a2.25 2.25 0 0 0-4.5 0v6a.75.75 0 0 0 1.5 0zM9 13.25h3a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm5.304-4.971l3 7.5a.75.75 0 0 0 1.392-.557l-3-7.5a.75.75 0 0 0-1.392.557zm3-.558l-3 7.5a.75.75 0 0 0 1.392.557l3-7.5a.75.75 0 0 0-1.392-.557zM.75 5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 15h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(HotelCheckoutAddToYourStayComponent);
