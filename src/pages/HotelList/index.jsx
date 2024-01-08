import FilterComponent from "./FilterCmponent";
import SingleHotelComponent from "./SingleHotelComponent";
import "./hotelList.css";
import { FilterArray } from "../../Constant/constant";
import Navbar from "../../Component/Navbar";
import EmailAddress from "../../Component/Footer/EmailAddress";

function HotelList() {
  return (
    <>
      <Navbar />
      <div className="hotelListContainer">
        <div className="upperText">
          {"Home  >  India  >  Lonavala >   Search results"}
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
              Lonavala: 863 properties found
            </div>
            <SingleHotelComponent />
            <SingleHotelComponent />
            <SingleHotelComponent />
            <SingleHotelComponent />
            <SingleHotelComponent />
          </div>
        </div>
      </div>
      <EmailAddress />
    </>
  );
}
export default HotelList;
