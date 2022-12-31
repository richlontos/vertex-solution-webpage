import React from "react"
import { Heading } from "../common/Heading"
import { blog } from "../data/dummydata"

export const BlogVolume = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading title='Why Ship with Vertex Solutions' />
          <div className='content grid3'>
            {blog.map((item) => (
              <div className='box' data-aos='flip-left'>
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover} alt='' data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  {/* <label data-aos='fade-left'>
                    By {item.aut
                  </label> */}
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogVolume;