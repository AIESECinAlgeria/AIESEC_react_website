import Aboutus from "../img/Aboutus.png"
import "../Components/AboutUs.css"
import readmore from "../img/readmore.png"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutUs() {
    return (
        
      
        <div className="container-fluid">
        <div class="  row "> 
            <div class="col-12">
                  <h1 class="h4 fw-bold text-center mb-md-5 mb-0"> About Us </h1>
            </div>
            <div class="row ">
                  
                     <div class=" text col-md-6 col-12  text-md-left ">
                           <p className="  p-4    AIESEC "><span class="text-dark">AIESEC</span> is a global platform for young people
                               to develop their leadership potential through 
                               international internships and volunteer 
                                opportunities. Founded in 1948, AIESEC is a 
                                 non-governmental, and not-for-profit 
                                  organization entirely run by youth for youth.</p>
                       </div>
                       <div class="col-md-6 col-12 text-center ">
                       <img  className=" w-75 text-center  "src={require('../img/Aboutus.png')} alt="experience" />
                       </div>
                    
            </div>
            </div>
            </div>
            
    )
  }