import React from "react"
import Slider from "react-slick"
import { testimonials } from "../data/dummydata"
import { FormatQuote } from "@mui/icons-material"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Heading } from "../common/Heading"


export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='testimonials hero'>
        <div className='container'>
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className='box'>
                <Heading  title='What our customers are saying'/>
                <i data-aos='zoom-out-up'>
                  <FormatQuote />
                </i>
                <p data-aos='zoom-out-down'>{val.text}</p>
                <div className='img' data-aos='zoom-out-right'>
                  <img src={val.image} alt='' />
                </div>
                <h3 data-aos='zoom-out-left'>{val.name}</h3>
                {/* <label className="labelServices" data-aos='zoom-out'>{val.post}</label> */}
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}


export default testimonials;