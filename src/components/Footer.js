import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="container">

        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <h2 style={{ textDecoration: "none" }}>CESAR FB</h2 >
                </div>
                <div class="footer-text">
                  <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="footer-social-icon">
                  <Col size={12} sm={4} className="text-center text-sm-end">
                    <div className="social-icon">
                      <a href="#"><img src={navIcon2} alt="Icon" /></a>
                      <a href="#"><img src={navIcon3} alt="Icon" /></a>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">about</a></li>
                  <li><a href="#skills">Our Services</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="https://cargoexpress.taicloud.net/">Track Shipment</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-cta pt-5 pb-5">
                  <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="cta-text">
                          <h4>Find us</h4>
                          <span>1010 Avenue, sw 54321, chandigarh</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                        <i class="fas fa-phone"></i>
                        <div class="cta-text">
                          <h4>Call us</h4>
                          <span>9876543210 0</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                        <i class="far fa-envelope-open"></i>
                        <div class="cta-text">
                          <h4>Mail us</h4>
                          <span>mail@info.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                      <button><i class="fab fa-telegram-plane"></i></button>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>Copyright &copy; 2022, All Rights Reserved.
                   Design by <a href="https://www.linkedin.com/in/richard-lontos/">Richard Lontos</a></p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              {/* <div class="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>


      {/* <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container> */}
    </footer>
  )
}
