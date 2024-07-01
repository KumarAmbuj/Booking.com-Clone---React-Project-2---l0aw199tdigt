import { useState, useEffect } from "react";
import FlightNavbar from "../../Component/FlightNavbar";
import "./myTrip.css";
import MyTripComponent from "./MytripComponent";
let flightFlag = false;
let hotelFlag = false;

function MyTrip() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
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
      setShowData(responseJson.data);

      //console.log(flightData);
    } catch (error) {
      console.log("errrrorrrr");
    } finally {
      // setIsLoader(false);
    }
  }

  function handleFlightHistory() {
    flightFlag = !flightFlag;
    if (flightFlag) {
      let flightData = data.filter((val) => {
        return val.booking_type == "flight";
      });
      setShowData([...flightData]);
    } else {
      setShowData([...data]);
    }
  }

  function handleHotelHistory() {
    hotelFlag = !hotelFlag;
    if (hotelFlag) {
      let hotelData = data.filter((val) => {
        return val.booking_type === "hotel";
      });
      setShowData([...hotelData]);
    } else {
      setShowData([...data]);
    }
  }

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <div>
      <FlightNavbar />
      <dv>
        <button onClick={handleFlightHistory}>Flight</button>
        <button onClick={handleHotelHistory}>Hotels</button>
      </dv>
      {showData?.reverse().map((val) => {
        return <MyTripComponent data={val} />;
      })}
    </div>
  );
}
export default MyTrip;
