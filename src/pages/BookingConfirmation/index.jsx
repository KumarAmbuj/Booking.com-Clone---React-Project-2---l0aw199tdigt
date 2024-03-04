import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";
import "./bookingConfirmation.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function BookingConfirmation() {
  const { state } = useLocation();
  return (
    <>
      <FlightRegisterSignInNavbar />
      <div className="bookingConfirmedContainer">
        <div className="bookingContent">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIwIYITCUq8t7w4JysqZvKdq7j_Pii6Xqhw&usqp=CAU" />
          </div>
          <div>
            <div className="bookingText">Your Booking confirmed</div>
            <div className="bookingId">Your booking id: {state.id}</div>
            <div className="bookingHistoryButton">
              <Link to="/my-trip">
                <button>Order History</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookingConfirmation;
