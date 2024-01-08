import "./propertySlider.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PropertySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="propertySliderContainer">
      <div className="propertySliderText">Browse by property type</div>
      <div className="propertySlider">
        <Slider {...settings}>
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
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default PropertySlider;
