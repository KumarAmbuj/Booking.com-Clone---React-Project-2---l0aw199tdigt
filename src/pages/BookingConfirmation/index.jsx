import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";
import "./bookingConfirmation.css";
function BookingConfirmation() {
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
            <div className="bookingId">
              Your booking id:{" "}
              {Math.floor(
                Math.random(200000000 - 100000000) * 100000000 + 100000000
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookingConfirmation;
