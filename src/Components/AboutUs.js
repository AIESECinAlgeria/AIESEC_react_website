import Aboutus from "../images/Aboutus.png"
import "./AboutUs.css"
import readmore from "../images/readmore.png"

export default function AboutUs() {
    return (
      <div className="aboutus row"> 
      
          <h1 id="title">About Us</h1>
      
        <p> <div className="bigimage col-6">
                <img className="about col-6" src={Aboutus} alt="" />  
            </div> 
            <div class="AboutUs col-6"></div>
            <span className="text h3"> <span>AIESEC</span> is a global platform for young people 
           to develop their leadership potential through 
           international internships and volunteer 
           opportunities. Founded in 1948, AIESEC is a 
           non-governmental, and not-for-profit 
           organization entirely run by youth for youth.</span>
           <img style={{marginTop:"20px"}} src={readmore} alt="" />
       </p>

      </div> 
      )
  }