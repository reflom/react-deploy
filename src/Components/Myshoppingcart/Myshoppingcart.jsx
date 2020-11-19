import React from 'react';

import { Segment, Image ,Button,Form,TextArea } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const Myshoppingcart=()=>{





    return(
        <React.Fragment>
        <div className="container-fluid mt-3">
<Segment>          
                <h3 class="ui dividing header m-4">My Shopping Cart </h3>


                  <div className="row" >
                      
                      <div className="col-sm-6">
                            <div style={{width:'100px'}}>
                                <Image className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg"   size='small' floated='left' circular />
                            </div>

                        <h3> Walmart</h3>
                        <p> <strong>Number of items : 2 </strong> </p>
                        
                      </div>

                      <div className="col-sm-6 ">
                                <h4 className="text-right ">Store Total : $16.45</h4>
                                <h4 className="text-right "><Link > Remove from cart</Link></h4>
                      </div>
                  </div>

            {/* Particular  Store Product */}
                
                  <div className="row mt-3 " style={{margin:'auto',width:'95%'}} >
                        
                        <div className="col-sm-6 d-flex p-1" >
                            <div style={{width:'100px'}}>
                                <Image className="img-thumbnail mt-3" src="http://shopsmartcart.reflomsolutions.com/webimg/product.png"   size='small' floated='left' circular />
                            </div>
                                <h5 className="ml-4"> 
                                    Milk<br/>
                                    <span>Category : Food </span><br/>
                                    <span  >250gm </span><br/>
                                    <button class=" tiny ui button mt-2">Preferences</button>
                                    <button class=" tiny ui button mt-2">Remove</button>
                                    

                                </h5>
                                
                               
                        </div>

                        <div className="col-sm-4  p-2">
                                <div style={{display:"flex",width:'30%',marginTop:'40px'}}>

                                <button class="mini ui button mr-2"> - </button>
                                <p className=" m-auto"> 1 </p>
                                <button class="mini ui button ml-2"> + </button>
                                </div>
                        </div>

                        <div className="col-sm-2 text-center p-4">
                                    <h4 className="mt-4"> $ 10.34</h4>
                        </div>

                  

                  </div>


                  {/* Particular  Store Second Product */}

                  <div className="row mt-3 " style={{margin:'auto',width:'95%'}} >
                        
                        <div className="col-sm-6 d-flex p-1" >
                            <div style={{width:'100px'}}>
                                <Image className="img-thumbnail mt-3" src="http://shopsmartcart.reflomsolutions.com/webimg/bread.jpg"   size='small' floated='left' circular />
                            </div>
                                <h5 className="ml-4"> 
                                    Bread<br/>
                                    <span>Category : Food </span><br/>
                                    <span  >250gm </span><br/>
                                    <button class=" tiny ui button mt-2">Preferences</button>
                                    <button class=" tiny ui button mt-2">Remove</button>
                                   

                                </h5>
                                
                               
                        </div>

                        <div className="col-sm-4  p-2">
                                <div style={{display:"flex",width:'30%',marginTop:'40px'}}>

                                <button class="mini ui button mr-2"> - </button>
                                <p className=" m-auto"> 2 </p>
                                <button class="mini ui button ml-2"> + </button>
                                </div>
                        </div>

                        <div className="col-sm-2 text-center p-4">
                                    <h4 className="mt-4"> $ 6.34</h4>
                        </div>

                  

                  </div>


        {/* Second store Product*/}     
        <hr/>
        <div className="row mt-4 ">
                      
                      <div className="col-sm-6">
                            <div style={{width:'100px'}}>
                                <Image className="img-thumbnail mt-3" src="http://shopsmartcart.reflomsolutions.com/webimg/store2.jpg"   size='small' floated='left' circular />
                            </div>

                        <h3> Store Name :</h3>
                        <p> <strong>Number of items : 1 </strong></p>
                        
                      </div>

                      <div className="col-sm-6">
                                <h4 className="text-right ">Store Total : $13.45</h4>
                                <h4 className="text-right "><Link > Remove from cart</Link></h4>
                      </div>
                  </div>


                  <div className="row mt-3 mb-4" style={{margin:'auto',width:'95%'}} >
                        
                        <div className="col-sm-6 d-flex p-1" >
                            <div style={{width:'100px'}}>
                                <Image className="img-thumbnail mt-3" src="http://shopsmartcart.reflomsolutions.com/webimg/bread.jpg"   size='small' floated='left' circular />
                            </div>
                                <h5 className="ml-4"> 
                                    Bread<br/>
                                    <span>Category : Food </span><br/>
                                    <span  >150gm </span><br/>
                                    <button class=" tiny ui button mt-2">Preferences</button>
                                    <button class=" tiny ui button mt-2">Remove</button>
                                   

                                </h5>
                                
                               
                        </div>

                        <div className="col-sm-4  p-2 ">
                                <div style={{display:"flex",width:'30%',marginTop:'40px'}}>

                                <button class="mini ui button mr-2"> - </button>
                                <p className=" m-auto"> 5 </p>
                                <button class="mini ui button ml-2"> + </button>
                                </div>
                        </div>

                        <div className="col-sm-2 text-center p-4">
                                    <h4 className="mt-4"> $ 13.34</h4>
                        </div>

                  

                  </div>
                  

                 



                        
            </Segment>

            <h4>Add Preferences :</h4>
            <Form>
                <TextArea rows={2} placeholder='Example : I would my shopper to ....' />
             </Form>

            <div class="extra content m-3">
                <button class="fluid ui inverted green  ui button p-3">Proceed to Pay <stong style={{color:'orange'}}>$ 30.45 </stong></button>

                </div>        
          </div>

          
        </React.Fragment>
    );
}
export default Myshoppingcart;