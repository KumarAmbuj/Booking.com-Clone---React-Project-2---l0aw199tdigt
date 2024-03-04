import { useState, useEffect } from "react";
import FlightNavbar from "../../Component/FlightNavbar";
import "./myTrip.css";
import MyTripComponent from "./MytripComponent";
function MyTrip() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("booking");

  async function getOrderList() {
    try {
      //console.log(url);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/booking/`,
        {
          headers: {
            projectId: "0f6ipegajht2",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseJson = await response.json();
      console.log(responseJson);
      setData(responseJson.data);

      //console.log(flightData);
    } catch (error) {
      console.log("errrrorrrr");
    } finally {
      // setIsLoader(false);
    }
  }

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <div>
      <FlightNavbar />
      {data?.reverse().map((val) => {
        return <MyTripComponent data={val} />;
      })}
    </div>
  );
}
export default MyTrip;
