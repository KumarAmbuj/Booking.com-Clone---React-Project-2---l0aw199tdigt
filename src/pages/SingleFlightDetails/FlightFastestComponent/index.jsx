import FlightSingleComponent from "../FlightSingleComponent";
import "./flightFastestComponent.css";
function FlightFastestComponent(props) {
  return (
    <div className="flightBestContainer">
      {props.data
        .sort((a, b) => {
          return a.duration - b.duration;
        })
        .map((val, index) => {
          return <FlightSingleComponent data={val} key={val._id} />;
        })}
    </div>
  );
}
export default FlightFastestComponent;
