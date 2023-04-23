import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global-talent.css"


 function GlobalVolenteer() {
  return (
    
    <div class=" container-fluid  mb-md-5 mb-0 p-5 ">
      
        <h2 class="h5"> Global <span> Volunteer</span></h2>
        <div className="row  mt-3">
        <div className="col-md-6  ">
             <img src={require('../img/gv.png')}  className="img w-75 rounded text-center center   "alt="read more" />
             </div>
             <div className="col-md-6  interne">
                <h1 className=" text-dark h5 pt-3 intern-title text-md-left ">BECOME A VOLUNTEER</h1>
                <p className='h4 pt-4 feedback'>"I got to experience the whole package 
                                        through Project ArchiTech, from interning in professional practice, volunteering, travelling through the 
                                    country, and making lasting friendships."</p>
             </div>
             
        </div>
    </div>
)}
export default  GlobalVolenteer;
         
    
       
        
        
    
  

