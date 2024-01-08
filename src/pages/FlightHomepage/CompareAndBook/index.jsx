import "./compareAndBook.css";
function CompareAndBook() {
  return (
    <div className="compareAndBookContainer">
      <div className="compareAndBookHeader">
        Compare and book flights with ease
      </div>
      <div className="compareAndBookHeaderLightText">
        Discover your next dream destination
      </div>

      <div className="radioDropdownCheckbox">
        <input type="radio" />
        <label htmlFor="type">Round trip</label>
        <input type="radio" />
        <label htmlFor="type">One way</label>
        <input type="radio" />
        <label htmlFor="type">Multi city</label>
        <select>
          <option>Economy</option>
          <option>Premium economy</option>
          <option>Business</option>
          <option>First class</option>
        </select>
        <select>
          <option>1 adult</option>
          <option>2 adult</option>
          <option>3 adult</option>
        </select>
        <input type="checkbox" /> Direct Flights only
      </div>

      <div className="inputSearch">
        <div className="inputSearchFrom">
          <i class="fa fa-plane" aria-hidden="true"></i>
          <input type="text" placeholder="Where from ?" />
        </div>
        <div className="inputSearchTo">
          <i class="fa fa-plane" aria-hidden="true"></i>
          <input type="text" placeholder="Where to ?" />
        </div>

        <div className="inputSearchReturn">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <input type="text" placeholder="Depart- Return" />
        </div>

        <div className="inputSearchButton">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
export default CompareAndBook;
