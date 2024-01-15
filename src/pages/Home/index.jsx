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

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotel-list/:location" element={<HotelList />} />
        <Route
          path="/single-hotel-detail/:hotelId"
          element={<SingleHotelDetail />}
        />
        <Route path="/flights" element={<Flights />} />
        <Route
          path="/single-flight-details"
          element={<SingleFlightDetails />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
export default Home;
