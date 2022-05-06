import { LangMenu } from "./Navitems";
import "./Dropdown.css";
import { useState } from "react";

export const Dropdown = (props) => {
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <>
      <ul
        className={showDropdown ? "submenu" : "hideSubmenu"}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {props.data.map((elem) => (
          <li key={elem.id} className="submenu-items">
            <span>{elem.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
