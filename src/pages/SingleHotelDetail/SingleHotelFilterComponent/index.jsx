import "./singleHotelFilterComponent.css";
import { HotelListArray } from "../../../Constant/constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../../authentication/AuthContext";
import { useContext } from "react";

function SingleHotelFilterComponent() {
  const { SetDate, SetCheckoutDate } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState("");
  function handleSearchSelect(e) {
    setSearchCity(e.target.value);
  }

  function handleSearch() {
    if (searchCity.length > 0) {
      navigate(`/hotel-list/${searchCity}`);
    }
  }
  function handleCheckinDate(e) {
    SetDate(new Date(e.target.value));
    //console.log("heyyy");
  }
  function handleCheckoutDate(e) {
    SetCheckoutDate(new Date(e.target.value));
    //console.log(e.target.value);
  }

  return (
    <div className="singleHotelFilterContainer">
      <div className="hotelFilterBadge">
        <button>We Price Match</button>
      </div>

      <div className="singleHotelFilterSearch">
        <div className="searchText">Search</div>

        <div className="destinationText">Destination/property name:</div>
        <div className="filterInputBox">
          <i class="fa fa-search"></i>
          <select onChange={handleSearchSelect}>
            <option>Select city</option>
            {HotelListArray.map((val, index) => {
              return (
                <option value={val.location} key={index}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="destinationText">Check-in-date:</div>
        <div className="filterInputBox">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <input type="date" onSelect={handleCheckinDate} />
        </div>

        <div className="destinationText">Check-out-date:</div>
        <div className="filterInputBox">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <input type="date" onChange={handleCheckoutDate} />
        </div>

        <div className="destinationText"></div>
        <div className="filterInputBox">
          <input type="text" placeholder="2 adult" />
        </div>

        <div className="filterCheckbox">
          <div>
            <input type="checkbox" />
            Entire homes & apartments
          </div>
          <div>
            <i class="fa fa-question-circle" aria-hidden="true"></i>
          </div>
        </div>

        <div className="filterCheckbox">
          <div>
            <input type="checkbox" />
            I'm travelling for work
          </div>
          <div>
            <i class="fa fa-question-circle" aria-hidden="true"></i>
          </div>
        </div>

        <div className="filterButton">
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}
export default SingleHotelFilterComponent;
