import Homepage from "../Homepage";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HotelList from "../HotelList";
import SingleHotelDetail from "../SingleHotelDetail";
import EmailAddress from "../../Component/Footer/EmailAddress";
import Flights from "../Flights";
import SingleFlightDetails from "../SingleFlightDetails";
import Register from "../Register";
import Signin from "../Signin";
import AuthProvider from "../../authentication/AuthProvider";
import FlightCheckout from "../FlightCheckout";
import FlightPayment from "../FlightPayment";
import HotelCheckout from "../HotelCheckout";
import HotelPayment from "../HotelPayment";
import PageUnderConstruction from "../PageUnderConstruction";

function Home() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hotel-list/:location" element={<HotelList />} />
          <Route
            path="/single-hotel-detail/:hotelId"
            element={<SingleHotelDetail />}
          />
          <Route path="/hotel-checkout" element={<HotelCheckout />} />
          <Route path="/hotel-payment" element={<HotelPayment />} />

          <Route path="/flights" element={<Flights />} />
          <Route
            path="/single-flight-details"
            element={<SingleFlightDetails />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/flight-checkout" element={<FlightCheckout />} />
          <Route path="/flight-payment" element={<FlightPayment />} />
          <Route
            path="/page-under-construction"
            element={<PageUnderConstruction />}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default Home;
