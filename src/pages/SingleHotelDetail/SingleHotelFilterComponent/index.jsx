import "./singleHotelFilterComponent.css";
function SingleHotelFilterComponent() {
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
          <input type="text" />
        </div>

        <div className="destinationText">Check-in-date:</div>
        <div className="filterInputBox">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <input type="text" />
        </div>

        <div className="destinationText">Check-out-date:</div>
        <div className="filterInputBox">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <input type="text" />
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
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
export default SingleHotelFilterComponent;
