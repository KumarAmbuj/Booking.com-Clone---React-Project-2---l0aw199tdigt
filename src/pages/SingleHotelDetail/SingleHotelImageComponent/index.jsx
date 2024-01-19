import { useState } from "react";
import "./singleHotelImageComponent.css";
function SingleHotelImageComponent(props) {
  const [buttonActive, setButtonActive] = useState(1);
  function handleClick(val) {
    setButtonActive(val);
  }
  return (
    <div className="singleHotelImageContainer">
      <div className="singleHotelTopButtons">
        <button
          onClick={() => {
            handleClick(1);
          }}
          id={buttonActive === 1 ? "activeType" : ""}
        >
          Overview
        </button>
        <button
          onClick={() => {
            handleClick(2);
          }}
          id={buttonActive === 2 ? "activeType" : ""}
        >
          Info & prices
        </button>
        <button
          onClick={() => {
            handleClick(3);
          }}
          id={buttonActive === 3 ? "activeType" : ""}
        >
          Facilities
        </button>
        <button
          onClick={() => {
            handleClick(4);
          }}
          id={buttonActive === 4 ? "activeType" : ""}
        >
          House rules
        </button>
        <button
          onClick={() => {
            handleClick(5);
          }}
          id={buttonActive === 5 ? "activeType" : ""}
        >
          House rules
        </button>
      </div>

      <div className="singleHotelHeaderTextAndButton">
        <div className="singleHotelHeaderText">
          <div className="singleHotelStarIcon">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-thumbs-up" style={{ marginLeft: "10px" }}></i>
            <button>Airport shuttle</button>
          </div>
          <div className="singleHotelBoldText">{props.data?.name}</div>
          <div className="singleHotelLightText">
            1 & 2 Ring Road, Lajpat Nagar, 110024 New Delhi, India Great
            location - show map Metro access
          </div>
        </div>
        <div className="singleHotelButtons">
          <div className="singleHotelButtonsFlex">
            <div>
              <i class="fa fa-heart-o"></i>
            </div>
            <div>
              <button>Reserve</button>
            </div>
          </div>

          <div className="singleHotelLowerButton">
            <button>We Price Match</button>
          </div>
        </div>
      </div>

      <div className="singleHotelImageBox">
        <div className="singleHotelImageBoxLeft">
          <div>
            <img src={props?.data?.images[1]} />
          </div>
          <div>
            <img src={props?.data?.images[2]} />
          </div>
        </div>
        <div className="singleHotelImageBoxRight">
          <img src={props?.data?.images[0]} />
        </div>
      </div>

      <div className="singleHotelLowerImageBox">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max300/232822344.jpg?k=1a91176ea89a5f69a5ae7816438a2eed53503f94c46866b96e8d6e6a64d9f7d5&o=&hp=1" />
        <img src="https://cf.bstatic.com/xdata/images/hotel/max300/328921097.jpg?k=511c7c2edb541d84566419b71ab2ccb73e931cbe0779171ec934565d7fc90f2f&o=&hp=1" />
        <img src="https://cf.bstatic.com/xdata/images/hotel/max300/328921090.jpg?k=83e9090c28919c8d607b49d83799946ff16f887662281463192471851030e09c&o=&hp=1" />
        <img src="https://cf.bstatic.com/xdata/images/hotel/max300/328921095.jpg?k=36611e531ccd934e03402264f561c1e5a9e36a830f99ae2ddd5ea64a12b22a38&o=&hp=1" />
        <img src="https://cf.bstatic.com/xdata/images/hotel/max300/336192702.jpg?k=b0b1c31ee7fc44cb9c399e3a527eace407249ff182544cbb5c384cc092da2786&o=&hp=1" />
      </div>
    </div>
  );
}
export default SingleHotelImageComponent;
