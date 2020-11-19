import React from 'react'
import {Link,Redirect} from 'react-router-dom';

class Storecategories extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <h1 className="m-5 text-center" style={{fontSize:'40px'}}>Product <span style={{color:'orange'}}>  Categories </span></h1>
            
            <div className="row justify-content-center m-3">
                
                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link to="/productlistpage">
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/beverages.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Beverages </h6>
                               
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link to="/productlistpage" >
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/cleaning_laundry_products.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Cleaning and laundry </h6>
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link to="/productlistpage">
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/personal_care.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Personal care</h6>
                    </div>
                </div>


                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link to="/productlistpage">
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/pets.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Pets </h6>
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link to="/productlistpage">
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/meat_seafood.png" class="rounded-circle img-fluid"/>
                            </div>
                        </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Meat and Sea Foods </h6>
                    </div>
                </div>

</div>

<div className="row justify-content-center m-3">
                
                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                            <Link to="/productlistpage">
                            <div class="avatar mx-auto view zoom" style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/paper_products_food_storage.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Papers Product  </h6>
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link to="/productlistpage">
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/dairy_eggs.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Dairy  </h6>
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link to="/productlistpage">
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/bakery_desserts.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Bakery and Deserts </h6>
                    </div>
                </div>


                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                         <Link to="/productlistpage">
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/coffee_sweeteners.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Coffee </h6>
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                         <Link>
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/auto_accessories.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Auto accessories  </h6>
                    </div>
                </div>

</div>

<div className="row justify-content-center m-3">
                
                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                            <Link>
                            <div class="avatar mx-auto view zoom" style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/paper_products_food_storage.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Papers Product  </h6>
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link>
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/dairy_eggs.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Dairy  </h6>
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                        <Link>
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/bakery_desserts.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Bakery and Deserts </h6>
                    </div>
                </div>


                <div class="col-md-2 clearfix d-none d-md-block m-3 ">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                         <Link>
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/coffee_sweeteners.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Coffee </h6>
                    </div>
                </div>

                <div class="col-md-2 clearfix d-none d-md-block m-3">
                    <div className="card hoverable mx-auto  p-3"> 
                        <div class="testimonial">
                         <Link>
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/auto_accessories.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h6 class="font-weight-bold my-3 text-center">Auto accessories  </h6>
                    </div>
                </div>

</div>


</>
        );
    }
}
export default Storecategories;