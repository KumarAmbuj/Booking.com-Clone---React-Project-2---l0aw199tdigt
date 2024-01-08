import "./placeOfInterest.css";

import {
  POIArray1,
  POIArray2,
  POIArray3,
  POIArray4,
  POIArray5,
} from "../../../Constant/constant";

function PlaceOfInterests() {
  return (
    <div className="regionContainer">
      <div className="regionChild">
        {POIArray1.map((val) => {
          return (
            <div className="RegionLinkProperties">
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {POIArray2.map((val) => {
          return (
            <div className="RegionLinkProperties">
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {POIArray3.map((val) => {
          return (
            <div className="RegionLinkProperties">
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {POIArray4.map((val) => {
          return (
            <div className="RegionLinkProperties">
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {POIArray5.map((val) => {
          return (
            <div className="RegionLinkProperties">
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default PlaceOfInterests;
