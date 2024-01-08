import "./getInstantDiscount.css";

function GetInstantDiscount() {
  return (
    <div className="getInstantDiscountContaniner">
      <div className="getInstantDiscountImage">
        <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/GlobeGeniusBadge.png" />
      </div>
      <div className="getInstantDiscountText">
        <div className="getInstantDiscountBoldText">Get instant discounts</div>
        <div className="getInstantDiscountLightText">
          Simply sign into your Booking.com account and look for the{" "}
        </div>
        <div className="getInstantDiscountLightText">
          blue Genius logo to save
        </div>

        <div className="getInstantDiscountButtons">
          <button id="Active">Sign in</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}
export default GetInstantDiscount;
