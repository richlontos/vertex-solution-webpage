import React from "react";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import "../BestInClass/BestInClass.css";

export const BestInClass = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="aboutB" id="aboutB">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="aboutB-bx wow zoomIn" style={{ color: "gainsboro" }}>
              <h2>Best-in-Class LTL Carrier Network</h2>
              <p>
                Vertex Solutions works with quality truckload and LTL carriers to
                safely and efficiently move your freight. With over 75+ LTL and
                45,000+ TL carriers in our network, you get the capacity and
                efficiency you need with competitive pricing and cost savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
