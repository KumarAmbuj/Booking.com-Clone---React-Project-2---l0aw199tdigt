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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"18px"}
            width={"18px"}
            style={{ marginRight: "10px" }}
          >
            <path
              fill={"blue"}
              d="M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25h-9.5zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zM7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zM15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5zM19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"
            ></path>
          </svg>
          Beach
        </button>
        <button
          onClick={() => handleSliderType(2)}
          id={sliderType === 2 ? "active" : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"18px"}
            width={"18px"}
            style={{ marginRight: "10px" }}
          >
            <path d="M.153 22.237l.85 1.117c.634.76 1.724.856 2.456.244.078-.066.15-.138.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.161 7.161 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.673 8.673 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.729 1.729 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.536 10.536 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.229.229 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883l2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492z"></path>
          </svg>
          City
        </button>
        <button
          onClick={() => handleSliderType(3)}
          id={sliderType === 3 ? "active" : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"18px"}
            width={"18px"}
            style={{ marginRight: "10px" }}
          >
            <path d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"></path>
          </svg>
          Romance
        </button>
        <button
          onClick={() => handleSliderType(4)}
          id={sliderType === 4 ? "active" : ""}
        >
          <span
            data-testid="webcore-filter-carousel-tab-icon"
            className="fcd9eec8fb bf9a32efa5"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={"18px"}
              width={"18px"}
              style={{ marginRight: "10px" }}
            >
              <path d="M16.5 3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-10.5 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm13.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm-12 .75a.75.75 0 0 1-.75-.75 6.734 6.734 0 0 0-3.642-5.994.75.75 0 0 1-.167-1.207l4.043-3.842a.75.75 0 0 1 1.187.208c.062.116.143.252.263.429.197.289.429.577.697.848.8.809 1.758 1.308 2.869 1.308a.75.75 0 0 1 0 1.5 5.564 5.564 0 0 1-4.137-1.966.75.75 0 0 0-1.089-.058l-1.452 1.38a.75.75 0 0 0 .031 1.116 8.22 8.22 0 0 1 2.897 6.277.75.75 0 0 1-.75.751zm0 1.5a2.25 2.25 0 0 0 2.25-2.25 9.72 9.72 0 0 0-3.425-7.421l.03 1.114 1.453-1.38-1.089-.059a7.07 7.07 0 0 0 5.268 2.496A2.25 2.25 0 1 0 16.5 9c-.656 0-1.26-.315-1.803-.863a4.554 4.554 0 0 1-.695-.914 2.25 2.25 0 0 0-3.552-.604l-4.043 3.842a2.25 2.25 0 0 0 .51 3.626 5.236 5.236 0 0 1 2.833 4.662A2.25 2.25 0 0 0 12 21z"></path>
            </svg>
          </span>
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
