import React from 'react';
import Card from 'react-bootstrap/Card';
import './Viewproducts.css'
import {Link} from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Realtedproducts from '../Relatedproducts/Relatedproducts';
import Topsellingproducts from '../Topselling/Topselling';
import Relatedproducts from '../Relatedproducts/Relatedproducts';
import { Image} from 'semantic-ui-react';

class Viewproducts extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
     
    }
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }

 


    render() {

      return (
        
       <>

        <div className="container-fluid">
          <div class="ui big breadcrumb " style={{backgroundColor:'transparent'}}>
            <Link class="section" to="/home" style={{color:'#424242',fontSize:'20px'}}>Home</Link>
            <i class="right angle big icon divider"></i>
            <Link to="/dashboard" class="section" style={{color:'#424242',fontSize:'20px'}}>Stores</Link>
            <i class="right angle icon divider"></i>
            <Link to='/storedashboard' class="section" style={{color:'#424242',fontSize:'20px'}}>Categories</Link>
            <i class="right angle big icon divider"></i>
            <div class="active section" class="section" style={{color:'#424242',fontSize:'20px'}}>All Products</div>
          
          </div>


        </div>



<div class="row justify-content-center mt-3">
<div className="col-lg-2  col-6 col-md-4"  >


<Link onClick={() => this.handleModalShowHide()}>             
<Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage10.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                        <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card> 
</Link>          
</div>

            <Modal size='xl' show={this.state.showHide} >
              <Modal.Header closeButton onClick={() => this.handleModalShowHide()} style={{border:'none'}}>
                
              </Modal.Header>
              <Modal.Body style={{margin:'20px'}}>

                <div className="container-fluid" style={{position:'absolute',top:'-50px',left:'-20px'}}>
                  <div class="ui big breadcrumb " style={{ backgroundColor: 'transparent' }}>
                    <Link class="section" to="/home" style={{ color: '#55b247', fontSize: '20px' }}>Home</Link>
                    <i class="right angle big icon divider"></i>
                    <Link to="/dashboard" class="section" style={{ color: '#55b247', fontSize: '20px' }}>Stores</Link>
                    <i class="right angle icon divider"></i>
                    <Link to='/storedashboard' class="section" style={{ color: '#55b247', fontSize: '20px' }}>Categories</Link>
                    <i class="right angle big icon divider"></i>
                    <div class="active section" class="section" style={{ color: '#55b247', fontSize: '20px' }}>All Products</div>

                  </div>


                </div>
              
              <div class="row">

                 

                  
                  <div className="col-md-5 " style={{paddingTop:'30px'}} >

                  <div className="text-center">
                    <div class="centered" style={{ display :'flex' , flexDirection:'column'}}>
                        <button class=" ui button mt-3"  style={{width:'100px', height:'90px',backgroundColor:'transparent',border:'1px solid grey' }}>
                            <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
                        </button>
                            <button class=" ui button mt-3" style={{ width: '100px', height: '90px', backgroundColor: 'transparent', border: '1px solid grey' }} >
                            <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
                        </button>
                            <button class=" ui button mt-3" style={{ width: '100px', height: '90px', backgroundColor: 'transparent', border: '1px solid grey'}}>
                            <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
                        </button>
                            <button class=" ui button mt-3" style={{ width: '100px', height: '90px', backgroundColor: 'transparent', border: '1px solid grey' }}>
                            <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
                        </button>
                    </div>
                </div>



                    <div style={{ paddingTop: '30px' }}>
                      <h2>Febreze Car Air Freshener Vent Clip, Sea Spray</h2>
                    </div>
                    
                    <div>
                      <h4 style={{ paddingTop: '10px' }}>Categorie : </h4>
                    </div>

                    <div>
                      <h4 style={{ paddingTop: '10px' }}>250ml </h4>
                    </div>

                    <div>
                      <h2 style={{paddingTop:'20px'}}>$ 4.5</h2>
                    </div>


                    <div style={{paddingTop:'20px'}}>
                      <h5>Quantity :</h5>


                    <div style={{display:'flex',flexDirection:'row'}}>
                        <button type="button" class="btn btn-danger btn-rounded">
                          <i class="fas fa-minus"></i>
                        </button>
                       
                        <input class="form-control" type="text" value="1" name="quantity" min="1" max="100" style={{ width: '80px',marginTop:'5px',textAlign:'center'}}/>
                        <button type="button" class="btn btn-success btn-rounded">
                          <i class="fas fa-plus"></i>
                        </button>
                    </div>     
                      


                      <div style={{ display: 'flex', paddingTop: '10px' }}>
                        <button type="button" class="btn btn-success btn-lg" style={{ fontSize: '15px' }}> Buy Now</button>
                        <button type="button" class="btn btn-success btn-lg" style={{ fontSize: '15px' }}><i class="fas fa-cart-plus" style={{ marginRight: '5px' }}></i> Add to Cart</button>
                      </div>
          
                    </div>

                  </div>

                  
                  <div className="col-md-7  " style={{ padding: '40px' }}>
                    
                    <div style={{ width: '500px', height: '450px', border: '1px solid #ecf0f1'}}>
                      <div class="view overlay zoom" style={{ padding: '70px'}}>
                        <div style={{ width: '350px'}}>
                        <img src="http://shopsmartcart.reflomsolutions.com/webimg/prodcutimage18.jpg" class="img-fluid " alt="zoom" />
                      </div>
                      </div>
                    </div>


                    <div style={{marginTop:'20px'}}>
                        <div className="row">
                          <div className="col-md-12">
          
                              <label for="exampleFormControlTextarea1"> <h5> Add Special Instructions : </h5></label>
                                <div style={{marginTop:'10px'}}>
                                  <textarea class="form-control rounded-5" id="exampleFormControlTextarea1" rows="4"></textarea>
                                  <button type="button" class="btn btn-success " style={{ fontSize: '10px' }}><i class="fas fa-plus"></i> Add</button>
                              </div>
                            </div> 
                        </div>         
                    </div>

                    <div style={{ marginTop: '20px' }}>
                      <div className="row " >
                            <h4>Preferences :</h4>
                        <div className="col-md-12 d-flex p-2" style={{ border: "2px solid #ecf0f1", padding: '40px'}}>
                            <div style={{width:'120px'}}>
                            <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage9.jpeg" class="img-fluid " />
                            </div>
                            
                            <div style={{position:'absolute',left:'150px'}}>
                            <h3 >Car Air Freshener </h3>
                            <h5 style={{ marginBottom: '2px ',marginTop:'3px' }}>Categorie : Food </h5>
                              <p style={{marginBottom:'2px',fontWeight:'200' }}>Car Air Freshener </p>
                                <button type="button" class="btn btn-success " style={{ fontSize: '10px' }}><i class="fas fa-plus"></i> Add to Cart</button>
                            </div>
                          
                        </div>
                      </div>
                    </div>







                  </div>
                  
                  

                 
              
              
              </div>
              <hr/>
                <Relatedproducts/>
              
              
              </Modal.Body>
              
              
              
              
              
            </Modal>

           





<div className="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage9.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                             
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>

</div>


<div className="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                  <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                    <i class="cart plus large icon" ></i>
                  </button>
                  </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage8.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
 </div>
<div class="col-lg-2 col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                    <i class="cart plus large icon" ></i>
                  </button>
                  </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage7.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
</div>


<div class="col-lg-2 col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                    <i class="cart plus large icon" ></i>
                  </button>
                  </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage7.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
</div>
</div>

{/* Second Row  */}

<div class="row justify-content-center mt-3">
<div className="col-lg-2  col-6 col-md-4">
<Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                    <i class="cart plus large icon" ></i>
                  </button>
                  </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage10.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
 </div>

<div className="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                      <i class="cart plus large icon" ></i>
                    </button>
                    </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage9.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>

</div>


<div className="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                  <i class="cart plus large icon" ></i>
                </button>
                </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage8.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
 </div>
<div class="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                  <i class="cart plus large icon" ></i>
                </button>
                </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage7.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
</div>


<div class="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                    <i class="cart plus large icon" ></i>
                  </button>
                  </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage7.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
</div>
</div>


{/* Third row */}

<div class="row justify-content-center mt-3">
<div className="col-lg-2  col-6 col-md-4">
<Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart"  style={{color:'green',backgroundColor:'transparent'}}>
                    <i class="cart plus large icon" ></i>
                  </button>
                  </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage10.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
 </div>

<div className="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                      <i class="cart plus large icon" ></i>
                    </button>
                    </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage9.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>

</div>


<div className="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                  <i class="cart plus large icon" ></i>
                </button>
                </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage8.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
 </div>
<div class="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                  <i class="cart plus large icon" ></i>
                </button>
                </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage7.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
</div>


<div class="col-lg-2  col-6 col-md-4">
 <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 {/* <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                 <span >

                      <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                    <i class="cart plus large icon" ></i>
                  </button>
                  </span>
                  </div> */}
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage7.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                      <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Add to Cart</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
</div>
</div>



       </>

      );
    }
  }
  
  export default Viewproducts;