import { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import image_logo from "../../assets/images/main_logo_white_X1.png";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import image_logo_white from "../../assets/images/main_logo_black.png";

const Navbar = () => {
  const { state, updateState } = useContext(GlobalContext);
  const [menu, setMenu] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the window on mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    // Determine the menu based on the pathname
    if (path.includes("/map")) {
      setMenu("map");
    } else if (path.includes("/search")) {
      setMenu("search");
    } else if (path.includes("/about")) {
      setMenu("about");
    } else {
      setMenu("home"); // Default to home
    }
    const theme = menu === "map" ? "light" : "dark";
    updateState("theme", theme);
  }, [location]);

  return (
    <div className={`navbar ${state.theme === "light" ? "white" : ""}`}>
      <div className="navbar-image">
        <img
          src={state.theme === "light" ? image_logo_white : image_logo}
          alt="Logo"
        />
      </div>
      <ul className={`nav-menu ${state.theme === "light" ? "white" : ""}`}>
        {["home", "map", "search", "about"].map((item) => (
          <li key={item} onClick={() => setMenu(item)}>
            <Link
              to={`/${item === "home" ? "" : item}`}
              className={menu === item ? "active" : ""}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {menu === item && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
