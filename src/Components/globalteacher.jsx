import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global-talent.css"


 function GlobalTeacher() {
  return (
    
    <div class=" container-fluid  mb-md-5 mb-0 p-5 ">
      
        <h2 class="h5"> Global <span>Teacher</span></h2>
        <div className="row  mt-3">
             
             <div className="col-md-6  interne">
                <h1 className=" text-dark h5 pt-3 intern-title text-md-left ">BECOME A TEACHER</h1>
                <p className='h4 pt-4 feedback'>“One highlight is discovering that 
                                                   I can teach other people, something that I always thought that I couldn't do! More than that, I learned to be responsible and independent
                                                 in a totally different country."</p>
             </div>
             <div className="col-md-6  ">
             <img src={require('../img/global-teacher2.jpg')}  className="img w-75 rounded text-center center   "alt="read more" />
             </div>
        </div>
    </div>
)}
export default  GlobalTeacher;
         
    
       
        
        
    
  

