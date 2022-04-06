import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
function NavigationBar() {
  return (
    <div class="topnav">
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
        <NavLink to="/admin" style={{marginRight:"55px"}}>Admin</NavLink>
        <div style={{position:"absolute",top:"-27px",right:"-22px"}}>
          <p className="avatar">L</p>
        </div>
      </div>
      
    </div>
  );
}

export default NavigationBar;
