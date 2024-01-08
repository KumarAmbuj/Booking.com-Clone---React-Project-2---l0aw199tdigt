import "./filterComponent.css";
function FilterComponent(props) {
  return (
    <div className="filterComponent">
      <div className="filterCoponentHeader">{props.data.name}</div>
      {props.data.arr.map((val) => {
        return (
          <div className="inputBox">
            <div>
              <input type="checkbox" />{" "}
              <span className="filterName">{val.name}</span>
            </div>
            <div>
              <span className="filterNumber">{val.number}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default FilterComponent;
