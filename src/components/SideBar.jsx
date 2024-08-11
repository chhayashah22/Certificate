import React, { useState } from "react";
import { FaTachometerAlt, FaCertificate, FaEdit } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineBatchPrediction } from "react-icons/md";
import { logout } from "./Logout";
import { CiLogout } from "react-icons/ci";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Main-page'>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <IoMenu style={{ fontSize: '30px' }} />
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/Admin" activeClassName="active">
              <FaTachometerAlt style={{ fontSize: '30px', padding: '6px' }} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/certificates" activeClassName="active">
              <FaCertificate style={{ fontSize: '30px', padding: '6px' }} />
              <span>Certificates</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Home" activeClassName="active">
              <FaEdit style={{ fontSize: '30px', padding: '6px' }} />
              <span>Editor</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Batch" activeClassName="active">
              <FaEdit style={{ fontSize: '30px', padding: '6px' }} />
              <span>Batch</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/plandetails" activeClassName="active">
              <MdOutlineBatchPrediction style={{ fontSize: '30px', padding: '3px' }} />
              <span>Upgrade</span>
            </NavLink>
          </li>
          <li>
            <span id="logout" onClick={logout}>
              <CiLogout style={{ fontSize: '30px', padding: '3px' }} /> Sign Out
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
