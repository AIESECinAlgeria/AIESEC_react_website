import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global-talent.css"


 function GlobalTalent() {
  return (
    
    <div class=" container-fluid  mb-md-5 mb-0 p-5 ">
       <h1 className="h4 fw-bold text-center mb-5 pb-5 ">Our Prouduct</h1>
        <h2 class="h5"> Global <span>Talent</span></h2>
        <div className="row  mt-3">
             <div className="col-md-6  ">
             <img src={require('../img/Global_talent.jpg')}  className="img w-75 rounded text-center center  "alt="read more" />
             </div>
             <div className="col-md-6  interne">
                <h1 className=" text-dark h5 pt-3 intern-title text-md-left ">BECOME AN INTERN</h1>
                <p className='h4 pt-4 feedback'>“I had a chance to do a lot of 
                      research, to read a lot of papers, 
                       and to give recommendations to 
                       know what can be implemented 
                         and will help the startup strategically."</p>
             </div>
        </div>
    </div>
)}
export default  GlobalTalent;
         
    
       
        
        
    
  

