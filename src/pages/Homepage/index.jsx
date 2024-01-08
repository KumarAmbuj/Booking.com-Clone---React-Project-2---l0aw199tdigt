import ExploreIndiaSlider from "../../Component/ExploreIndiaSlider";
import Footer from "../../Component/Footer";
import GetInstantDiscount from "../../Component/GetInstantDiscount";
import HeroSection from "../../Component/HeroSection";
import HomeGuestsLove from "../../Component/HomeGuestsLove";
import Navbar from "../../Component/Navbar";
import OfferSlider from "../../Component/OfferSlider";
import PropertySlider from "../../Component/PropertySlider";
import QuickAndEasyTripPlan from "../../Component/QuickAndEasyTripPlan";
import StayAtYourTop from "../../Component/StayAtYourTop";
import TrendingDestinations from "../../Component/TrendingDestinations";
import EmailAddress from "../../Component/Footer/EmailAddress";

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OfferSlider />
      <PropertySlider />
      <ExploreIndiaSlider />
      <TrendingDestinations />
      <QuickAndEasyTripPlan />
      <StayAtYourTop />
      <HomeGuestsLove />
      <GetInstantDiscount />
      <Footer />
      <EmailAddress />
    </div>
  );
}
export default Homepage;
