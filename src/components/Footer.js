import React from "react";
import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";
import logo from "./data/images/logo.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <img src={logo} alt="Logo" />
                </div>
                {/* <div class="footer-text">
                  <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.</p>
                </div> */}
                <div class="footer-social-icon">
                  <Col size={12} sm={4} className="text-center text-sm-end">
                    <div className="social-icon">
                      <a href="#">
                        <img src={navIcon2} alt="Icon" />
                      </a>
                      <a href="#">
                        <img src={navIcon3} alt="Icon" />
                      </a>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div>
                <h3 style={{ paddingLeft: "30px" }}>Useful Links</h3>
              </div>
              <br />
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="/aboutus">About us</a>
                </li>
                <li>
                  <a href="#skills">Our Services</a>
                </li>
                <li>
                  <a href="/contactus">Contact</a>
                </li>
                <li>
                  <a href="https://vertexsolutions.taicloud.net/Main/Home">
                    Track Shipment
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-cta pt-4 pb-5">
                  <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="cta-text">
                          <h4>Find us</h4>
                          <span>
                            <a href="https://www.google.co.uk/maps/place/1675+N+Main+St,+Orange,+CA+92865/@33.8154031,-117.8691972,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd70d8d8c4d91:0x69b23414b24dbdee!8m2!3d33.8154031!4d-117.8670085">
                              1675 N Main St, Orange, CA 92865
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                        <i class="fas fa-phone"></i>
                        <div class="cta-text">
                          <h4>Call us</h4>
                          <span>
                            <a href="tel:5629667406">(562)966-7406</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                      <div class="single-cta">
                        <i class="far fa-envelope-open"></i>
                        <div class="cta-text">
                          <h4>Mail us</h4>
                          <span>
                            <a href="mailto:csr@vertex4solutions.net">
                              csr@vertex4solutions.net
                            </a>
                          </span>
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
          <div>
            <div>
              <div class="footer-menu">
                <ul>
                  <li>
                    <a href="#">TERMS & CONDITIONS</a>
                  </li>
                  <li>
                    <a href="#">PRIVACY POLICY</a>
                  </li>
                  <li>
                    <a href="#">TERMS OF USE</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div class="copyright-text">
                <p>
                  Copyright &copy; {currentYear}, All Rights Reserved. Design by{" "}
                  <a href="https://www.linkedin.com/in/richard-lontos/">
                    Richard Lontos
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>         
          <div size={12} sm={6} id="importantdocs">
            <div>
              <a href="#">
                TERMS & CONDITIONS
              </a>
              <a href="#">
                PRIVACY POLICY 
              </a>
              <a href="#">
                TERMS OF USE
              </a>
            </div>
          </div>
      </div> */}
    </footer>
  );
};
