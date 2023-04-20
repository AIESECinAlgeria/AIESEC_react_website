import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurPartners.css"
import partner1 from "../img/Partners/partner1.png"
import partner2 from "../img/Partners/partner2.png"
import partner3 from "../img/Partners/partner3.png"
import partner4 from "../img/Partners/partner4.png"
export default function OurPartners() {
  return (
    <div class="container-fluid mb-5 ">
         
              
                   <h1 className="h4 fw-bold text-center mb-3">Our Partners</h1>
         
                   <div className=' row partners text-center '>
                  <div className="col-3 text-center  "><img className='w-md-100 w-100 p-0 m-0 ' src={partner1} alt="partner1" srcset="" /></div>
                  <div  className="col-3 text-center "> <img className='w-md-100 w-100 p-0 m-0 'src={partner2} alt="partner2" srcset="" /></div>
                  <div className='col-3 text-center '> <img className='w-md-100 w-100 p-0 m-0'src={partner3} alt="partner3" srcset="" /></div>
                  <div className='col-3 text-center '>  <img className='w-md-100 w-75 p-0 m-0 'src={partner4} alt="partner4" srcset="" /></div>
                      
                </div>
         
          </div>
    
       
        
        
    
  )
}
