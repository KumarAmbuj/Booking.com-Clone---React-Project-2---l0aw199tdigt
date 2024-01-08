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
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="offerSliderContainer">
      <div className="offersText">Offers</div>
      <div className="promotionsDealsText">
        Promotions, deals and special offers for you
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div className="bookingSliderCard">
            <div className="sliderText">
              <siv className="sliderBoldText">
                Take your longest holiday yet
              </siv>
            </div>
            <div className="sliderImage">
              <img
                src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
                alt=""
              />
            </div>
          </div>
          <div className="bookingSliderCard">
            <div className="sliderText">text</div>
            <div className="sliderImage">
              <img
                src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
                alt=""
              />
            </div>
          </div>
          {/* <div className="bookingSliderCard">
            <div className="sliderText">text</div>
            <div className="sliderImage">
             
              <img
                src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
                alt=""
              />
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}
export default OfferSlider;
