import "./compareAndBook.css";
import { FlightCode } from "../../../Constant/constant";
import { FlightCodeArray } from "../../../Constant/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { monthNames } from "../../../Constant/constant";
import { AuthContext } from "../../../authentication/AuthContext";
import { useContext } from "react";

import MyCalendar from "../../../Component/CalendarComponent";

function CompareAndBook() {
  const { date, setDate } = useContext(AuthContext);
  const navigate = useNavigate();
  const [flightFrom, setFlightFrom] = useState("");
  const [flightTo, setFlightTo] = useState("");
  const [calendar, setCalendar] = useState(false);

  function handleCalndear() {
    setCalendar(!calendar);
  }

  // function selectDate(val) {
  //   setDate(val);
  // }

  function handleFlightFrom(e) {
    setFlightFrom(e.target.value);
  }
  function handleFlightTo(e) {
    setFlightTo(e.target.value);
  }

  function handleClick() {
    if (flightFrom.length > 0 && flightTo.length > 0) {
      navigate(
        `/single-flight-details?search=${JSON.stringify({
          source: flightFrom,
          destination: flightTo,
        })}`
      );
    }
  }
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
          {/* <i class="fa fa-plane" aria-hidden="true"></i> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"35px"}
          >
            <path d="M18.33 3.57L5.7 9.955l.79.07-1.96-1.478a.75.75 0 0 0-.753-.087l-2.1.925C.73 9.856.359 10.967.817 11.88c.11.22.263.417.45.577l3.997 3.402a2.94 2.94 0 0 0 3.22.4l3.62-1.8-1.084-.671v5.587a1.833 1.833 0 0 0 2.654 1.657l1.88-.932a1.85 1.85 0 0 0 .975-1.226l1.87-7.839-.396.498 3.441-1.707a3.494 3.494 0 1 0-3.11-6.259zm.672 1.342a1.994 1.994 0 0 1 1.775 3.571l-3.44 1.707a.75.75 0 0 0-.396.498l-1.87 7.838a.35.35 0 0 1-.185.232l-1.88.932a.335.335 0 0 1-.486-.304V13.79a.75.75 0 0 0-1.084-.672l-3.62 1.8a1.44 1.44 0 0 1-1.578-.197l-3.997-3.402a.35.35 0 0 1 .073-.577l2.067-.91-.754-.087 1.96 1.478a.75.75 0 0 0 .79.07l12.63-6.383zm-3.272.319l-4.46-2.26a1.852 1.852 0 0 0-1.656-.001l-1.846.912a1.85 1.85 0 0 0-.295 3.128l2.573 1.955a.75.75 0 1 0 .908-1.194L8.38 5.816a.35.35 0 0 1 .055-.591l1.845-.912a.351.351 0 0 1 .315 0l4.456 2.256a.75.75 0 0 0 .678-1.338z"></path>
          </svg>
          {/* <input type="text" placeholder="Where from ?" /> */}
          <select onChange={handleFlightFrom}>
            <option>Where from?</option>
            {FlightCodeArray.map((val, index) => {
              return (
                <option value={val.code} key={index}>
                  {val.city}
                </option>
              );
            })}
          </select>
        </div>
        <div className="inputSearchTo">
          {/* <i class="fa fa-plane" aria-hidden="true"></i> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"35px"}
          >
            <path d="M19.906 12.996l-12.72-6.2.421.672-.006-2.457a.75.75 0 0 0-.386-.654L5.207 3.244c-.95-.468-2.058-.091-2.51.826a1.85 1.85 0 0 0-.187.706l-.295 5.242a2.95 2.95 0 0 0 1.63 2.802l3.618 1.8-.117-1.27-4.461 3.359a1.85 1.85 0 0 0 .289 3.13l1.883.933a1.85 1.85 0 0 0 1.564.037l7.381-3.248-.636-.014 3.44 1.71a3.494 3.494 0 1 0 3.11-6.259.75.75 0 0 0-.334-.078h-.005v.75l.329-.674zm-.658 1.348a.75.75 0 0 0 .329.076h.005v-.75l-.334.672a1.994 1.994 0 1 1-1.774 3.571l-3.44-1.71a.75.75 0 0 0-.636-.014l-7.38 3.247a.35.35 0 0 1-.295-.008l-1.881-.932a.35.35 0 0 1-.053-.59l4.46-3.358a.75.75 0 0 0-.118-1.27l-3.618-1.8a1.45 1.45 0 0 1-.8-1.377l.295-5.238a.35.35 0 0 1 .504-.29l1.975 1.096-.386-.654.006 2.457a.75.75 0 0 0 .421.672l12.72 6.2zm-2.234-2.419l-.9-4.918a1.85 1.85 0 0 0-.995-1.32l-1.853-.92a1.85 1.85 0 0 0-2.669 1.657v3.234a.75.75 0 0 0 1.5 0V6.425a.35.35 0 0 1 .505-.313l1.85.918a.35.35 0 0 1 .187.249l.9 4.916a.75.75 0 1 0 1.475-.27z"></path>
          </svg>
          <select onChange={handleFlightTo}>
            <option>Where to?</option>
            {FlightCodeArray.map((val, index) => {
              return (
                <option value={val.code} key={index}>
                  {val.city}
                </option>
              );
            })}
          </select>
        </div>

        <div className="inputSearchReturn" onClick={handleCalndear}>
          {/* <i class="fa fa-calendar" aria-hidden="true"></i> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"35px"}
          >
            <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zM18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6zM5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zM12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"></path>
          </svg>
          <input
            type="text"
            value={`${monthNames[date.getMonth()]} ${date.getDate()}`}
          />
          {calendar ? (
            <div className="calendarContainer">
              <MyCalendar />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="inputSearchButton">
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
    </div>
  );
}
export default CompareAndBook;
