import "./NavBar.css";
import { Link } from "react-router-dom";
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from "../../utilities/users-service";
import { FaBars, FaTimes, FaSyringe } from "react-icons/fa";
import { useState } from "react";

export default function NavBar({ user, setUser }) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
      <div className="nav-bar container">
        <nav className="navbar-container container">
          <Link to="/" className="navbar-logo">
            DiaBuddy
          </Link>
          <FaSyringe className="navbar-icon" />

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <div className="nav-item">
              <Link to="/selectmeal/new" className="nav-links">
                Select Restaurant
              </Link>
              <Link to="/selectmeal" className="nav-links">
                Meal History
              </Link>
              Welcome, {user.name}
              <Link to="" className="nav-links" onClick={handleLogOut}>
                Log Out
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
