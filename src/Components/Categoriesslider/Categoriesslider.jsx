// import React from 'react';
// import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';

// const Categoriesslider=()=>{


//     return(
//         <React.Fragment>
// <div className="container-fluid w-100">
// <div className="container-fluid text-center" >
//    <h4 style={{font:'work sans'}}> Categories </h4>
// </div>

// <Carousel>
// <Carousel.Item>




//         <div className="container-fluid mt-2 " >
           
//                <div className='row' style={{backgroundColor:'#eb8025',height:'auto',borderRadius:'17px',margin:'0px'}}>

//                         <div className="col-sm-3 mt-2 mb-2 " >
//                                 <div className="container-fluid mt-2" >
//                                         <div className="container-fluid" style={{width:'200px'}}>
//                                                     <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
                                                        
//                                         </div>
//                                 </div>
                            
                                       
//                         </div>

//                    <div className="col-sm-3 mt-2 mb-2 "  >
//                             <div className="container-fluid mt-2">
//                                 <div className="container-fluid" style={{width:'200px'}}>
//                                     <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png"/></Link>
//                                </div>
//                             </div>
                         
//                    </div>

//                    <div className="col-sm-3  mt-2 mb-2"  >
                  
//                             <div className="container-fluid mt-2" > 
//                             <div className="container-fluid"  style={{width:'200px'}}>
//                                     <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                </div>

//                             </div>
//                    </div>

//                    <div className="col-sm-3  mt-2 mb-2"  >
                  
//                             <div className="container-fluid  mt-2" > 
//                             <div className="container-fluid" style={{width:'200px'}}>
//                                     <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                </div>
//                             </div>
//                    </div>

//                </div>
           
//         </div>
// </Carousel.Item>

// <Carousel.Item>
// <div className="container-fluid mt-2 " >
           
//            <div className='row' style={{backgroundColor:'#eb8025',height:'auto',borderRadius:'17px',margin:'0px'}}>

//                <div className="col-sm-3 mt-2 mb-2 " >
//                     <div className="container-fluid mt-2" >
//                     <div className="container-fluid" style={{width:'200px'}}>
//                                 <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                            </div>
//                     </div>

//                </div>

//                <div className="col-sm-3 mt-2 mb-2 "  >
//                         <div className="container-fluid mt-2">
//                             <div className="container-fluid" style={{width:'200px'}}>
//                                 <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png"/></Link>
//                            </div>
//                         </div>
//                </div>

//                <div className="col-sm-3  mt-2 mb-2"  >
              
//                         <div className="container-fluid mt-2" > 
//                         <div className="container-fluid"  style={{width:'200px'}}>
//                                 <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                            </div>

//                         </div>
//                </div>

//                <div className="col-sm-3  mt-2 mb-2"  >
              
//                         <div className="container-fluid  mt-2" > 
//                         <div className="container-fluid" style={{width:'200px'}}>
//                                 <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                            </div>
//                         </div>
//                </div>

//            </div>
       
//     </div>






// </Carousel.Item>






// </Carousel>

// </div>
//         </React.Fragment>
     
//     );


// }
// export default Categoriesslider;



// import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import {Link } from 'react-router-dom';
// import WithStyles from 'react-multi-carousel';

// const Categoriesslider=()=>{


     
//      const responsive = {
//           desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3,
//             slidesToSlide: 3 // optional, default to 1.
//           },
//           tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2,
//             slidesToSlide: 2 // optional, default to 1.
//           },
//           mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1,
//             slidesToSlide: 1 // optional, default to 1.
//           }
//         };

//     return(
//         <React.Fragment>

// <div className="container-fluid">
                         
//                          <div className="text-center mb-3">
//                               <h3 style={{fontWeight:'900'}}>   Categories </h3>
//                          </div> 

//                          <div className="container-fluid " style={{backgroundColor:'#f5f5f5'}}>
//                          <Carousel responsive={responsive} >

                         
                             
//                                    <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <Link to='/dashboard'> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                    </div>
                             

//                                    <div  className="text-center" style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <Link to="/dashboard"> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                    </div>
                     

              
//                                    <div  className="text-center " style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <Link to='/dashboard'> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                    </div>
                             

                             
//                                    <div  className="text-center "  style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <Link to='/dashboard'> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                    </div>
                           

                             
//                                    <div  className="text-center" style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <Link to='/dashboard'> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                    </div>
                           

                             
//                                    <div   className="text-center"style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <Link to='/dashboard'> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                    </div>
                             

                              
//                                    <div   className="text-center "style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <Link to='/dashboard'> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                    </div>
                            

                             
//                                    <div  className="text-center mt-3" style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <Link to='/dashboard'> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
//                                    </div>
                          
                              
                              
//                               </Carousel>
//                          </div>



//                   </div>




//         </React.Fragment>
     
//     );


// }
// export default Categoriesslider;

import React from 'react';
import {Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
     { width: 337, itemsToShow: 1 },
     { width: 550, itemsToShow: 2 },
     { width: 768, itemsToShow: 3 },
     { width: 1200, itemsToShow: 5 },
   ];


const Categoriesslider=()=>{

     

 return(
        <React.Fragment>

        <div className="App mt-4 mb-5">
          <h2 className="text-center mt-5 mr-5 ml-5"  style={{fontSize:'30px '}}>TRENDING <span style={{color:'orange'}}> CATEGORIES</span> </h2>
          <h3  className="text-center ">BROWSE EVERYTHING YOU USUALLY BUY!</h3>
        <Carousel breakPoints={breakPoints}  pagination={false} style={{marginTop:'70px',marginBottom:"70px"}}>
          <Item>
          
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail img-fluid" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
          </div>
          
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail img-fluid" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail img-fluid" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail img-fluid" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail img-fluid" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail img-fluid" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail img-fluid" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail img-fluid" src="http://shopsmartcart.reflomsolutions.com/webimg/store8.png" /></Link>
          </div>
          </Item>
        </Carousel>
      </div>

             


        </React.Fragment>
     
    );


}
export default Categoriesslider;

