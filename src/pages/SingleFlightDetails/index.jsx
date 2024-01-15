import { useState } from "react";
import FlightFooter from "../../Component/FlightFooter";
import FlightNavbar from "../../Component/FlightNavbar";
import CompareAndBook from "../FlightHomepage/CompareAndBook";
import SingleFlightDetailsFilterAndFlight from "./SingleFlightDetailsFilterAndFlight";
import "./singleFlightDetails.css";
import { useEffect } from "react";

import { useLocation } from "react-router-dom";

function SingleFlightDetails() {
  const location = useLocation();
  const [flightData, setFlightData] = useState([]);

  async function getFlightList() {
    try {
      const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight${location.search}&day=Tue`;
      //console.log(url);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/flight${location.search}&day=Tue`,
        {
          headers: {
            projectId: "0f6ipegajht2",
          },
        }
      );

      const responseJson = await response.json();
      //console.log(responseJson);
      if (responseJson.status === "success") {
        setFlightData(responseJson?.data.flights);
      }

      //console.log(flightData);
    } catch (error) {
      console.log("errrrorrrr");
    } finally {
      // setIsLoader(false);
    }
  }

  useEffect(() => {
    getFlightList();
    //document.getElementById("prod").scrollTop.toFixed;
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <FlightNavbar />
      <div className="singleFlightDetailContainer">
        <CompareAndBook />
        <SingleFlightDetailsFilterAndFlight data={flightData} />
        <FlightFooter />
      </div>
    </div>
  );
}
export default SingleFlightDetails;
