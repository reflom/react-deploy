// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// const Banner=()=>{

// return(
//     <React.Fragment>
//     <div className="container-fluid"  style={{width:'100%',marginTop:'20px',marginBottom:'20px',marginLeft:'0px',marginRight:'0px' }}>
//        {/* <Container fluid="md"> */}
//        <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="http://shopsmartcart.reflomsolutions.com/webimg/product1.jpg"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>Beverages</h3>
//       <p>Beverages are availabe from various stores</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="http://shopsmartcart.reflomsolutions.com/webimg/product2.jpg"
//       alt="Beverages "
//     />

//     <Carousel.Caption>
//       <h3>General Products</h3>
//       <p>Shop now..!!! </p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="http://shopsmartcart.reflomsolutions.com/webimg/product3.jpg"
//       alt="General store products on great discount "
//     />

//     <Carousel.Caption>
//       <h3>Shop Veggies</h3>
//       <p>Every day is a good day </p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// </div>
  

//     </React.Fragment>
// )

// }
// export default Banner;

import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';


var sectionStyle1 = {
  width: "100%",
  height: "600px",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: "url("+"http://shopsmartcart.reflomsolutions.com/webimg/product3.jpg"+")"
};

var sectionStyle2 = {
  width: "100%",
  height: "600px",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: "url("+"http://shopsmartcart.reflomsolutions.com/webimg/product2.jpg"+")"
};

var sectionStyle3 = {
  width: "100%",
  height: "600px",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: "url("+"http://shopsmartcart.reflomsolutions.com/webimg/product1.jpg"+")"
};




const Banner=()=>{


 

  return (
    <React.Fragment>
<div id="background-carousel">
    <Carousel  style={{    zIndex: '0 !important'}}>
    
    <Carousel.Item active>
      
            <div style={sectionStyle1} alt="first image">
            
            </div>
     
    </Carousel.Item>

    <Carousel.Item>
     
            <div style={sectionStyle2} >
            
            </div>
  
    </Carousel.Item>

    <Carousel.Item>
    
            <div style={sectionStyle3} >
            
            </div>

    </Carousel.Item>
    

     </Carousel>
 
  
</div>
    </React.Fragment>
  );
}
export default Banner;