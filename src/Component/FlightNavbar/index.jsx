import "./flightNavbar.css";
function FlightNavbar() {
  return (
    <div className="flightNavbar">
      <div className="flightLogo">Booking.com</div>
      <div className="registerSignin">
        <div className="flagIcon">
          <img src="https://q-xx.bstatic.com/backend_static/common/flags/new/48-squared/us.png" />
        </div>
        <div className="questionMark">
          <i class="fa fa-question-circle"></i>
        </div>
        <div className="flightNavbarButtons">
          <button>Register</button>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
}
export default FlightNavbar;
