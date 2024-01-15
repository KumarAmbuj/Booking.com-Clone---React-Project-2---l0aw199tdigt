import "./hotelFacilities.css";

import {
  FacilityTypeArray,
  FacilityTypeNameArray1,
  FacilityTypeNameArray2,
  FacilityTypeNameArray3,
} from "../../../Constant/constant";

function HotelFacility(props) {
  return (
    <div className="hotelFacilityContainer">
      <div className="hotelFacilityNameAndButton">
        <div className="hotelFacilityName">
          <div className="hotelFacilityNameBoldText">
            {`Facilities of ${props?.data?.name}`}
          </div>
          <div className="hotelFacilityNameLightText">
            Great facilities! Review score, 8.7
          </div>
        </div>
        <div className="hotelFacilityButton">
          <button>See availability</button>
        </div>
      </div>

      <div className="mostPopularText">Most popular facilities</div>

      <div className="facilityType">
        {FacilityTypeArray.map((val, index) => {
          return (
            <div className="facilityTypeName" key={index}>
              {val.name}
            </div>
          );
        })}
      </div>

      <div className="hotelTypeAndFacilities">
        <div>
          {FacilityTypeNameArray1.map((val) => {
            return (
              <>
                <div className="hotelTypeAndFacilitiesBoldText">{val.name}</div>
                {val.arr.map((value, index) => {
                  return (
                    <div className="hotelTypeAndFacilitiesLightText">
                      <i class="fa fa-check" aria-hidden="true"></i>{" "}
                      <span>{value}</span>
                    </div>
                  );
                })}
              </>
            );
          })}
          {/* <div className="hotelTypeAndFacilitiesBoldText">Bathroom</div>
          <div className="hotelTypeAndFacilitiesLightText">
            <i class="fa fa-check" aria-hidden="true"></i>{" "}
            <span>Toilet Paper</span>
          </div> */}
        </div>
        <div>
          {FacilityTypeNameArray2.map((val) => {
            return (
              <>
                <div className="hotelTypeAndFacilitiesBoldText">{val.name}</div>
                {val.arr.map((value, index) => {
                  return (
                    <div className="hotelTypeAndFacilitiesLightText">
                      <i class="fa fa-check" aria-hidden="true"></i>{" "}
                      <span>{value}</span>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
        <div>
          {FacilityTypeNameArray3.map((val) => {
            return (
              <>
                <div className="hotelTypeAndFacilitiesBoldText">{val.name}</div>
                {val.arr.map((value, index) => {
                  return (
                    <div className="hotelTypeAndFacilitiesLightText">
                      <i class="fa fa-check" aria-hidden="true"></i>{" "}
                      <span>{value}</span>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HotelFacility;
