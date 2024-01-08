import "./emailAddress.css";
function EmailAddress() {
  return (
    <>
      <div className="emailAddress">
        <div className="saveTime">Save time, save money!</div>
        <div>
          <div className="signupText">
            Sign up and we'll send the best deals to you
          </div>
        </div>
        <div className="emailInput">
          <input placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="lowerEmailAddress">
        <div className="lowerButton">
          <button>List your property</button>
        </div>
      </div>
      <div className="FooterLine"></div>
      <div style={{ backgroundColor: "rgb(4, 4, 179)" }}>
        <div className="FooterLinkHeader">
          <div className="FooterLinkHeaderType">Mobile Version</div>
          <div className="FooterLinkHeaderType">Manage your bookings</div>
          <div className="FooterLinkHeaderType">Customer Service help</div>
          <div className="FooterLinkHeaderType">Become affiliate</div>
          <div className="FooterLinkHeaderType">Booking.com for business</div>
        </div>
      </div>

      <div className="LowerLink">
        <div className="LowerLinkDiv">
          <div className="LowerLinkDivType">Countries</div>
          <div className="LowerLinkDivType">Regions</div>
          <div className="LowerLinkDivType">Cities</div>
          <div className="LowerLinkDivType">Districts</div>
          <div className="LowerLinkDivType">Airports</div>
          <div className="LowerLinkDivType">Hotels</div>
          <div className="LowerLinkDivType">Place of Interests</div>
        </div>
        <div className="LowerLinkDiv">
          <div className="LowerLinkDivType">Homes</div>
          <div className="LowerLinkDivType">Apartments</div>
          <div className="LowerLinkDivType">Resorts</div>
          <div className="LowerLinkDivType">Villas</div>
          <div className="LowerLinkDivType">Hostels</div>
          <div className="LowerLinkDivType">B&Bs</div>
          <div className="LowerLinkDivType">Guest Houses</div>
        </div>
        <div className="LowerLinkDiv">
          <div className="LowerLinkDiv">
            <div className="LowerLinkDivType">Unique places to stay</div>
            <div className="LowerLinkDivType">All destinations</div>
            <div className="LowerLinkDivType">All flight destinations</div>
            <div className="LowerLinkDivType">All car hire locations</div>
            <div className="LowerLinkDivType">Discover</div>
            <div className="LowerLinkDivType">Reviews</div>
            <div className="LowerLinkDivType">Discover monthly stays</div>
            <div className="LowerLinkDivType">Unpacked: Travel articles</div>
            <div className="LowerLinkDivType">Seasonal and holiday deals</div>
            <div className="LowerLinkDivType">Traveller Review Awards</div>
          </div>
        </div>
        <div className="LowerLinkDiv">
          <div className="LowerLinkDivType">Car hire</div>
          <div className="LowerLinkDivType">Flight finder</div>
          <div className="LowerLinkDivType">Restaurant reservations</div>
          <div className="LowerLinkDivType">Booking.com for Travel Agents</div>
        </div>
        <div className="LowerLinkDiv">
          <div className="LowerLinkDivType">Coronavirus (COVID-19) FAQs</div>
          <div className="LowerLinkDivType">About Booking.com</div>
          <div className="LowerLinkDivType">Customer Service help</div>
          <div className="LowerLinkDivType">Partner help</div>
          <div className="LowerLinkDivType">Careers</div>
          <div className="LowerLinkDivType">Sustainability</div>
          <div className="LowerLinkDivType">Press centre</div>
          <div className="LowerLinkDivType">Safety resource centre</div>
          <div className="LowerLinkDivType">Sustainability</div>
          <div className="LowerLinkDivType">Investor relations</div>
          <div className="LowerLinkDivType">Terms & Conditions</div>
          <div className="LowerLinkDivType">How we work</div>
          <div className="LowerLinkDivType">Privacy & Cookie Statement</div>
          <div className="LowerLinkDivType">MSA Statement</div>
          <div className="LowerLinkDivType">Corporate contact</div>
          <div className="LowerLinkDivType">
            Content guidelines and reporting
          </div>
          <div className="LowerLinkDivType">MSA Statement</div>
        </div>
      </div>

      <p className="extranetLogin">Extranet Login</p>

      <div className="copyright">
        Copyright © 1996–2024 Booking.com™. All rights reserved
      </div>

      <div className="copyrightText">
        Booking.com is part of Booking Holdings Inc., the world leader in online
        travel and related services.
      </div>

      <div className="FooterBottomImages">
        <img src="./images/booking.png" />
        <img src="./images/priceline.png" />
        <img src="./images/kayak.png" />
        <img src="./images/aggoda.png" />
        <img src="./images/rentalcars.png" />
        <img src="./images/opentable.png" />
      </div>
    </>
  );
}
export default EmailAddress;
