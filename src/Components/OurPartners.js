import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurPartners.css"
import partner1 from "../images/Partners/partner1.png"
import partner2 from "../images/Partners/partner2.png"
import partner3 from "../images/Partners/partner3.png"
import partner4 from "../images/Partners/partner4.png"
export default function OurPartners() {
  return (
    <div>
         <h1 id="title">Our Partners</h1>
         <div className="row partners">
          <img src={partner1} alt="" srcset="" className="col"/>
          <img src={partner2} alt="" srcset="" className="col"/>
          <img src={partner3} alt="" srcset="" className="col"/>
          <img src={partner4} alt="" srcset="" className="col"/>
         </div>
        
    </div>
    
  )
}
