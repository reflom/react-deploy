// import React from 'react';
// import { Divider, Image, Segment,TextArea ,Form } from 'semantic-ui-react';
// import { Button } from 'semantic-ui-react';






// const Productdetailpage=()=>{








//     return(
//     <React.Fragment>

// {/* 
//         <div className="container " style={{border:'1px solid grey',height:'auto'}}>

//         <div class="ui large breadcrumb">
//             <a class="section">Category Name</a>
//             <i class="right angle icon divider"></i>
//             <a class="section">All Products</a>
//             <i class="right angle icon divider"></i>
//             <div class="active section">Milk</div>
//         </div>

//         <div className="row">

//             <div className="col-sm-4 mt-4 " style={{border:'1px solid grey'}}>
//             <div className="text-center">
//                 <div class="centered" style={{ display :'flex' , flexDirection:'column'}}>       
//                     <button class=" ui button mt-3"  style={{width:'100px', height:'90px' }}>
//                         <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
//                     </button>
//                     <button class=" ui button mt-3"  style={{width:'100px', height:'90px' }} >
//                         <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
//                     </button>
//                     <button class=" ui button mt-3"  style={{width:'100px', height:'90px' }}>
//                         <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
//                     </button>
//                     <button class=" ui button mt-3"  style={{width:'100px', height:'90px' }}>
//                         <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
//                     </button>
//                 </div>
//             </div>   

//                  <h4>
//                  MILK<br/>
//                  Category  Name: Food <br/>
//                 </h4>   

//                 <div className="text-center" >
//                          <Button>-</Button>
//                          <strong className="pl-4 pr-4">1 </strong>
//                          <Button>+</Button>
//                 </div>


//             </div>




//             <div className="col-sm-8  mt-4 justify-content-center" style={{border:'1px solid grey'}}>

//                 <div>
//                    <div className="text-right mt-4">
//                     <i class="heart outline icon large"></i>
//                     </div>
//                     <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='large' centered />
//                         <Divider hidden />
//                     </div>

//                      <div className="text-center"> 
//                     <button class="ui inverted big green button" >Buy Now</button>
//                     <button class="ui inverted big green button " >Add to cart</button>
//                     </div>  


//                 </div>
//             </div>


//         </div> */}


//         <Segment>
//         <div className="container-fluid" style={{margin:'auto',height:'auto'}}>



//             <div class="ui large breadcrumb">
//                 <a class="section">Category Name</a>
//                 <i class="right angle icon divider"></i>
//                 <a class="section">All Products</a>
//                 <i class="right angle icon divider"></i>
//                 <div class="active section">Milk</div>
//             </div>


//             <div  className="row">
//                     <div className="col-sm-4 p-3 ">

//                         <div style={{ display :'flex' , flexDirection:'column'}}>       
//                             <button class="Medium ui button mt-3"  style={{width:'100px', height:'90px' }}>
//                                 <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
//                             </button>
//                             <button class=" ui button mt-3"  style={{width:'100px', height:'90px' }} >
//                                 <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
//                             </button>
//                             <button class=" ui button mt-3"  style={{width:'100px', height:'90px' }}>
//                                 <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
//                             </button>
//                             <button class=" ui button mt-3"  style={{width:'100px', height:'90px' }}>
//                                 <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='Medium' centered />
//                             </button>

//                         </div>

//                         <div className="mt-2">
//                             <ul className="list-unstyled ">
//                                 <li className="pt-2"><h1>Milk</h1></li>
//                                 <li className="pt-2"> <h3>Category</h3></li>
//                                 <li className="pt-2"><h3>Price : $ 34.34</h3></li>

//                             </ul>
//                             <div style={{display:"flex",width:'30%',marginTop:'40px'}}>

//                                 <button class=" ui button mr-3 "> - </button>
//                                 <p className=" m-auto"> <strong> 2 </strong></p>
//                                 <button class=" ui button ml-3"> + </button>
//                             </div>

//                             <div className="row"> 



//                                 <Segment className="mt-3 w-100">
//                                     <h4 class="ui dividing header mt-1">   Preference : If Out of stock ,replace with </h4>
//                                             <div style={{width:'100px'}}>
//                                                 <Image className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/bread.jpg"   size='small' floated='left'  />
//                                             </div>
//                                             <div className="ml-3 mt-3" style={{margin:'auto'}}>
//                                                 <ol className="list-unstyled">
//                                                      <li> <h1>Bread</h1> </li>
//                                                      <li> Category : </li>
//                                                      <li> $ 3.5 </li>
//                                                 </ol>

//                                                 <button class="centered ui inverted medium green button " >Add to cart</button>
//                                                 <button class="centered ui inverted medium green button" >Buy Now</button>

//                                             </div>
//                                  </Segment>        



//                             </div>


//                         </div>


//                     </div>


//                     <div className="col-sm-8 mt-4 justify-content-center" >

//                         <div style={{border:'1px solid #dfe6e9 '}}>

//                             <div className="text-right m-4">
//                                 <i class="heart outline icon large"></i>
//                                 <Image src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" size='large' centered />
//                                 <Divider hidden />
//                            </div>


//                         </div>



//                         <div className="text-center m-4"> 
//                                 <button class=" right floated ui inverted big green button " >Add to cart</button>
//                                 <button class="right floated ui inverted big green button" >Buy Now</button>

//                         </div>

//                         {/* <div >
//                             <h4>Add Special Instructions :</h4>
//                                     <Form>
//                                         <TextArea rows={2}  placeholder='Example : I would my shopper to ....' style={{width:'400px'}}/>
//                                     </Form>
//                         </div> */}

//                     </div>




//             </div>
//         </div>


//         </Segment>   
//     </React.Fragment>
// );
// }
// export default Productdetailpage;

import React from 'react';







const Productdetailpage = () => {


  return (
    <React.Fragment>

      <div class="container-fluid my-5 py-5 z-depth-1">



        <section class="text-center">


          <h3 class="font-weight-bold mb-5">Product Details</h3>

          <div class="row">

            <div class="col-lg-6">


              <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">


                <div class="carousel-inner text-center text-md-left" role="listbox">
                  <div class="carousel-item active">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/17.jpg"
                      alt="First slide" class="img-fluid" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/18.jpg"
                      alt="Second slide" class="img-fluid" />
                  </div>
                  <div class="carousel-item">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/19.jpg"
                      alt="Third slide" class="img-fluid" />
                  </div>
                </div>


                <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>


              </div>


            </div>

            <div class="col-lg-5 text-center text-md-left">

              <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong>Sony headphones</strong>
              </h2>
              <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
              <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                <span class="red-text font-weight-bold">
                  <strong>$49</strong>
                </span>
                <span class="grey-text">
                  <small>
                    <s>$89</s>
                  </small>
                </span>
              </h3>

              <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">


                <div class="card">

                  <div class="card-header" role="tab" id="headingOne1">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                      aria-controls="collapseOne1">
                      <h5 class="mb-0">
                        Description
                <i class="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>

                  <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                    data-parent="#accordionEx">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                      moon
                      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            </div>
                  </div>
                </div>

                <div class="card">

                  <div class="card-header" role="tab" id="headingTwo2">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                      aria-expanded="false" aria-controls="collapseTwo2">
                      <h5 class="mb-0">
                        Details
                <i class="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>

                  <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                    data-parent="#accordionEx">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                      moon
                      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            </div>
                  </div>
                </div>



                <div class="card">


                  <div class="card-header" role="tab" id="headingThree3">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                      aria-expanded="false" aria-controls="collapseThree3">
                      <h5 class="mb-0">
                        Shipping
                <i class="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>


                  <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                    data-parent="#accordionEx">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute,
                      non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                      moon
                      tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            </div>
                  </div>
                </div>


              </div>


              <section class="color">
                <div class="mt-5">
                  <p class="grey-text">Choose your color</p>
                  <div class="row text-center text-md-left">

                    <div class="col-md-4 col-12">

                      <div class="form-group">
                        <input class="form-check-input" name="group100" type="radio" id="radio100" checked="checked" />
                        <label for="radio100" class="form-check-label dark-grey-text">Blue</label>
                      </div>
                    </div>
                    <div class="col-md-4">

                      <div class="form-group">
                        <input class="form-check-input" name="group100" type="radio" id="radio101" />
                        <label for="radio101" class="form-check-label dark-grey-text">Orange</label>
                      </div>
                    </div>
                    <div class="col-md-4">

                      <div class="form-group">
                        <input class="form-check-input" name="group100" type="radio" id="radio102" />
                        <label for="radio102" class="form-check-label dark-grey-text">Red</label>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-md-12 text-center text-md-left text-md-right">
                      <button class="btn btn-primary btn-rounded">
                        <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                    </div>
                  </div>
                </div>
              </section>


            </div>

          </div>

        </section>



      </div>


    </React.Fragment>
  );
}
export default Productdetailpage;