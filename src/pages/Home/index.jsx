import Homepage from "../Homepage";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HotelList from "../HotelList";
import SingleHotelDetail from "../SingleHotelDetail";
import EmailAddress from "../../Component/Footer/EmailAddress";
import Flights from "../Flights";
import SingleFlightDetails from "../SingleFlightDetails";

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotel-list" element={<HotelList />} />
        <Route path="/single-hotel-detail" element={<SingleHotelDetail />} />
        <Route path="/flights" element={<Flights />} />
        <Route
          path="/single-flight-details"
          element={<SingleFlightDetails />}
        />
      </Routes>
    </div>
  );
}
export default Home;
