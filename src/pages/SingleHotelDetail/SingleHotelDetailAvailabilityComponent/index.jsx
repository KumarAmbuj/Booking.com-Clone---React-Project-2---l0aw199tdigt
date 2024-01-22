import "./singleHotelDetailAvailabilityComponent.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../authentication/AuthContext";
import { useContext } from "react";

function SingleHotelDetailAvailabilityComponent(props) {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleClick(val) {
    if (isLoggedIn) {
      navigate("/hotel-checkout", {
        state: { hotelDetail: props.data, index: val },
      });
    } else {
      navigate("/signin");
    }
  }

  return (
    <div className="availabilityContainer">
      <div className="availabilityHeader">Availability</div>
      <div className="availabilityTableContainer">
        <div className="availabilityTableRow">
          <div className="tableHeading1">Room type</div>
          <div className="tableHeading2">Number of guests</div>
          <div className="tableHeading3"></div>
        </div>
        {props?.data?.rooms.map((val, index) => {
          return (
            <div className="availabilityTableRow" key={index}>
              <div className="tableData1">
                <div className="tableData1BoldText">{val.roomType}</div>
                <div className="tableData1LightText">
                  {val.bedDetail} <i class="fa fa-bed" aria-hidden="true"></i>
                </div>
              </div>
              <div className="tableData2">
                <i class="fa fa-user" aria-hidden="true"></i>
                <i class="fa fa-user" aria-hidden="true"></i>
                <i class="fa fa-user" aria-hidden="true"></i>
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="tableData3">
                <button
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  Show prices
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SingleHotelDetailAvailabilityComponent;
