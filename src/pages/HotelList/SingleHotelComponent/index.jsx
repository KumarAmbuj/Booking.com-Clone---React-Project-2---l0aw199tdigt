import "./singleHotelComponent.css";
import tempsvg from "../../../assets/svg/temp.svg";
import Temp from "../../../Component/svg/temp";
import Navbar from "../../../Component/Navbar";
import { Link } from "react-router-dom";

function SingleHotelComponent(props) {
  //const arr = [1, 3];
  const arr = [];
  for (let x = 0; x < props?.data.rating; x++) {
    arr.push(x);
  }
  return (
    <>
      <div className="singleHotelComponentContainer">
        <div className="hotelComponentImage">
          <div className="heartIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={"18px"}
              width={"18px"}
            >
              <path d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"></path>
            </svg>
          </div>
          <Link to={`/single-hotel-detail/${props.data._id}`}>
            {" "}
            <img src={props?.data.images[0]} />
          </Link>
        </div>

        <div className="hotelComponentText">
          <div className="hotelComponentHeader">
            <Link to={`/single-hotel-detail/${props.data._id}`}>
              {props.data.name}
            </Link>
            <span style={{ marginLeft: "8px" }}>
              {arr.map((val) => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={"13px"}
                    width={"13px"}
                    style={{ marginRight: "2px" }}
                  >
                    <path
                      fill="#ffb700"
                      d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"
                    ></path>
                  </svg>
                );
              })}
            </span>
            <svg viewBox="0 0 128 128" width="1em" height="1em">
              <path
                fill="#ffb700"
                d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z"
              ></path>
            </svg>
          </div>
          <div className="showOnMap">
            <span>{props?.data.location}</span>
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
              <div className="hotelComponentRatingLightText">
                {Math.floor(Math.random() * 500 + 500)} reviews
              </div>
            </div>
            <div className="hotelComponentRatingButton">
              <button>
                {Math.floor(props.data.rating * 1.985654 * 10) / 10}
              </button>
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
