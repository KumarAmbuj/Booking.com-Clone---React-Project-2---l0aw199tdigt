import "./myTripComponent.css";
function MyTripComponent(props) {
  return (
    <div className="myTripComponentContainer">
      <div className="myTripInfo">
        Type: {props.data.booking_type.toUpperCase()}
      </div>
      <div className="myTripInfo">Created At: {props.data.created_at}</div>
      <div className="myTripInfo">Start Date: {props.data.start_date}</div>
      <div className="myTripInfo">End Date: {props.data.end_date}</div>
      {props.data.booking_type == "hotel" ? (
        <div className="myTripInfo">
          {props.data.hotel.name}, {props.data.hotel.location}
        </div>
      ) : (
        <>
          <div className="myTripInfo">
            Departure Time: {props.data.flight.departureTime}
          </div>
          <div className="myTripInfo">
            Arrival Time: {props.data.flight.arrivalTime}
          </div>
          <div className="myTripInfo">
            Arrival Time: {props.data.flight.arrivalTime}
          </div>
          <div className="myTripInfo">Source: {props.data.flight.source}</div>
          <div className="myTripInfo">
            Destination: {props.data.flight.destination}
          </div>
          <div className="myTripInfo">
            Duration: {props.data.flight.duration}hr(s)
          </div>
          <div className="myTripInfo">Stops: {props.data.flight.stops}</div>
        </>
      )}

      <div className="myTripInfo">
        Status:{" "}
        <span style={{ color: "green" }}>
          {props.data.status.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
export default MyTripComponent;
