// import React from 'react';




// const Howitworks=()=>{



    




//     return(
//         <React.Fragment>
// <div className="container-fluid">
//     <div className="container-fluid text-center ">
//         <h3 style={{font:'Work San'}}>How it works</h3>
//     </div>

//         <div className="container-fluid mt-4 "  >
           
//                <div className='row' style={{backgroundColor:'#eb8025',height:'auto',borderRadius:'17px',margin:'0px'}}>

//                    <div className="col-sm-4 mt-1 mb-2 " >
//                         <div  style={{backgroundColor:'#F5F5F5',height:'200px',borderRadius:'17px'}}>
//                             <img className="img-thumbnail mt-3" style={{borderRadius:'20px'}} src="http://shopsmartcart.reflomsolutions.com/webimg/step1.jpg"/>
//                         </div>

//                    </div>

//                    <div className="col-sm-4 mt-2 mb-2 "  >
//                             <div  style={{backgroundColor:'#F5F5F5',height:'200px',borderRadius:'7px'}}>
//                             <img className="img-thumbnail mt-2" style={{borderRadius:'20px'}} src="http://shopsmartcart.reflomsolutions.com/webimg/step2.jpg"/>
//                             </div>
//                    </div>

//                    <div className="col-sm-4  mt-2 mb-2"  >
                  
//                             <div  style={{backgroundColor:'#F5F5F5',height:'200px',borderRadius:'7px'}}> 
//                                 <img className="img-thumbnail mt-1" style={{borderRadius:'20px'}} src="http://shopsmartcart.reflomsolutions.com/webimg/step3.jpg"/>
//                             </div>
//                    </div>

//                </div>
           
//         </div>
// </div>
//         </React.Fragment>
     
//     );

// }
// export default Howitworks;
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Step } from 'semantic-ui-react';
import './Howitworks.css';

const Howitworks=()=>{

    return(
        <React.Fragment>
         



            <div className="container-fluid pt-3 " id="content-wrapper" style={{ backgroundColor:'#F5F5F5'}}>
                <div className="text-center mt-4" style={{fontSize:'40px'}}> HOW IT <span style={{color:'orange'}}>WORKS ? </span></div>  

                    <div className="row  justify-content-center">
                        <div className=" mt-5">
                            <img className="img-fluid" src="https://shopsmartcart.reflomsolutions.com/webimg/delivery-image.png"/>
                        </div>
                    </div>

                    <div className="row mt-4">
                        
                        <div className="col-sm-4 mt-5 mb-5"style={{backgroundColor:'#f2f2f2'}}>
                                    <div className="m-2 " >
                                        <div style={{width:'300px',margin:'auto'}}>
                                                    <img className="img-thumbnail img-fluid" src="https://shopsmartcart.reflomsolutions.com/webimg/click.jpg" />                  
                                        </div>
                                        
                                        <div className="text-center  mt-4" ><h1>YOU CLICK AND PICK</h1></div>
                                        <div className="text-center  mt-4" style={{fontSize:'18px'}}>Click Shopsmartcart.com using your mobile phone, tablet or computer and pick your daily essentials.</div>

                                    </div>
                        </div>

                        <div class="col-sm-4 mt-5 mb-5" style={{backgroundColor:'#f2f2f2'}} >
                        <div className="m-2 ">
                                        <div style={{width:'300px',margin:'auto'}}>
                                                    <img className="img-thumbnail img-fluid" src="https://shopsmartcart.reflomsolutions.com/webimg/frontpage2.jpg" />                  
                                        </div>
                                        
                                        <div className="text-center  mt-4"><h1>WE SHOP AND PACK</h1></div>
                                        <div className="text-center  mt-4" style={{fontSize:'18px'}}>Our shoppers shop and pack your order as soon as you click and pick from our App.</div>

                                    </div>
                        </div>

                        <div class="col-sm-4 mt-5 mb-5" style={{backgroundColor:'#f2f2f2'}}>
                        <div className="m-2 ">
                                        <div style={{width:'300px',margin:'auto'}}>
                                                    <img className="img-thumbnail img-fluid" src="https://shopsmartcart.reflomsolutions.com/webimg/delivery1.jpg" />                  
                                        </div>
                                        
                                        <div className="text-center mt-4"><h1>DELIVER ON THE SAME DAY</h1></div>
                                        <div className="text-center mt-4" style={{fontSize:'18px'}}>Our delivers deliver your order to your doorstep on the same day with care.</div>

                                    </div>
                        </div>
                    </div>
            
            </div>
        </React.Fragment>
    );


}
export default Howitworks;
