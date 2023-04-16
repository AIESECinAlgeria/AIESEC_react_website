import React from 'react'
import '../Components/HomepageCC.css';

const  Exprience=()=> {
  return (

    <div className='bg'>
      <div className=' c exprience'>
          <div className='col-5 text no-margin '>
            
              <h1>Live the experience with <span className='cl3'>AIESEC</span></h1>
              <div class="mt-5">
              <p>Found a project of your liking?</p>
              <p>hurry up and apply and get matched!</p>
              </div>
              <button className='btn btn-primary w-md-25  w-sm-100'>Apply now</button>
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

