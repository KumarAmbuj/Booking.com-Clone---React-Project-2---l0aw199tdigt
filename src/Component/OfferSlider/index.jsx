import "./offerSlider.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OfferSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  return (
    <div className="offerSliderContainer">
      <div className="offersText">Offers</div>
      <div className="promotionsDealsText">
        Promotions, deals and special offers for you
      </div>
      <div className="offerSliderCardsContainer">
        <div className="offerSliderCard">
          <div className="offerSliderCardLeft">
            <div className="offerSliderCardBoldText">
              Take your longest holiday yet
            </div>
            <div className="offerSliderCardLightText">
              Browse properties offering long-term stays, many at reduced
              monthly rates.
            </div>
            <div className="offerSliderCardButton">
              <button>Find a stay</button>
            </div>
          </div>
          <div className="offerSliderCardRight">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
              alt=""
            />
          </div>
        </div>
        <div className="offerSliderCard">
          <div className="offerSliderCardLeft">
            <div className="offerSliderCardBoldText">
              Fly away to your dream holiday
            </div>
            <div className="offerSliderCardLightText">
              Get inspired, compare and book flights with more flexibility
            </div>
            <div className="offerSliderCardButton">
              <button>Search for flights</button>
            </div>
          </div>
          <div className="offerSliderCardRight">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o="
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
              alt=""
            />
            <div className="SliderCardText">Hotels</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
              alt=""
            />
            <div className="SliderCardText">Hotels</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
              alt=""
            />
            <div className="SliderCardText">Hotels</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
              alt=""
            />
            <div className="SliderCardText">Hotels</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
              alt=""
            />
            <div className="SliderCardText">Hotels</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
              alt=""
            />
            <div className="SliderCardText">Hotels</div>
          </div> */}
    </div>
  );
}
export default OfferSlider;
