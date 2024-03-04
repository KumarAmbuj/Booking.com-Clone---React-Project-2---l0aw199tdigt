import "./navbar.css";
import HideNavigation from "./HideNavigation";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthContext";

function Navbar() {
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
      <div className="navbar">
        <div className="navbarLogoAndIcon">
          <div className="navbarLogo">
            <Link to="/">Booking.com</Link>
          </div>
          <div className="navbarIcon">
            <div className="INR">INR</div>
            <div className="indianFlag">
              <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png" />
            </div>
            {/* <div className="questionMark">
              <i className="fa fa-question-circle"></i>
            </div> */}
            <div className="listYourProperty">
              <Link to="page-under-construction" style={{ color: "white" }}>
                List your property
              </Link>
            </div>

            {!isLoggedIn ? (
              <>
                <div className="navbarRegisterButton">
                  <Link to="/register">
                    <button>Register</button>
                  </Link>
                </div>
                <div className="navbarSigninButton">
                  <Link to="/signin">
                    <button>Sign in</button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="navbarRegisterButton">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}

            <div className="userIcon">
              <i className="fa fa-user-circle"></i>
            </div>

            <div className="navbarToggle">
              <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={ShowHidedNavigation}
              ></i>
            </div>
          </div>
        </div>
        <div className="staysFlightButtons">
          <Link to="/">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height={"20px"}
                width={"20px"}
              >
                <path
                  fill="white"
                  d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"
                ></path>
              </svg>
              <span style={{ marginLeft: "10px" }}>Stays</span>
            </button>
          </Link>
          <Link to="/flights">
            {" "}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height={"20px"}
                width={"20px"}
              >
                <path
                  fill="white"
                  d="M20.505 7.5l-15.266.022.672.415-1.1-2.2a.75.75 0 0 0-.638-.414l-2.293-.1C.82 5.228-.003 6.06.003 7.083c.002.243.051.484.146.709l2.072 4.68a2.947 2.947 0 0 0 2.701 1.778h4.043l-.676-1.075-2.484 5.168A1.831 1.831 0 0 0 7.449 21h2.099a1.85 1.85 0 0 0 1.419-.664l5.165-6.363-.582.277h4.956c1.82.09 3.399-1.341 3.49-3.198l.004-.134a3.426 3.426 0 0 0-3.44-3.419l-.074.001zm.02 1.5h.042a1.924 1.924 0 0 1 1.933 1.914l-.002.065a1.866 1.866 0 0 1-1.955 1.772l-4.993-.001a.75.75 0 0 0-.582.277l-5.16 6.355a.346.346 0 0 1-.26.118h-2.1a.336.336 0 0 1-.3-.49l2.493-5.185a.75.75 0 0 0-.676-1.075H4.924a1.45 1.45 0 0 1-1.328-.878l-2.07-4.676a.35.35 0 0 1 .326-.474l2.255.1-.638-.415 1.1 2.2a.75.75 0 0 0 .672.415L20.507 9zM16.323 7.76l-2.992-4.02A1.851 1.851 0 0 0 11.85 3H9.783a1.85 1.85 0 0 0-1.654 2.672l1.439 2.91a.75.75 0 0 0 1.344-.664L9.472 5.007a.351.351 0 0 1 .312-.507h2.066a.35.35 0 0 1 .279.14l2.99 4.017a.75.75 0 1 0 1.203-.896z"
                ></path>
              </svg>
              <span style={{ marginLeft: "10px" }}>Flights</span>
            </button>
          </Link>
          {isLoggedIn ? (
            <Link to="/my-trip">
              <button>My trip</button>
            </Link>
          ) : (
            ""
          )}
        </div>

        {/**Search component */}
      </div>
      {hideNavigation ? <HideNavigation onclick={ShowHidedNavigation} /> : ""}
    </>
  );
}
export default Navbar;
