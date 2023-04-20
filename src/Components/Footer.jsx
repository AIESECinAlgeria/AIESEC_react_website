import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faTwitter}    from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/footer.css'


const  footer=()=> {
  return (
    
    <div className=' container-fluid '>
         <div className="row justify-content-between center  p-5 ">
             <div className="col-md-4  col-sm-12 Section-1  ">
                 <div className="Sub_Section_1    ">
                     <div className="  title  pt-5  text-sm-left ">
                         <h1 className="h4">About</h1>
                     </div>
                     <div className="content "> 
                          <a href='#' class="text-decoration-none text-sm-left "><p className="h5 text-dark"> About us</p></a>
                          <a href='#'class="text-decoration-none text-sm-left"><p className="h5 text-dark">Annual Report</p></a>
                     </div>
                </div>
               <div className="Sub_Section_2  ">
                    <div className="title  pt-4 text-sm-left">
                         <h1 className="h4">Organisations</h1>
                    </div>
                     <div className="content "> 
                         <a href='#' class="text-decoration-none text-sm-left"><p className="h5 text-dark"> Youth</p></a>
                         <a href='#' class="text-decoration-none text-sm-left"><p className="h5 text-dark" >Youth 4 Global Goals</p></a>
                         <a href='#' class="text-decoration-none text-sm-left "><p className="h5 text-dark">Youth Speak</p></a>
                      </div>
                 </div>
             </div>

          <div className="col-md-4  col-sm-12 Section-2 ">
              <div className="Sub_Section_1">
                  <div className="title   pt-5 text-sm-left">
                     <h1 className="h4">Youth</h1>
                  </div>
                <div className="content "> 
                    <a href='#' class="text-decoration-none text-sm-left"><p className="h5 text-dark"> Partner with us</p></a> 
                      <a href='#' class="text-decoration-none text-sm-left"><p className="h5 text-dark">Pricing</p></a>
                </div>
                 </div>
                <div className="Sub_Section_2">
                     <div className="title h4 text-sm-left">
                          <h1 className="h4">Membership</h1>
                     </div>
                      <div className="content "> 
                            <a href='#' class="text-decoration-none text-sm-left"><p className="h5 text-dark">Join Us</p></a>
                            <a href='#' class="text-decoration-none text-sm-left"><p className="h5 text-dark">Find your country!</p></a>
                     </div>
                 </div>
          </div>
       <div className="col-4 Section-3 col-md-4  col-sm-12  ">
               <div className="Sub_Section_1">
                     <div className="title h4 pt-5 text-sm-left">
                        <h1 className="h4 ">NEWSLETTER</h1>
                     </div>
                     <div className="content  text-sm-left"> 
                          <p className="h5"> Stay update with last offers and news</p> 
                      </div>
                 <form>
                     <div className=' row  d-block '>
                         <div className="col-12 ">
                          <div class="form-group col-6 col-sm-6 d-inline">
                               <input  type="text" placeholder='Enter your Email' />
                          </div>
                          <div class="form-group col-6  col-md-6 d-inline w-75 ">
                              <button className='btn btn-primary  '>Send</button>
                             
                          </div>
                          </div>
                     </div> 
                </form>
        </div>
     <div className="row">
          
        <div class="col-md-6 text-md-end">
        <ul class="list-unstyled">
          <li><a href="#"></a></li>
          <li><a href="#"><i class="fab fa-twitter fa-lg"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram fa-lg"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin fa-lg"></i></a></li>
        </ul>
      </div>
        </div>
      </div>
     
    </div>

  <div class="row d-flex justify-content-between">
  <div className="col-12 copyright text-center"><p>©  1948-2022 AIESEC</p></div>

  </div>
    
  </div>
  )}

export default footer

