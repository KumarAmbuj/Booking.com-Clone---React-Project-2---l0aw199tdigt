import "./singleHotelComponent.css";
import tempsvg from "../../../assets/svg/temp.svg";
import Temp from "../../../Component/svg/temp";
import Navbar from "../../../Component/Navbar";

function SingleHotelComponent() {
  const arr = [1, 2, 3, 4];
  return (
    <>
      
      <div className="singleHotelComponentContainer">
        <div className="hotelComponentImage">
          <div className="heartIcon">
            <img src="https://images.bewakoof.com/web/Wishlist.svg" />
          </div>
          <img src="https://cf.bstatic.com/xdata/images/hotel/square200/400373537.webp?k=5536c8ce1af135ff5a249c81048b2d1fb198f75e8ecf30b126f0bd16aa6db0d8&o=" />
        </div>

        <div className="hotelComponentText">
          <div className="hotelComponentHeader">
            Mizzile Exotica Lonavala{" "}
            {arr.map((val) => {
              return (
                <svg
                  style={{
                    height: "15px",
                    width: "15px",
                    color: "yellow",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 112 128"
                >
                  <path d="M96 8H16A16 16 0 0 0 0 24v96h96a16 16 0 0 0 16-16V24A16 16 0 0 0 96 8zM56 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path>
                </svg>
              );
            })}
          </div>
          <div className="showOnMap">
            <span>Lonavala</span>
            <span>Show on map</span>
            <span
              style={{
                color: "black",
                fontWeight: "400",
                textDecoration: "none",
              }}
            >
              6.6 km from centre
            </span>
          </div>
          <div className="hotelComponentDescription">
            Situated in Lonavala and only 13 km from Lonavala Railway Station,
            Mizzle Exotica Lonavala offers accommodation with mountain views,
            free WiFi and free private parking.
          </div>
        </div>

        <div className="hotelComponentRating">
          <div className="hotelComponentRatingTextAndButton">
            <div className="hotelComponentRatingText">
              <div className="hotelComponentRatingBoldText">Very Good</div>
              <div className="hotelComponentRatingLightText">476 reviews</div>
            </div>
            <div className="hotelComponentRatingButton">
              <button>9.1</button>
            </div>
          </div>
          <div className="hotelComponentRatingBottomButton">
            <button>Show prices</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleHotelComponent;
