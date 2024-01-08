import FlightFooter from "../../Component/FlightFooter";

import CompareAndBook from "./CompareAndBook";
import FlightWorldwide from "./FlightWorldwide";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import PopularFlights from "./PopularFlights";
import TrendingCities from "./TrendingCities";
import "./flightHomepage.css";
function FlightHomepage() {
  return (
    <div className="flightHomepageContainer">
      <CompareAndBook />
      <PopularFlights />
      <TrendingCities />
      <FlightWorldwide />
      <FrequentlyAskedQuestions />

      <FlightFooter />
    </div>
  );
}
export default FlightHomepage;
