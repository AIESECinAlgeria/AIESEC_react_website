import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/home.css'



const  Home=()=> {
    return (

        <div className="container-fluid m-auto p-5   ">  
                <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="title">
                                <h1 class="h2"> m3a AIESEC | YOU ARE THE CHANGE!</h1>
                                <img className=" w-25"src={require('../img/Tracé 1.png')}/>
                            </div>
                            <div className=" description  mt-5 ">
                                  <p  className=" h5 "> Devlop yourself through a cross-cultural experience abroad.</p>
                            </div>
                            

                          </div>

                          <div className="col-md-6 col-12">
                            <div className="Image ">
                                <img className="w-100" src={require('../img/Groupe 167.png')} alt="" />
                            </div>
                            

                          </div>
                </div>
                <div class="row mt-3 ">
                      <div class=" search-oportunity col-12 shadow-lg p-3 mb-5 bg-white rounded  center ">
                        <div className=" search col-12 mt-3">
                            <p className=" h5 ">
                              Search and find your opportunity
                           </p>
                         </div>
    
                         

                  <form>
                            <div className="input-group "> 
                              <div class="form-group col-4  p-2">
                                       <label for="inputState"> </label>
                                             <select id="inputState" class="form-control ">
                                                   <option selected  className='option  ' >Choose...</option>
                                                             <option>..</option>
                                                </select>
                              </div>
                              <div class="form-group col-4 p-2">
                                  <label for="inputZip"></label>
                                  <input type="text" class="form-control " id="inputZip" placeholder="Search for oppertunities"/>
                             </div>
                             <div class="form-group   Applay col-4 pb-0 p-2"  >
                             <button className='btn btn-primary form-control AppButton  mt-4 h-50  fw-bold w-75'> Apply now</button>
                             </div>
                             
                         </div>   
                       
                 </form>

             </div>
       </div>
    </div>
    )}
    export default Home;