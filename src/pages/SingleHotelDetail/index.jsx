import Navbar from "../../Component/Navbar";
import HotelFacility from "./HotelFacility";
import "./singleHotelDetail.css";
import EmailAddress from "../../Component/Footer/EmailAddress";
function SingleHotelDetail() {
  return (
    <>
      <Navbar />
      <div className="singleHotelDetailContainer">
        <div className="singleHotelDetailTopHeader">
          {
            "Home > Hotels > All B&Bs > India > Maharashtra > Lonavala Hillside Resort Lonavala- Pawna - Mountain View (Bed and breakfast) (India) deals"
          }
        </div>
        {/* <div className="AvailabilitySection">
        <div className="AvailabilityHeader">Availability</div>
        <div className="AvailabilityContainer">
          <div className="roomType">
            <div className="roomTypeHeader">Room type</div>
            <div className="AvailabilityHotelNameAndBedCount">
              <div className="AvailabilityHotelName">
                Double Room with Mountain View
              </div>
              <div className="AvailabilityHotelBedCount">1 double bed</div>
            </div>

            <div className="AvailabilityHotelNameAndBedCount">
              <div className="AvailabilityHotelName">
                Double Room with Mountain View
              </div>
              <div className="AvailabilityHotelBedCount">1 double bed</div>
            </div>

            <div className="AvailabilityHotelNameAndBedCount">
              <div className="AvailabilityHotelName">
                Double Room with Mountain View
              </div>
              <div className="AvailabilityHotelBedCount">1 double bed</div>
            </div>

            <div className="AvailabilityHotelNameAndBedCount">
              <div className="AvailabilityHotelName">
                Double Room with Mountain View
              </div>
              <div className="AvailabilityHotelBedCount">1 double bed</div>
            </div>

            <div className="AvailabilityHotelNameAndBedCount">
              <div className="AvailabilityHotelName">
                Double Room with Mountain View
              </div>
              <div className="AvailabilityHotelBedCount">1 double bed</div>
            </div>
          </div>
          <div className="numberOfGuests">
            <div className="numberOfGuestsHeader">Number of guests</div>

            <div className="guestBox">
              <i class="fa fa-user" aria-hidden="true"></i> x 4 +{" "}
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>

            <div className="guestBox">
              <i class="fa fa-user" aria-hidden="true"></i> x 4 +{" "}
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>

            <div className="guestBox">
              <i class="fa fa-user" aria-hidden="true"></i> x 4 +{" "}
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>

            <div className="guestBox">
              <i class="fa fa-user" aria-hidden="true"></i> x 4 +{" "}
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>

            <div className="guestBox">
              <i class="fa fa-user" aria-hidden="true"></i> x 4 +{" "}
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
          </div>

          <div className="availabilityPrice">
            <div className="availabilityPriceHeader"></div>
            <div className="availabilityButton">
              <button>Show prices</button>
            </div>
            <div className="availabilityButton">
              <button>Show prices</button>
            </div>
            <div className="availabilityButton">
              <button>Show prices</button>
            </div>
            <div className="availabilityButton">
              <button>Show prices</button>
            </div>
            <div className="availabilityButton">
              <button>Show prices</button>
            </div>
          </div>
        </div>
      </div> */}

        {/* {facilities} */}
        <HotelFacility />
      </div>
      <EmailAddress />
    </>
  );
}
export default SingleHotelDetail;
