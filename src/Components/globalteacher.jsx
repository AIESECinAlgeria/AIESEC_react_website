import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomepageC.css';



const  GlobalT=()=> {
  return (

    <div className=' c gv flex-row-reverse'>
      
        <div className='col-5 gv-img '>
        <div className='  volenteer d-block col-10 ta-center '>
        <h1>Global<span className='cl4 pl10 '>Volunteer</span></h1>
        </div>
        <img  className="mt-3"src={require('../img/gv.png')} alt='gv'/>
    
        </div>
        <div className='col-5 text-gv volenteer'>
        <h1>BECOME A VOLUNTEER</h1>
        <p>I got to experience the whole package 
        through Project ArchiTech, from interning in professional practice, volunteering, travelling through the 
        country, and making lasting friendships.</p>
        <img src={require('../img/readmore.png')}  className="img "alt="read more" />
        {/* <a className='cl3'>Read more</a> */}
    
        </div>
    
    </div>
  )
}
export default GlobalT

