import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Components/AuthContext';

const GuestHeader = () => {
  const [active, setActive] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setActive(!active);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{
      backgroundColor: '#CCD3CA'
    }}>
      <div className="container-fluid mx-4">
      <Link className="navbar-brand d-flex align-items-center" to="/">
          <em className="fw-bold text-success">Treks</em>
          <span className="text-dark">Safari</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={active} aria-label="Toggle navigation">
          {active ? <AiFillCloseCircle className="icon" /> : <GiHamburgerMenu className="icon" />}
        </button>
        <div className={`collapse navbar-collapse ${active ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/guestdashboard' className="nav-link">Dashboard</Link>
            </li>
            {/* <li className="nav-item">
              <Link to='/guestbooking' className="nav-link">Bookings</Link>
            </li>
            <li className="nav-item">
              <Link to='/guesttourpage' className="nav-link">Tours</Link>
            </li>
            <li className="nav-item">
              <Link to='/guestguide' className="nav-link">Guide</Link>
            </li> */}
          </ul>
          <div className="d-flex">
            <button onClick={handleLogout} className="btn btn-outline-primary">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GuestHeader;
