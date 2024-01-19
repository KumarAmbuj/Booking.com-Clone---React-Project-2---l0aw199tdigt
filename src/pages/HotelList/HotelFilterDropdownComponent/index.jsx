import "./hotelFilterDropdownComponent.css";
function HotelFilterDropdownComponent(props) {
  const { onclick } = props;
  return (
    <div className="hotelFilterDropdownContainer">
      {props.filterArray.map((val, index) => {
        return (
          <div
            className="hotelFilterDropdownText"
            key={index}
            onClick={() => {
              onclick(index);
            }}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}
export default HotelFilterDropdownComponent;
