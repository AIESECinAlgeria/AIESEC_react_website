import React from 'react'
import '../Components/HomepageCC.css';

const  Exprience=()=> {
  return (
   
    <div class=" container-fluid ">
        <div class=" Experience_Section row p-4  mt-5">
               <div class="col-md-6  pt-md-5 pt-0">
                     <h1 className="h3">Live the experience with <span className='cl3'>AIESEC</span> </h1>
                     <div class="mt-4 content">
                        <p >Found a project of your liking?<br/>
                             hurry up and apply and get matched!</p>
                      </div>
                      <div className="mt-3 pt-3  w-50">
                      <button className='btn btn-primary w-md-100 w-75 '>Apply now</button>
                          
                      </div>
               </div>
               <div class="col-md-6 center p-md-5 p-0 mt-md-0 mt-5">
                     <img  className="w-md-50 w-75  center text-center rounded mx-auto d-block "src={require('../img/live the experience.jpg')} alt="experience" />
               </div>      
                     
        </div>
    </div>
    
  )
}
export default Exprience

