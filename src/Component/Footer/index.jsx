import { useState } from "react";
import "./footer.css";

import Regions from "./Regions";
import Cities from "./Cities";
import PlaceOfInterests from "./PlaceOfInterests";
import EmailAddress from "./EmailAddress";

function Footer() {
  const [regionButtonType, setRegionType] = useState(1);
  function handleRegionClick(val) {
    setRegionType(val);
  }
  return (
    <>
      <div className="FooterContainer">
        <div className="destination">Destinations we love</div>
        <div className="regionsButtons">
          <button
            className={`regionButton`}
            id={regionButtonType === 1 ? "active" : ""}
            onClick={() => handleRegionClick(1)}
          >
            Regions
          </button>
          <button
            className={`regionButton `}
            id={regionButtonType === 2 ? "active" : ""}
            onClick={() => handleRegionClick(2)}
          >
            Cities
          </button>
          <button
            className={`regionButton `}
            id={regionButtonType === 3 ? "active" : ""}
            onClick={() => handleRegionClick(3)}
          >
            Places of interests
          </button>
        </div>

        <div className="regionComponent">
          {regionButtonType === 1 && <Regions />}
          {regionButtonType === 2 && <Cities />}
          {regionButtonType === 3 && <PlaceOfInterests />}
        </div>
      </div>
      {/* <EmailAddress /> */}
    </>
  );
}
export default Footer;
