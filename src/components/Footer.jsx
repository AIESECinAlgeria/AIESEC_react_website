import React from 'react'
import './HomepageC.css';


const  footer=()=> {
  return (
    <div className='footer c'>
      <div className="flex">
      <div className='grid2 col-64'>
        <div>
          <h4 className=''>About</h4>
          <p>About us</p>
          <p>Annual Report</p>
        </div>
        <div>
          <h4 className=''>Organizations</h4>
          <p>Partner with us</p>
          <p>Pricing</p>
        </div>
        <div>
          <h4 className=''>Youth</h4>
          <p>Youth 4 Global Goals</p>
          <p>Youth Speak</p>
        </div>
        <div>
          <h4 className=''>Membership</h4>
          <p>Join Us</p>
          <p>Find your country!</p>
        </div>
      </div>
      <div className='col-36'>
        <h4>NEWSLETTER</h4>
        <p>Stay update with last offers and news</p>
        <form action="">
          <input type="text" placeholder='Enter your Email' />
          <button className='btn'>Send</button>
        </form>
        <div className='mt38'>
        <a><img src={require('../img/fb.png')} alt='fb' /></a>
        <a><img src={require('../img/Instagram.png')} alt='fb'/></a>
        <a><img src={require('../img/twitter.png')} alt='fb'/></a>
        <a><img src={require('../img/whatsup.png')} alt='fb'/></a>

        </div>
      </div>
      </div>
      <div className="col-10 copyright"><p>©  1948-2022 AIESEC</p></div>
    </div>
  )
}
export default footer

