import React from 'react'
import './HomepageC.css';

const  Exprience=()=> {
  return (

    <div className='bg'>
      <div className=' c exprience'>
          <div className='col-5 text'>
              <h1>Live the experience with <span className='cl3'>AIESEC</span></h1>
              <p>Found a project of your liking?</p>
              <p>hurry up and apply and get matched!</p>
              <button className='btn'>Apply now</button>
          </div>
          <div className='col-5 exp-img'>
          <img className='front' src={require('../img/img5.png')} alt='exprience'/>
          <img src={require('../img/img4.png')} alt='exprience'/>
          </div>
      
      </div>
    </div>
  )
}
export default Exprience

