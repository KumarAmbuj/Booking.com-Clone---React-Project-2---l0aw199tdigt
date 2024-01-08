import "./navbar.css";
import HideNavigation from "./HideNavigation";
import { useState } from "react";

function Navbar() {
  const [hideNavigation, setHideNavigation] = useState(false);

  function ShowHidedNavigation() {
    setHideNavigation(!hideNavigation);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbarLogoAndIcon">
          <div className="navbarLogo">Booking.com</div>
          <div className="navbarIcon">
            <div className="INR">INR</div>
            <div className="indianFlag">
              <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png" />
            </div>
            <div className="questionMark">
              <i class="fa fa-question-circle"></i>
            </div>
            <div className="listYourProperty">List your property</div>
            <div className="navbarRegisterButton">
              <button>Register</button>
            </div>
            <div className="navbarSigninButton">
              <button>Sign in</button>
            </div>

            <div className="userIcon">
              <i class="fa fa-user-circle"></i>
            </div>

            <div className="userIcon">
              <i
                class="fa fa-bars"
                aria-hidden="true"
                onClick={ShowHidedNavigation}
              ></i>
            </div>
          </div>
        </div>
        <div className="staysFlightButtons">
          <button>
            {/* <i class="fa fa-bed" aria-hidden="true"></i>{" "} */}
            <img
              src="./SVGFiles/name.svg"
              style={{ height: "25px", width: "30x", color: "white" }}
            />
            <span style={{ marginLeft: "10px" }}>Stays</span>
          </button>

          <button>
            <i class="fa fa-plane"></i>{" "}
            <span style={{ marginLeft: "10px" }}>Flights</span>
          </button>
        </div>
      </div>
      {hideNavigation ? <HideNavigation onclick={ShowHidedNavigation} /> : ""}
    </>
  );
}
export default Navbar;
