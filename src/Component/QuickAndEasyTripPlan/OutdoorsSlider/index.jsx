import "./outdoorSlider.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OutdoorsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="beachSliderContainer">
      <div className="propertySlider">
        <Slider {...settings}>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
          <div className="SliderCard">
            <img
              src="https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt=""
            />
            <div className="sliderCardDestination">North Goa</div>
            <div className="sliderCardProperty">761 property</div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default OutdoorsSlider;
