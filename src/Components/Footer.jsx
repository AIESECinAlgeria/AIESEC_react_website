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
                         <h1 className="h4 text-primary">About</h1>
                     </div>
                     <div className="content "> 
                          <a href='#' class="text-decoration-none text-sm-left "><p className="h5 font-weight-normal"> About us</p></a>
                          <a href='#'class="text-decoration-none text-sm-left"><p className="h5 font-weight-normal">Annual Report</p></a>
                     </div>
                </div>
               <div className="Sub_Section_2  ">
                    <div className="title   text-sm-left">
                         <h1 className="h4 text-primary">Organisations</h1>
                    </div>
                     <div className="content "> 
                         <a href='#' class="text-decoration-none text-sm-left"><p className="h5 font-weight-normal"> Youth</p></a>
                         <a href='#' class="text-decoration-none text-sm-left"><p className="h5 font-weight-normal" >Youth 4 Global Goals</p></a>
                         <a href='#' class="text-decoration-none text-sm-left "><p className="h5 font-weight-normal">Youth Speak</p></a>
                      </div>
                 </div>
             </div>

          <div className="col-md-4  col-sm-12 Section-2 ">
              <div className="Sub_Section_1">
                  <div className="title   pt-5 text-sm-left">
                     <h1 className="h4 text-primary">Youth</h1>
                  </div>
                <div className="content "> 
                    <a href='#' class="text-decoration-none text-sm-left"><p className="h5 font-weight-normal"> Partner with us</p></a> 
                      <a href='#' class="text-decoration-none text-sm-left"><p className="h5 font-weight-normal">Pricing</p></a>
                </div>
                 </div>
                <div className="Sub_Section_2">
                     <div className="title h4 text-sm-left">
                          <h1 className="h4 text-primary">Membership</h1>
                     </div>
                      <div className="content "> 
                            <a href='#' class="text-decoration-none text-sm-left"><p className="h5 font-weight-normal">Join Us</p></a>
                            <a href='#' class="text-decoration-none text-sm-left"><p className="h5 font-weight-normal">Find your country!</p></a>
                     </div>
                 </div>
          </div>
       <div className="col-md-4 Section-3   ">
               <div className="Sub_Section_1">
                     <div className="title h4 pt-5 text-sm-left">
                        <h1 className="h4  text-primary">NEWSLETTER</h1>
                     </div>
                     <div className="content  "> 
                          <p > Stay update with last offers and news</p> 
                      </div>
                 <form class="form-inline">
                     <div className=' row  d-block '>
                         <div className="col-12 ">
                          <div class="form-group col-6 col-sm-6 d-inline">
                               <input  type="text" class="form-control w-75" placeholder='Enter your Email' />
                          </div>
                          <div class="form-group col-6  col-md-6 d-inline w-100  ">
                              <button className='btn btn-primary mt-3  w-50'>Send</button>
                             
                          </div>
                          </div>
                     </div> 
                </form>
        </div>
             <div className="row mt-3">
              <div class="col-md-6 text-md-end">
                  <ul class="list-unstyled list-group list-group-horizontal ">
                          <li><a href="#"><img  class="w-75 logos " src={require('../img/twitter.png')} alt="" /> </a></li>
                           <li><a href="#"><img  class="w-75 logos " src={require('../img/Instagram.png')} alt="" /></a></li>
                            <li><a href="#"> <img  class="w-75 logos " src={require('../img/fb.png')} alt="" /> </a></li>
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

