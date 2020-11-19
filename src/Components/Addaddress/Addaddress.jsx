import  React from 'react';

const Addaddress=()=>{

    return(
        <React.Fragment>
                {/* <form class="ui forms">
                    <h4 class="ui dividing header">Add Address</h4>
                      <div class="field">
                          <label>Name</label>
                          <div class="two field">
                              <div class="filed">
                                  <input type="text" class="text field" placeholder="Enter Name"/>
                              </div>
                              <div class="field">
                                    <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
                              </div>
                          </div>
                      </div>  
                
                
                </form> */}
                <div className="container-fluid m-3 justify-content-center p-4" > 
                <h4 class="ui dividing header">Add Address</h4>
                
            <form class="ui form" >
                    
                    <div class="field">
                        <label>
                            Name
                        </label>
                            <div class="two fields">
                                <div class="four wide field">
                                    <input type="text" placeholder="First Name"/>
                                </div>

                                <div class=" four wide field">
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                            </div>
                    </div>

                    <div class="field">
                        <label>
                            Address
                        </label>
                            <div class="two fields">
                                <div class="four wide field">
                                    <input type="text" placeholder="Address line 1"/>
                                </div>

                                <div class=" four wide field">
                                    <input type="text" placeholder="Address line 2(optional)"/>
                                </div>
                            </div>
                    </div>

           

                    

                    <div class=" two fields">
                        <div class="four wide field">
                            <label>
                                Phone Number
                            </label>
                            <input type="text" placeholder="Enter phone number"/>
                        </div>

                        <div class="four wide field">
                            <label>
                               Email
                            </label>
                            <input type="EMAIL"  placeholder="Enter Email number"/>
                        </div>

                    </div>

                    <div class=" field">
                        <div class="four wide field">
                            <label>
                               Postel Code :
                            </label>
                            <input type="text" placeholder="Pin code"  />
                        </div>


                        <div class="field">
                            <label>Instruction for delivery (optional)</label>
                            <textarea rows="2" col="8" style={{width:'auto'}}></textarea>
                        </div>


                    </div>

                    <button class=" large ui green button" >Save</button>






            </form>
            </div>
        </React.Fragment>
   );
}
export default Addaddress;