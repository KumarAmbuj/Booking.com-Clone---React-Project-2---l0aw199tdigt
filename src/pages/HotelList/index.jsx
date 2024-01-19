import FilterComponent from "./FilterCmponent";
import SingleHotelComponent from "./SingleHotelComponent";
import "./hotelList.css";
import { FilterArray } from "../../Constant/constant";
import Navbar from "../../Component/Navbar";
import EmailAddress from "../../Component/Footer/EmailAddress";
import { useParams } from "react-router-dom";
import { projectId } from "../../Constant/constant";

import { useEffect, useState } from "react";
import HotelFilterDropdownComponent from "./HotelFilterDropdownComponent";

function HotelList() {
  const { location } = useParams();
  const [hotelListData, setHotelListData] = useState([]);
  const [hotelFilterDropdown, setHotelFilterDropdown] = useState(false);
  const [filterText, setFilterText] = useState("Our top pick");
  const filterArray = [
    "Our top pick",
    "Homes & apartments first",
    "Property rating (high to low)",
    "Property rating (low to high)",
    "Distance from city centre",
    "Top reviewd",
    "Genius discount first",
  ];

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

  function ToggleHotelFilterDropdown() {
    setHotelFilterDropdown(!hotelFilterDropdown);
  }
  function HotelFilterType(val) {
    setFilterText(filterArray[val]);
    if (val === 0) {
      let arr = hotelListData;
      arr.sort((a, b) => b.rooms[0].roomSize - a.rooms[0].roomSize);
      setHotelListData(arr);
    } else if (val === 1) {
      let arr = hotelListData;
      arr.sort((a, b) => b.rooms[0].costPerNight - a.rooms[0].costPerNight);
      setHotelListData(arr);
    } else if (val === 2) {
      let arr = hotelListData;
      arr.sort((a, b) => b.rating - a.rating);
      setHotelListData(arr);
    } else if (val === 3) {
      let arr = hotelListData;
      arr.sort((a, b) => a.rating - b.rating);
      setHotelListData(arr);
    } else if (val === 4) {
      let arr = hotelListData;
      arr.sort((a, b) => a.rooms[0].roomSize - b.rooms[0].roomSize);
      setHotelListData(arr);
    } else if (val === 5) {
      let arr = hotelListData;
      arr.sort((a, b) => b.rooms[0].roomSize - a.rooms[0].roomSize);
      setHotelListData(arr);
    } else if (val === 6) {
      let arr = hotelListData;
      arr.sort((a, b) => a.rooms[0].price - b.rooms[0].price);
      setHotelListData(arr);
    }
  }

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

            <div
              className="HotelListFilterBox"
              onClick={ToggleHotelFilterDropdown}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={"18px"}
                  width={"18px"}
                  style={{ marginRight: "8px" }}
                  data-rtl-flip="true"
                >
                  <path d="M10.28 15.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.78.78 0 0 1-.24.16.73.73 0 0 1-.58 0 .78.78 0 0 1-.24-.16l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3.75a.75.75 0 0 1 1.5 0v14.69l3.22-3.22a.75.75 0 0 1 1.06 0zm13.5-7.5l-4.5-4.5a.78.78 0 0 0-.28-.16.73.73 0 0 0-.58 0 .78.78 0 0 0-.24.16l-4.5 4.5a.75.75 0 1 0 1.06 1.06L18 5.56v14.69a.75.75 0 0 0 1.5 0V5.56l3.22 3.22a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06z"></path>
                </svg>
              </span>
              <span>Sort By: {filterText}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={"18px"}
                  width={"18px"}
                  style={{ marginLeft: "8px" }}
                >
                  <path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path>
                </svg>
              </span>

              {hotelFilterDropdown ? (
                <HotelFilterDropdownComponent
                  filterArray={filterArray}
                  onclick={HotelFilterType}
                />
              ) : (
                ""
              )}
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
