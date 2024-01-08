import "./cities.css";
import {
  CityArray1,
  CityArray2,
  CityArray3,
  CityArray4,
} from "../../../Constant/constant";
function Cities() {
  return (
    <div className="regionContainer">
      <div className="regionChild">
        {CityArray1.map((val) => {
          return (
            <div className="RegionLinkProperties">
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {CityArray2.map((val) => {
          return (
            <div className="RegionLinkProperties">
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {CityArray3.map((val) => {
          return (
            <div className="RegionLinkProperties">
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {CityArray4.map((val) => {
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
export default Cities;
