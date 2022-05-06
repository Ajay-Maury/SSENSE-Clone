import "./Navbar.css";
import { AccountMenu, LangMenu, NavItemsLeft, NavItemsRight } from "./Navitems";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

export const Navbar = () => {
  const [dropdownLang,setDropdownLang] = useState(false)
  // const [isAuth,setISAuth] = useState(false)
  const [dropdownAcc,setDropdownAcc] = useState(false)
  return (
    <>
      <div className="nav-container">
      <div className="nav">
        <div className="nav-box1">
          <ul className="nav-item">
            {NavItemsLeft.map((item) => (
              <li className="nav-items" key={item.id}>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-box2">
          {/* <span className="logo">SSENSE</span> */}
          <a href="/" className="logo">SSENSE</a>
        </div>
        <div className="nav-box3">
          <ul className="nav-item">
            {NavItemsRight.map((item) => {
              if (item.title === "ENGLISH") {
                return (
                  <li
                    className="nav-items"
                    key={item.id}
                    onMouseEnter={() => setDropdownLang(true)}
                    onMouseLeave={() => setDropdownLang(false)}
                  >
                    <span>{item.title}</span>
                    {dropdownLang && <Dropdown data={LangMenu} />}
                  </li>
                );
              }
              else if (item.title === "ACCOUNT") {
                return (
                  <li
                    className="nav-items"
                    key={item.id}
                    onMouseEnter={() => setDropdownAcc(true)}
                    onMouseLeave={() => setDropdownAcc(false)}
                  >
                    <span>{item.title}</span>
                    {dropdownAcc && <Dropdown data={AccountMenu} />}
                  </li>
                );
              }
              return (
                <li className="nav-items" key={item.id}>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
      </>
  );
};
