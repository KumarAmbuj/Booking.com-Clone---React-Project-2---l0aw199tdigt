import FilterComponent from "./FilterCmponent";
import SingleHotelComponent from "./SingleHotelComponent";
import "./hotelList.css";
import { FilterArray } from "../../Constant/constant";
import Navbar from "../../Component/Navbar";
import EmailAddress from "../../Component/Footer/EmailAddress";
import { useParams } from "react-router-dom";
import { projectId } from "../../Constant/constant";

import { useEffect, useState } from "react";

function HotelList() {
  const { location } = useParams();
  const [hotelListData, setHotelListData] = useState([]);

  //console.log(location);

  async function getHotelList() {
    try {
      //setIsLoader(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel?location=${location}&limit=50`,
        {
          headers: {
            projectId: projectId,
          },
        }
      );

      const responseJson = await response.json();

      if (responseJson.message === "success") {
        setHotelListData(responseJson?.data?.hotels);
        // console.log(hotelListData);
      }
      //console.log(responseJson);
    } catch (error) {
    } finally {
      //setIsLoader(false);
    }
  }
  useEffect(() => {
    getHotelList();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="hotelListContainer">
        <div className="upperText">
          {`Home  >  India  >  ${location} >   Search results`}
        </div>
        <div className="FilterHotelList">
          <div className="FilterHotels">
            <div className="filterHeading">Filter by:</div>
            {FilterArray.map((val, index) => {
              return <FilterComponent data={val} key={index} />;
            })}
            {/* <FilterComponent /> */}
          </div>

          <div className="HotelsContainer">
            <div className="searchResultsText">
              {location}: {hotelListData?.length} properties found
            </div>
            {hotelListData?.map((val, index) => {
              return <SingleHotelComponent key={val._id} data={val} />;
            })}

            {/* <SingleHotelComponent />
            <SingleHotelComponent />
            <SingleHotelComponent />
            <SingleHotelComponent /> */}
          </div>
        </div>
      </div>
      <EmailAddress />
    </>
  );
}
export default HotelList;
