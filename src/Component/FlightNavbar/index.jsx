import "./flightNavbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext, useState } from "react";
import HideNavigation from "../Navbar/HideNavigation";

function FlightNavbar() {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [hideNavigation, setHideNavigation] = useState(false);

  function ShowHidedNavigation() {
    setHideNavigation(!hideNavigation);
  }
  function handleLogout() {
    logout();
  }
  return (
    <>
      <div className="flightNavbar">
        <div className="flightLogo">
          <Link to="/">Booking.com</Link>
        </div>
        <div className="flightRegisterSignin">
          <div className="flagIcon">
            <img src="https://q-xx.bstatic.com/backend_static/common/flags/new/48-squared/us.png" />
          </div>
          <div className="questionMark">
            <i className="fa fa-question-circle"></i>
          </div>
          {!isLoggedIn ? (
            <>
              <div className="flightNavbarRegisterButton">
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </div>
              <div className="flightNavbarSigninButton">
                <Link to="/signin">
                  <button>Sign in</button>
                </Link>
              </div>
            </>
          ) : (
            <div className="flightNavbarRegisterButton">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}

          <div className="userIcon">
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={ShowHidedNavigation}
            ></i>
          </div>
        </div>
      </div>
      {hideNavigation ? <HideNavigation onclick={ShowHidedNavigation} /> : ""}
    </>
  );
}
export default FlightNavbar;
