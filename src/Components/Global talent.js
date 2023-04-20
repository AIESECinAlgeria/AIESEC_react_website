import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global-talent.css"


 function GlobalTalent() {
  return (
    
    <div class=" container-fluid  mb-md-5 mb-0 p-5 ">
       <h1 className="h4 fw-bold text-center mb-3 ">Our Prouduct</h1>
        <h2> Global <span>Talent</span></h2>
        <div className="row  mt-5">
             <div className="col-md-6  ">
             <img src={require('../img/Global_talent.jpg')}  className="img w-75 rounded text-center center  "alt="read more" />
             </div>
             <div className="col-md-6  interne">
                <h1 className=" text-dark h4 pt-3 text-md-left ">BECOME AN INTERN</h1>
                <p className='h3 pt-4 '>“I had a chance to do a lot of 
                      research, to read a lot of papers, 
                       and to give recommendations to 
                       know what can be implemented 
                         and will help the startup strategically."</p>
             </div>
        </div>
    </div>
)}
export default  GlobalTalent;
         
    
       
        
        
    
  

