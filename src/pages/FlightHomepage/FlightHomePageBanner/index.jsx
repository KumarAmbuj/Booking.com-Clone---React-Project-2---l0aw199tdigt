import "./flightHomePageBanner.css";
function FlightHomePageBanner() {
  return (
    <div className="flightHomepageBannerContainer">
      <div className="flightHomepageBannerContent">
        <div className="flightHomepageBannerImage">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/MagnifyingGlassUsp.png" />
        </div>
        <div className="flightHomepageBannerText">
          <div className="flightHomepageBannerBoldText">
            Search a huge selection
          </div>
          <div className="flightHomepageBannerLightText">
            Easily compare flights, airlines and prices - all in one place
          </div>
        </div>
      </div>
      <div className="flightHomepageBannerContent">
        <div className="flightHomepageBannerImage">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/MoneyUsp.png" />
        </div>
        <div className="flightHomepageBannerText">
          <div className="flightHomepageBannerBoldText">Pay no hidden fees</div>
          <div className="flightHomepageBannerLightText">
            Get a clear price breakdown, every step of the way
          </div>
        </div>
      </div>
      <div className="flightHomepageBannerContent">
        <div className="flightHomepageBannerImage">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.99.1/illustrations-traveller/TicketsUsp.png" />
        </div>
        <div className="flightHomepageBannerText">
          <div className="flightHomepageBannerBoldText">
            Get more flexibility
          </div>
          <div className="flightHomepageBannerLightText">
            Change your travel dates with the Flexible ticket option*
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlightHomePageBanner;
