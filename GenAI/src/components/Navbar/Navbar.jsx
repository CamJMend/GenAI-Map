import { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import image_logo from "../../assets/images/main_logo_white_X1.png";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import image_logo_white from "../../assets/images/main_logo_black.png";

const Navbar = () => {
  const { state, updateState } = useContext(GlobalContext);
  const [menu, setMenu] = useState("home");
  const location = useLocation(); // Getting the current location

  useEffect(() => {
    // Determine the menu based on the pathname
    const path = location.pathname; // '/home', '/map', '/search', '/about'
    if (path.includes("/map")) {
      updateState("theme", "light");
      setMenu("map");
    } else if (path.includes("/search")) {
      updateState("theme", "dark");
      setMenu("search");
    } else if (path.includes("/about")) {
      updateState("theme", "dark");
      setMenu("about");
    } else {
      updateState("theme", "dark");
      setMenu("home"); // Default to home
    }
  }, [location]); // Re-run this effect if the location changes

  return (
    <div className={`navbar ${state.theme == "light" ? "white" : ""}`}>
      <div className="navbar-image">
        <img
          src={state.theme == "light" ? image_logo_white : image_logo}
          alt="Logo de Wizeline negativo"
        />
      </div>
      <ul className={`nav-menu ${state.theme == "light" ? "white" : ""}`}>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>{" "}
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("map");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/map">
            Map
          </Link>
          {menu === "map" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("search");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/search">
            Search
          </Link>{" "}
          {menu === "search" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>{" "}
          {menu === "about" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
