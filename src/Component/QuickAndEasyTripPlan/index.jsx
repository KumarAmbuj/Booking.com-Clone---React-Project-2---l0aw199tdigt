import { useState } from "react";
import "./quickAndEasyTripPlan.css";
import BeachSlider from "./BeachSlider";
import CitySlider from "./CitySlider";
import RomanceSlider from "./RomanceSlider";
import OutdoorsSlider from "./OutdoorsSlider";
function QuickAndEasyTripPlan() {
  const [sliderType, setSliderType] = useState(1);
  function handleSliderType(val) {
    setSliderType(val);
  }
  return (
    <div className="quickAndEasyTripPlanContainer">
      <div className="quicAndEasyBoldText">Quick and easy trip planner</div>
      <div className="quicAndEasyLightText">
        Pick a vibe and explore the top destinations in India
      </div>
      <div className="quickAndEasyButtons">
        <button
          onClick={() => handleSliderType(1)}
          id={sliderType === 1 ? "active" : ""}
        >
          Beach
        </button>
        <button
          onClick={() => handleSliderType(2)}
          id={sliderType === 2 ? "active" : ""}
        >
          City
        </button>
        <button
          onClick={() => handleSliderType(3)}
          id={sliderType === 3 ? "active" : ""}
        >
          Romance
        </button>
        <button
          onClick={() => handleSliderType(4)}
          id={sliderType === 4 ? "active" : ""}
        >
          Outdoor
        </button>
      </div>

      {sliderType === 1 && <BeachSlider />}
      {sliderType === 2 && <CitySlider />}
      {sliderType === 3 && <RomanceSlider />}
      {sliderType === 4 && <OutdoorsSlider />}
    </div>
  );
}
export default QuickAndEasyTripPlan;
