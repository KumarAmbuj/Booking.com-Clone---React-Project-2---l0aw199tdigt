import FlightFooter from "../../Component/FlightFooter";
import FlightNavbar from "../../Component/FlightNavbar";
import CompareAndBook from "../FlightHomepage/CompareAndBook";
import SingleFlightDetailsFilterAndFlight from "./SingleFlightDetailsFilterAndFlight";
import "./singleFlightDetails.css";
function SingleFlightDetails() {
  return (
    <div>
      <FlightNavbar />
      <div className="singleFlightDetailContainer">
        <CompareAndBook />
        <SingleFlightDetailsFilterAndFlight />
        <FlightFooter />
      </div>
    </div>
  );
}
export default SingleFlightDetails;
