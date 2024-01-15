import "./singleHotelDetailAvailabilityComponent.css";
function SingleHotelDetailAvailabilityComponent(props) {
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
                <button>Show prices</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SingleHotelDetailAvailabilityComponent;
