import { useState } from "react";
import "../../style/main.css";

function Dropdown({ selected, setSelected, option }) {
  const [isActive, setIsActive] = useState(false);
  console.log(option);
  const options = ["신입", "경력", "경력무관"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        {selected}
        <i className="fas fa-caret-down" aria-hidden="true"></i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map(option => (
            <div
              onClick={e => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
