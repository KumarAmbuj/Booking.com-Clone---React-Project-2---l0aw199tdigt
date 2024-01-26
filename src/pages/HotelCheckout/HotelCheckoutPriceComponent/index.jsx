import { memo } from "react";
import "./hotelCheckoutPriceComponent.css";

function HotelCheckoutPriceComponent(props) {
  const { data, index } = props;
  return (
    <div className="hotelCheckoutPriceContainer">
      <div className="hotelCheckoutPriceSmmaryText">Your price summary</div>
      <div className="hotelCheckoutPriceBox">
        <div className="hotelCheckoutPriceBoldText">Price</div>
        <div>
          <div className="hotelCheckoutPriceBoldText">
            ₹ {data.rooms[index].costDetails.baseCost}
          </div>
          <div className="hotelCheckoutPriceLightText">
            +₹ {data.rooms[index].costDetails.taxesAndFees} taxes and charges
          </div>
        </div>
      </div>

      <div className="priceInfo">Price information</div>
      <div className="imageAndTaxFlex">
        <div>
          <svg
            className="bk-icon -streamline-accounting_bills"
            height="20"
            width="20"
            viewBox="0 0 24 24"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4.125 8.25a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm12.75 5.25a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm2.625-3V15a.75.75 0 0 1-.75.75H2.25A.75.75 0 0 1 1.5 15V6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75v4.5zm1.5 0V6a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 6v9a2.25 2.25 0 0 0 2.25 2.25h16.5A2.25 2.25 0 0 0 21 15v-4.5zm-8.25 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM22.5 9v9a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 0 0 1.5h16.5A2.25 2.25 0 0 0 24 18V9a.75.75 0 0 0-1.5 0z"></path>
          </svg>
        </div>
        <div>
          <div>
            Excludes ₹ {data.rooms[index].costDetails.taxesAndFees}.80 in taxes
            and charges
          </div>
          <div className="taxPriceFlex">
            <div>Goods & services tax</div>
            <div>₹ {data.rooms[index].costDetails.taxesAndFees}.80</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(HotelCheckoutPriceComponent);
