// import  React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import {Link } from 'react-router-dom';
// import './Storeslider.css';
// const Storeslider=()=>{
     
     
//      const responsive = {
          
//           desktop: {
//             breakpoint: { max: 3000, min: 768 },
//             items: 1
//           },
//           tablet: {
//             breakpoint: { max: 768, min: 420 },
//             items: 1
//           },
//           mobile: {
//             breakpoint: { max: 420, min: 0 },
//             items: 1
//           }
//         };


//         return(
//              <React.Fragment>
//                   <div className="container-fluid mt-3 mb-3">
                         
//                          <div className="text-center mb-3">
//                               <h3 >   Store Partners </h3>
//                          </div> 

//                          <div className="conatiner-fluid " style={{backgroundColor:'#f5f5f5',}}>
//                          <Carousel responsive={responsive}>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                    <Link to='/storedashboard'>  <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link> 
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                     <Link>   <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link> 
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>
                         
//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>

//                          <div style={{height:'150px', width:'150px',margin:'auto'}}>
//                                         <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" />
//                          </div>

//                                    {/* <div style={{height:'150px', width:'150px'}}>
//                                         <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link>
//                                    </div>
                            
//                                    <div  className="text-center mt-4" style={{height:'150px', width:'150px'}}>
//                                         <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link>
//                                    </div>
                            
//                                    <div  className="text-center mt-4 " style={{height:'150px', width:'150px'}}>
//                                         <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link>
//                                    </div>
                           
//                                    <div  className="text-center mt-4 "  style={{height:'150px', width:'150px'}}>
//                                         <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link>
//                                    </div>
                           
//                                    <div  className="text-center mt-4" style={{height:'150px', width:'150px'}}>
//                                         <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link>
//                                    </div>
                            
//                                    <div   className="text-center mt-4"style={{height:'150px', width:'150px'}}>
//                                         <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link>
//                                    </div>
                              
//                                    <div   className="text-center mt-4 "style={{height:'150px', width:'150px'}}>
//                                         <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link>
//                                    </div>
                            
//                                    <div  className="text-center mt-4" style={{height:'150px', width:'150px'}}>
//                                         <Link> <img className="rounded-circle img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" /></Link>
//                                    </div> */}
                          
                              
                              
//                               </Carousel>
//                          </div>



//                   </div>
//              </React.Fragment>
//         );



// }
// export default Storeslider;

import React from 'react';
import {Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
import Item from "./Iteam";

const breakPoints = [
     { width: 337, itemsToShow: 1 },
     { width: 550, itemsToShow: 2 },
     { width: 768, itemsToShow: 3 },
     { width: 1200, itemsToShow: 5 },
   ];


const Storeslider=()=>{

     

 return(
        <React.Fragment>


        <div className="App mt-4 mb-2" style={{marginTop:'300px'}}>
          <h2 className="text-center mt-5 mr-5 ml-5" style={{fontSize:'30px '}}>FEATURED  <span style={{color:'orange'}}> STORES </span></h2>
          <h3  className="text-center ">DELIVERING FROM YOUR DESIRED STORES!</h3>
        <Carousel breakPoints={breakPoints} pagination={false} style={{marginTop:'70px',marginBottom:"70px"}}>
          <Item>
          
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage1.png" /></Link>
          </div>
          
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage2.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage3.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage4.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className=" img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage5.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage6.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage7.png" /></Link>
          </div>
          </Item>

          <Item>
          <div  className="text-center "  style={{height:'200px', width:'200px',margin:'auto'}}>
           <Link to='/dashboard'> <img className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage8.png" /></Link>
          </div>
          </Item>
        </Carousel>
      </div>

             


        </React.Fragment>
     
    );


}
export default Storeslider;