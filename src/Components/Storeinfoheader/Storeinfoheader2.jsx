import React, { Component } from 'react'
import './Storeinfoheader2.css'
class Storeinfoheader2 extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        return(
            <>

<section className="container-fluid " id="background-img"  style={{width:'100%',height:'170px',filter:"blur(6px)"}}></section>
   
    <div className="container-fluid" style={{position:'absolute',top:'90px'}}>
        <div class="row justify-content-center">

       
        <div class="col-md-2   ">
        <div className="text-center mt-2" style={{width:'120px'}}>
          <img src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" class="img-fluid rounded-circle z-depth-1" data-wow-delay=".2s"/>
          </div>
          <p style={{color:"white",fontSize:'30px'}}> Walmart</p>
        </div>

        <div class="col-md-8" style={{alignItems:'middle'}}>
                   
                    <ul style={{color:'white',display:'flex',paddingTop:'60px'}} > 
                                <li style={{ fontSize: '20px' }}>Accessories</li>
                        <li  className="ml-5" style={{fontSize:'20px'}}>Grocery</li>
                                <li className="ml-5" style={{ fontSize: '20px' }}>Bevarages</li>
                    </ul>
        </div>
     
    </div>
  




            </div>


 
            </>
        );
    }
}
export default Storeinfoheader2;