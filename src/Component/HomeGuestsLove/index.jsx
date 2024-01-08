import "./homeGuestsLove.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeGuestsLove() {
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
    <div className="stayAtYourTopContainer">
      <div className="stayAtYourTopBoldText">Home Guests Love</div>

      <div className="propertySlider">
        <Slider {...settings}>
          <div className="stayAtYourTopSliderCard">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o="
              alt=""
            />
            <div className="stayAtYourTopSliderCardBottom">
              <div className="stayAtYourTopSliderCardBoldText">
                Harbour View
              </div>
              <div className="stayAtYourTopSliderCardLightText">
                Germany, Newuripin
              </div>
              <div className="stayAtYourTopSliderCardBottomButtonAndText">
                <button>9.0</button>
                <span>Fabulous. 297 reviews</span>
              </div>

              <div className="startingPrice">
                <span className="startingPriceText">Starting price</span>
                <span className="startingPriceAmount">₹ 17,002</span>
              </div>
            </div>
          </div>
          <div className="stayAtYourTopSliderCard">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o="
              alt=""
            />
            <div className="stayAtYourTopSliderCardBottom">
              <div className="stayAtYourTopSliderCardBoldText">
                Harbour View
              </div>
              <div className="stayAtYourTopSliderCardLightText">
                Germany, Newuripin
              </div>
              <div className="stayAtYourTopSliderCardBottomButtonAndText">
                <button>9.0</button>
                <span>Fabulous. 297 reviews</span>
              </div>

              <div className="startingPrice">
                <span className="startingPriceText">Starting price</span>
                <span className="startingPriceAmount">₹ 17,002</span>
              </div>
            </div>
          </div>
          <div className="stayAtYourTopSliderCard">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o="
              alt=""
            />
            <div className="stayAtYourTopSliderCardBottom">
              <div className="stayAtYourTopSliderCardBoldText">
                Harbour View
              </div>
              <div className="stayAtYourTopSliderCardLightText">
                Germany, Newuripin
              </div>
              <div className="stayAtYourTopSliderCardBottomButtonAndText">
                <button>9.0</button>
                <span>Fabulous. 297 reviews</span>
              </div>

              <div className="startingPrice">
                <span className="startingPriceText">Starting price</span>
                <span className="startingPriceAmount">₹ 17,002</span>
              </div>
            </div>
          </div>
          <div className="stayAtYourTopSliderCard">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o="
              alt=""
            />
            <div className="stayAtYourTopSliderCardBottom">
              <div className="stayAtYourTopSliderCardBoldText">
                Harbour View
              </div>
              <div className="stayAtYourTopSliderCardLightText">
                Germany, Newuripin
              </div>
              <div className="stayAtYourTopSliderCardBottomButtonAndText">
                <button>9.0</button>
                <span>Fabulous. 297 reviews</span>
              </div>

              <div className="startingPrice">
                <span className="startingPriceText">Starting price</span>
                <span className="startingPriceAmount">₹ 17,002</span>
              </div>
            </div>
          </div>
          <div className="stayAtYourTopSliderCard">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o="
              alt=""
            />
            <div className="stayAtYourTopSliderCardBottom">
              <div className="stayAtYourTopSliderCardBoldText">
                Harbour View
              </div>
              <div className="stayAtYourTopSliderCardLightText">
                Germany, Newuripin
              </div>
              <div className="stayAtYourTopSliderCardBottomButtonAndText">
                <button>9.0</button>
                <span>Fabulous. 297 reviews</span>
              </div>

              <div className="startingPrice">
                <span className="startingPriceText">Starting price</span>
                <span className="startingPriceAmount">₹ 17,002</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HomeGuestsLove;
