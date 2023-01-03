import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { FiArrowDown } from "react-icons/fi";
// import { Container, Row, Col } from "react-bootstrap";
// import Faq from 'react-faq-component';
// import contactImg from "../assets/img/contact-img.svg";
// import contactImg from "./assets/img/contact-img.svg";
import 'animate.css';
import './Questions.css'
import './Faq.js';


const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "How can I avoid extra charges on my shipment?",
      content: "Most Common Reasons for Extra Charges on LTL Shipments:" + "<br>" +
        "Re-weigh Fee:  If the weight of your shipment is found to be more than what was booked, you will be charged the rate at the higher weight.  If your shipment weighs less, you will be charged the rate at the lower weight." + "<br>" +
        "Re-classification Fees:  If a freight carrier has quoted a shipment based on a Freight class/NMFC#, and the actual class is different for the items being shipped, a re-class adjustment can be applied.  Please make sure to use our Estimate Class button when quoting." + "<br>" +
        "Re-consignment Fees:  A re-consignment fee may be assessed when the freight is rerouted in transit orwhen the shipper did not use the provided Bill of Lading." + "<br>" +
        "Oversize/Overlength Fee:  Typically applies to shipments exceeding 8 feet in length. If the dimensions are factored into the quote in advance, this fee can be avoided." + "<br>" +
        "Lift-gate:  Lift-gate trucks are required for freight where the pick up or drop off location does not have an accessible dock to move the shipment directly off the truck.  Keep in mind that lift-gate service could affect the estimated transit time." + "<br>" +
        "Residential Pickup/Delivery:  Can apply to pick up or drop off locations that are not businesses. This can include businesses that are not visibly labeled to the public. To avoid this adjustment to a business, make sure the business name is accurately listed on the bill of lading." + "<br>" +
        "Limited Access:  An adjustment may be applied if the pick up or drop off location has limited access.  Limited access locations include camps, churches/temples, educational facilities, construction sites, fairs and carnivals, storage units, military bases, mine sites, some government facilities, schools, businesses located outside city limits, rural locations and farms. Limited access may also include commercial businesses not open to the walk-in public or where an employee is not available to assist with loading or unloading." + "<br>" +
        "Bill of Lading(BOL):  Changes to the BOL, including changes to the shipper address, consignee address, piece count, weight and freight call can result in adjustments if a carrier has based the freight quote on any of the provided information."
    },
    {
      title: "How do I determine my freight class?",
      content: "Freight classification is determined by the National Motor Freight Traffic Association, Inc. (NMFTA) Total shipment density, stowability, liability, and handling all factor into determining the correct freight class. We have also added a handy Estimate Class button on the quoting page to estimate your freight class using your piece weight and dimensions. If you have any further questions please contact us."
    },
    {
      title: "What should I know about my estimated transit time? ",
      content: "Transit times listed online are always in terms of business days and do not include the day of pickup, weekends, or holidays.  For example, if you are selecting a 3 day transit and the freight picks up on a Wednesday, estimate delivery would be the following Monday. Thursday, Friday, & Monday count as days 1, 2, & 3."
    },
    {
      title: "How can I track my shipment?",
      content: "When your order status changes, an email will be sent to theemail address associated to your login. You can also track your shipment in the system by entering your BOL#,Customer PO#, or Shipper Reference# in the tracking field on the Home Page."
    },
    {
      title: "What do I get by upgrading to Guaranteed Service?",
      content: "Upgrading to Guaranteed Service means if the carrier does not meet the stated transit time, you will not be charged the guaranteed fees." + "<br>" +
        "Helpful Tip –Guaranteed Shipments very rarely miss their transit time.  Keep in mind for those VIP customers where time is of the essence."
    },
    {
      title: "How can I help ensure a same day pickup?",
      content: "For standard pickups at a normal business with a dock, our LTL carriers typically need a 2-4 hour window from the time you place your order.  Pickups at CFS Stations and Airlines require a minimum of 24 hours notice. Please note, same day pickups are not guaranteed."
    },
    {
      title: "How does my Bill of Lading(BOL) get to the truck driver?",
      content: "It is your responsibility to send the TMS generated BOL to your shipper prior to pickup.  It is the responsibility of the shipper at the pickup location to hand the BOL to the truck driver when he/she arrives.  This process will help avoid any re-consignment charges."
    },
    {
      title: "Will accessorial services affect my transit time?",
      content: "Possibly yes.  Services such as lift gate, appointment prior to delivery, residential pickup/delivery may require additional time and preparation from the carrier and/or shipper/consignee."
    }
  ]
}

export const FaqQuestions = () => {




  return (
    <>
      <div className="faqBody">

        <h1 class="centerplease">
          Frequently Asked Questions
        </h1>
        <br />

        <div class="content">
          <div>
            <input type="checkbox" id="question1" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question1" class="question">
              How can I avoid extra charges on my shipment?
            </label>
            <div class="answers">
              `Most Common Reasons for Extra Charges on LTL Shipments:
              Re-weigh Fee:  If the weight of your shipment is found to be more than what was booked, you will be charged the rate at the higher weight.  If your shipment weighs less, you will be charged the rate at the lower weight.
              Re-classification Fees:  If a freight carrier has quoted a shipment based on a Freight class/NMFC#, and the actual class is different for the items being shipped, a re-class adjustment can be applied.  Please make sure to use our Estimate Class button when quoting.
              Re-consignment Fees:  A re-consignment fee may be assessed when the freight is rerouted in transit orwhen the shipper did not use the provided Bill of Lading.
              Oversize/Overlength Fee:  Typically applies to shipments exceeding 8 feet in length. If the dimensions are factored into the quote in advance, this fee can be avoided.
              Lift-gate:  Lift-gate trucks are required for freight where the pick up or drop off location does not have an accessible dock to move the shipment directly off the truck.  Keep in mind that lift-gate service could affect the estimated transit time.
              Residential Pickup/Delivery:  Can apply to pick up or drop off locations that are not businesses. This can include businesses that are not visibly labeled to the public. To avoid this adjustment to a business, make sure the business name is accurately listed on the bill of lading.
              Limited Access:  An adjustment may be applied if the pick up or drop off location has limited access.  Limited access locations include camps, churches/temples, educational facilities, construction sites, fairs and carnivals, storage units, military bases, mine sites, some government facilities, schools, businesses located outside city limits, rural locations and farms. Limited access may also include commercial businesses not open to the walk-in public or where an employee is not available to assist with loading or unloading.
              Bill of Lading(BOL):  Changes to the BOL, including changes to the shipper address, consignee address, piece count, weight and freight call can result in adjustments if a carrier has based the freight quote on any of the provided information.`</div>
          </div>

          <div>
            <input type="checkbox" id="question2" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question2" class="question">
              How do I determine my freight class?
            </label>
            <div class="answers">
              Freight classification is determined by the National Motor Freight Traffic Association, Inc. (NMFTA) Total shipment density, stowability, liability, and handling all factor into determining the correct freight class. We have also added a handy Estimate Class button on the quoting page to estimate your freight class using your piece weight and dimensions. If you have any further questions please contact us.
            </div>
          </div>

          <div>
            <input type="checkbox" id="question3" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question3" class="question">
              What should I know about my estimated transit time? ;
            </label>
            <div class="answers">
              Transit times listed online are always in terms of business days and do not include the day of pickup, weekends, or holidays.  For example, if you are selecting a 3 day transit and the freight picks up on a Wednesday, estimate delivery would be the following Monday. Thursday, Friday, & Monday count as days 1, 2, & 3.
            </div>
          </div>
          <div>
            <input type="checkbox" id="question4" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question4" class="question">
              How can I track my shipment?
            </label>
            <div class="answers">
              When your order status changes, an email will be sent to theemail address associated to your login. You can also track your shipment in the system by entering your BOL#,Customer PO#, or Shipper Reference# in the tracking field on the Home Page.
            </div>
          </div>
          <div>
            <input type="checkbox" id="question5" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question5" class="question">
              What do I get by upgrading to Guaranteed Service?
            </label>
            <div class="answers">
              Upgrading to Guaranteed Service means if the carrier does not meet the stated transit time, you will not be charged the guaranteed fees.
              Helpful Tip –Guaranteed Shipments very rarely miss their transit time.  Keep in mind for those VIP customers where time is of the essence.
            </div>
          </div>
          <div>
            <input type="checkbox" id="question6" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question6" class="question">
            How can I help ensure a same day pickup?
            </label>
            <div class="answers">
            For standard pickups at a normal business with a dock, our LTL carriers typically need a 2-4 hour window from the time you place your order.  Pickups at CFS Stations and Airlines require a minimum of 24 hours notice. Please note, same day pickups are not guaranteed.
            </div>
          </div>
          <div>
            <input type="checkbox" id="question7" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question7" class="question">
            How does my Bill of Lading(BOL) get to the truck driver?
            </label>
            <div class="answers">
            It is your responsibility to send the TMS generated BOL to your shipper prior to pickup.  It is the responsibility of the shipper at the pickup location to hand the BOL to the truck driver when he/she arrives.  This process will help avoid any re-consignment charges.
            </div>
          <div>
            <input type="checkbox" id="question8" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question8" class="question">
            Will accessorial services affect my transit time?
            </label>
            <div class="answers">
            Possibly yes.  Services such as lift gate, appointment prior to delivery, residential pickup/delivery may require additional time and preparation from the carrier and/or shipper/consignee.
            </div>
          </div>
        </div>
       </div>
      </div>

    </>
  )
}

export default FaqQuestions
