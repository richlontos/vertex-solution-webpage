import React from 'react'
import { Heading } from "./common/Heading"
import { contact } from "./data/dummydata"

function ContactTab() {
  return (
    <div className='contact'>
      <div className='container'>
        <Heading title='Contact Us' />
        <div className='content flexsb'>
          <div className='right'>
            <form>
              <div className='flex'>
                <input type='text' placeholder='Name' data-aos='flip-left' />
                <input type='email' placeholder='Email' data-aos='flip-right' />
              </div>
              <input type='email' placeholder='Subject' data-aos='flip-up' />
              <textarea name='Message' placeholder='Message' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
              <button style={{ 'backgroundColor': 'rgba(255, 255, 255, 0.1)', 'border': '1px solid rgba(255, 255, 255, 0.5)', 'color': 'white' }} data-aos='zoom-in-up'>Submit</button>
            </form>
          </div>
          <div className='left'>
            <iframe width="300" height="360" id="gmap_canvas" src="https://maps.google.com/maps?q=1675%20N%20Main%20St,%20Orange,%20CA%2092865&t=k&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ContactTab