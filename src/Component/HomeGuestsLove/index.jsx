import "./homeGuestsLove.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeGuestLoveArray } from "../../Constant/constant";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
  var sliderRef = useRef();
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="stayAtYourTopContainer">
      <div className="stayAtYourTopBoldText">Home Guests Love</div>

      <div className="propertySlider">
        <div className="sliderLeft" onClick={goToPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"20px"}
            width={"20px"}
            data-rtl-flip="true"
          >
            <path d="M15.0871 19.2361C14.9677 19.2367 14.8495 19.2134 14.7392 19.1676C14.629 19.1219 14.5289 19.0546 14.4451 18.9696L8.38799 12.9125C8.26332 12.7891 8.16475 12.6418 8.09815 12.4795C8.03156 12.3172 7.99829 12.1431 8.00034 11.9676C7.99246 11.6171 8.12303 11.2776 8.36376 11.0227L14.4208 4.96566C14.5912 4.79552 14.8221 4.69995 15.0629 4.69995C15.3037 4.69995 15.5346 4.79552 15.7049 4.96566C15.7907 5.04918 15.8588 5.14902 15.9053 5.25929C15.9518 5.36957 15.9758 5.48803 15.9758 5.60771C15.9758 5.72739 15.9518 5.84586 15.9053 5.95613C15.8588 6.0664 15.7907 6.16624 15.7049 6.24976L10.0113 11.9676L15.7292 17.6855C15.8149 17.769 15.883 17.8689 15.9295 17.9792C15.976 18.0894 16 18.2079 16 18.3276C16 18.4473 15.976 18.5657 15.9295 18.676C15.883 18.7863 15.8149 18.8861 15.7292 18.9696C15.6457 19.0551 15.5458 19.1228 15.4354 19.1686C15.3251 19.2144 15.2066 19.2374 15.0871 19.2361Z"></path>
          </svg>
        </div>
        <div className="sliderRight" onClick={goToNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-rtl-flip="true"
            height={"20px"}
            width={"20px"}
          >
            <path d="M8.91289 19.2361C9.03226 19.2367 9.15054 19.2134 9.2608 19.1676C9.37105 19.1219 9.47105 19.0546 9.55493 18.9696L15.612 12.9125C15.7367 12.7891 15.8353 12.6418 15.9018 12.4795C15.9684 12.3172 16.0017 12.1431 15.9997 11.9676C16.0075 11.6171 15.877 11.2776 15.6362 11.0227L9.57916 4.96566C9.40881 4.79552 9.17788 4.69995 8.93711 4.69995C8.69634 4.69995 8.46542 4.79552 8.29506 4.96566C8.20935 5.04918 8.14122 5.14902 8.09471 5.25929C8.04819 5.36957 8.02423 5.48803 8.02423 5.60771C8.02423 5.72739 8.04819 5.84586 8.09471 5.95613C8.14122 6.0664 8.20935 6.16624 8.29506 6.24976L13.9887 11.9676L8.27084 17.6855C8.18512 17.769 8.117 17.8689 8.07048 17.9792C8.02396 18.0894 8 18.2079 8 18.3276C8 18.4473 8.02396 18.5657 8.07048 18.676C8.117 18.7863 8.18512 18.8861 8.27084 18.9696C8.3543 19.0551 8.45423 19.1228 8.56458 19.1686C8.67493 19.2144 8.79341 19.2374 8.91289 19.2361Z"></path>
          </svg>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {HomeGuestLoveArray.map((val, index) => {
            return (
              <div className="stayAtYourTopSliderCard" key={index}>
                <Link to={`/hotel-list/${val.location}`}>
                  <div>
                    <img src={val.image} alt="" />
                    <div className="stayAtYourTopSliderCardBottom">
                      <div className="stayAtYourTopSliderCardBoldText">
                        {val.name}
                      </div>
                      <div className="stayAtYourTopSliderCardLightText">
                        {val.text}
                      </div>
                      <div className="stayAtYourTopSliderCardBottomButtonAndText">
                        <button>{val.rating}</button>
                        <span>{val.reviews}</span>
                      </div>

                      <div className="startingPrice">
                        <span className="startingPriceText">
                          Starting price
                        </span>
                        <span className="startingPriceAmount">
                          ₹ {val.startingPrice}
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </Link>
              </div>
            );
          })}

          {/* <div className="stayAtYourTopSliderCard">
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
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default HomeGuestsLove;
