import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Storeinfo=()=>{

    return(
        <React.Fragment>
            <div className="container-fluid"  className=" mt-5" style={{width:'100%' }}>
      
                        <Carousel>
                                <Carousel.Item className="text-center">
                                    <div style={{width:'100%',height:'300px'}}>
                                    <img src="http://shopsmartcart.reflomsolutions.com/webimg/store-banner6.jpg"/>
                                    </div>
                                    <Carousel.Caption>
                                        
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item  className="text-center">
                                <div style={{width:'100%',height:'300px'}}>
                                    <img src="http://shopsmartcart.reflomsolutions.com/webimg/store-banner6.jpg"/>
                                    </div>
                                    <Carousel.Caption>
                                        
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item className="text-center">
                                    <div style={{width:'100%',height:'300px'}}>
                                    <img src="http://shopsmartcart.reflomsolutions.com/webimg/store-banner4.jpg"/>
                                    </div>
                                    <Carousel.Caption>
                                        
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item className="text-center">
                                    <div style={{width:'100%',height:'300px'}}>
                                    <img src="http://shopsmartcart.reflomsolutions.com/webimg/store-banner5.jpg"/>
                                    </div>
                                    <Carousel.Caption>
                                        
                                    </Carousel.Caption>
                                </Carousel.Item>

                                

                    </Carousel>
            </div>

        </React.Fragment>
        
    );
}
export default Storeinfo;