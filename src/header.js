import { Link, NavLink } from "react-router-dom";
import logo from "./rp-logo.png";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="RP logo"
          title="Course Enrolment Portal"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
            Home
        </NavLink>
        <NavLink to="/diplomas" className={getClass}>
            Diplomas
        </NavLink>
        <NavLink to="/register" className={getClass}>
            Register
        </NavLink>
        <NavLink to="/confirmation" className={getClass}>
            Confirmation
        </NavLink>
      </nav>
    </header>
  );
}
