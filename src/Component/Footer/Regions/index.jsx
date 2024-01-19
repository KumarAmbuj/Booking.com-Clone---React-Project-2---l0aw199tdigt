import LinkProperties from "../LinkProperties";
import "./regions.css";
import {
  RegionArray1,
  RegionArray2,
  RegionArray3,
  RegionArray4,
  RegionArray5,
} from "../../../Constant/constant";

function Regions() {
  return (
    <div className="regionContainer">
      <div className="regionChild">
        {RegionArray1.map((val, index) => {
          return (
            <div className="RegionLinkProperties" key={index}>
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {RegionArray2.map((val, index) => {
          return (
            <div className="RegionLinkProperties" key={index}>
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {RegionArray3.map((val, index) => {
          return (
            <div className="RegionLinkProperties" key={index}>
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {RegionArray4.map((val, index) => {
          return (
            <div className="RegionLinkProperties" key={index}>
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
      <div className="regionChild">
        {RegionArray5.map((val, index) => {
          return (
            <div className="RegionLinkProperties" key={index}>
              <div className="RegionLink">{val.name}</div>
              <div className="RegionProperties">{val.property}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Regions;
