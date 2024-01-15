import FlightSingleComponent from "../FlightSingleComponent";
import "./flightBestComponent.css";
function FlightBestComponent(props) {
  return (
    <div className="flightBestContainer">
      {props.data
        .sort((a, b) => {
          return b.availableSeats - a.availableSeats;
        })
        .map((val, index) => {
          return <FlightSingleComponent data={val} key={val._id} />;
        })}
    </div>
  );
}
export default FlightBestComponent;
