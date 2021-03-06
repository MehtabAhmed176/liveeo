import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
function NavigationBar() {
  return (
    <div className="topnav">
      <div>
        <Link to="/" style={{ marginLeft: "70px" }}>
          LiveEO
        </Link>
      </div>
      <div style={{ position: "relative" }}>
        <NavLink to="/map">Map</NavLink>
        <NavLink to="/task">Tasks</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/comments">Comments</NavLink>
        <NavLink to="/admin" className="admin-btn">
          Admin
        </NavLink>
        <div className="avatar-position">
          <NavLink to="/profile" className="avatar">
            L
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
