import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Sidebar from "./Sidebar.js";
import "./Navbar.css";
import DropdownButton from './DropdownButton';

function Navbar() {

    const events = [
        { name: 'Annual Talent Search', link: '/ats' },
        { name: 'Kshitij', link: '/kshitij' },
        { name: 'Annual Day', link: '/annual-day' },
    ];

    const team = [
        { name: 'Student Body', link: '/team' },
        { name: 'Teacher Body', link: '/teachers' },
        { name: 'Our Teams', link: '/our-teams' }
    ];

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="MCC Logo"></img>
                        <div className="navbar-header-parent">
                            <div className="navbar-header">Mithibai</div>
                            <div className="navbar-header">Cultural</div>
                            <div className="navbar-header">Committee</div>
                        </div>
                    </Link>
                </div>

                <div className="menu-icon">
                    <Sidebar outerContainerId={'menu-icon'} />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/achievements" className="nav-links">
                            Achievements
                        </Link>
                    </li>

                    <li className="nav-item">
                     <DropdownButton items = {events} name="Events" />
                    </li>

                    <li className="nav-item">
                     <DropdownButton items = {team} name="Team" />
                    </li>

                    <li className="nav-item">
                        <Link to="/alumni" className="nav-links">
                            Alumni
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/gallery" className="nav-links">
                            Gallery
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;