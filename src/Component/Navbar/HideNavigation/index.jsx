import "./hideNavigation.css";
function HideNavigation(props) {
  return (
    <div className="hideNavigationContainer">
      <div className="crossButton">
        <i class="fa fa-times" aria-hidden="true" onClick={props.onclick}></i>
      </div>

      <div className="more">More</div>

      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Indian Rupee</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">
          <img
            src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png"
            style={{ height: "25px", width: "25px", borderRadius: "50%" }}
          />
        </div>
        <div className="hideMenuName">Indian Rupee</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Genius loyalty prograamme</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">List your property</div>
      </div>
      <div className="menuHeader">Help and support</div>

      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Customer service help</div>
      </div>

      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Grievance officer</div>
      </div>

      <div className="menuHeader">Inspiration</div>

      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Seasonal and holiday deals</div>
      </div>

      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Travel articles</div>
      </div>

      <div className="menuHeader">Settings and legal</div>

      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">About Booking.com</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Careers</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Become an affiliate</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Press centre</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Privacy & cookies</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Terms and conditions</div>
      </div>
      <div className="hideMenuItem" style={{ marginBottom: "30px" }}>
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Legal</div>
      </div>
    </div>
  );
}
export default HideNavigation;
