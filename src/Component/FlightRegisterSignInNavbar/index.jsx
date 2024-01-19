import "./flightRegisterSignInNavbar.css";
import { Link } from "react-router-dom";
function FlightRegisterSignInNavbar() {
  return (
    <div className="registerNavbar">
      <div className="registerLogoIcon">
        <div className="registerLogo">
          {" "}
          <Link to="/">Booking.com</Link>
        </div>
        <div className="registerIcon">
          <div className="indianFlag">
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png" />
          </div>
          <div className="questionMark">
            <i className="fa fa-question-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlightRegisterSignInNavbar;
