import React from 'react'
import Carousel from "react-elastic-carousel";
import { Item } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';



class Frequent extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const breakPoints = [

            { width: 337, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 5 },

          ];

        return(
            <>
            <div className="App mt-4 mb-5">
                 <h2 className="text-center mt-5 mr-5 ml-5"  style={{fontSize:'30px '}}>FREQUENTLY BROUGHT<span style={{color:'orange'}}> PRODUCTS</span> </h2>
            <Carousel breakPoints={breakPoints}  pagination={false}  style={{marginTop:'70px',marginBottom:"70px"}} >
                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
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
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>



                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage11.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>



                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage12.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>



                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage13.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>




                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage14.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>




                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
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
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>


                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
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
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>



                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
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
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>



                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage6.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>



                    <Item>
                    <Card  style={{ width: '210px',height:'340px',margin:'10px' }}>
            <div className="container-fluid" >
                 <div style={{float:'right',position:'absolute',left:'155px',top:'15px'}}>
                    <span >

                          <button class="circular  medium ui  button p-2" data-tooltip="Add to Cart" style={{color:'green',backgroundColor:'transparent'}}>
                          <i class="cart plus large icon" ></i>
                        </button>
                    </span>
                  </div>
            <div className="text-center">
                <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src="http://shopsmartcart.reflomsolutions.com/webimg/productimage5.jpeg" />
            </div>

                   <div className="card-body">
                      <div>
                              <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> $ 2.5 </strong></p>
                               <p style={{marginBottom:'0px'}}> Fish-  </p>
                              <p style={{marginBottom:'0px'}}>Eliminating Air Freshner </p>
                       </div>

                         <div>
                             <button class="fluid ui button positive mt-2">Buy Now</button>
                                                 
                             </div>
                    </div>  

</div>
 </Card>
                    </Item>
            </Carousel>
            </div>

            </>
        );
    }

}
export default Frequent;


