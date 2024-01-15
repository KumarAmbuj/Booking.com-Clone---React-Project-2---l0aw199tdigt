import FlightSingleComponent from "../FlightSingleComponent";
import "./flightCheapestComponent.css";
function FlightCheapestComponent(props) {
  return (
    <div className="flightBestContainer">
      {props.data
        .sort((a, b) => {
          return a.ticketPrice - b.ticketPrice;
        })
        .map((val, index) => {
          return <FlightSingleComponent data={val} key={val._id} />;
        })}
    </div>
  );
}
export default FlightCheapestComponent;
