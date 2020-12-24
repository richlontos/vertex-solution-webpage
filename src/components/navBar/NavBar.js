import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo from "../data/images/logo.png"
import "../navBar/NavBarStyle.css"

// import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  Route,
  Routes,
  Link
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSecondDropdown, setshowSecondDropdown] = useState(false);
  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={'active navbar-link'}>Home</Nav.Link>
              {/* <Nav.Link href="/services" className={'active navbar-link'}>Our Services</Nav.Link> */}
              <Nav.Link href="/carriers" className={'active navbar-link'}>Carriers</Nav.Link>
              <Nav.Link href="/resources" className={'active navbar-link'}>Resources</Nav.Link>
              <Nav.Link href="/faq" className={'active navbar-link'}>FAQ</Nav.Link>
              <Nav.Link href="/contactus" className={'active navbar-link'}>Contact Us</Nav.Link>
              <Nav.Link href="/careers" className={'active navbar-link'}>Careers</Nav.Link>
              {/* <Dropdown class="drop-down closed"
                onMouseLeave={() => setShowDropdown(false)}
                onMouseOver={() => setShowDropdown(true)}>
                <Dropdown.Toggle variant="success" className="nav-button" id="dropdown-basic">
                  Company
                </Dropdown.Toggle>

                <Dropdown.Menu id="dropMenu" show={showDropdown}>
                  <Dropdown.Item id="itemColor" href="/resources">Resources</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/faq">FAQ</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/contactus">Contact Us</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/careers">Careers</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <Dropdown class="drop-down closed"
                onMouseLeave={() => setshowSecondDropdown(false)}
                onMouseOver={() => setshowSecondDropdown(true)}>
                <Dropdown.Toggle href="/ourservices" variant="success" className="nav-button" id="dropdown-basic">
                  Our Services
                </Dropdown.Toggle>

                <Dropdown.Menu id="dropMenu"show={showSecondDropdown}>
                  <Dropdown.Item id="itemColor" href="/FTL">FTL</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/LTL">LTL</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/Rail">Rail</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/Air">Air</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/Ocean">Ocean</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/Volume">Volume</Dropdown.Item>
                  <Dropdown.Item id="itemColor" href="/Warehouse">Warehousing and Distribution</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="https://vertexsolutions.taicloud.net/Main/Home" className="navbar-link">Track shipment/Login</Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div> */}
              <HashLink to='/test'>
                <button className="vvd"><span>Request a Qoute</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
