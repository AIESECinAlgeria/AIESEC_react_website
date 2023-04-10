import React from 'react'
import './HomepageC.css';

const  Globalv=()=> {
  return (

    <div className=' c gv'>
      
        <div className='col-5 gv-img '>
        <div className=' d-block col-10 ta-center'>
        <h1>Global<span className='cl4 pl10'>Volunteer</span></h1>
        </div>
        <img src={require('../img/gv.png')} alt='gv'/>
    
        </div>
        <div className='col-5 text-gv'>
        <h1>BECOME A VOLUNTEER</h1>
        <p>I got to experience the whole package 
        through Project ArchiTech, from interning in professional practice, volunteering, travelling through the 
        country, and making lasting friendships.</p>
        <img src={require('../img/readmore.png')} alt="read more" className=''/>
        {/* <a className='cl3'>Read more</a> */}
    
        </div>
    
    </div>
  )
}
export default Globalv

