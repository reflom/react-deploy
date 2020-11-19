import React from 'react'
import {Link} from 'react-router-dom';
import { Form } from 'react-bootstrap';

class Storeinfoheader extends React.Component{
constructor(props){
    super(props)
    this.state={

    }
}
render(){
    return(
        <>

 
      <section className="container-fluid" id="background-img"  style={{width:'100%',height:'300px',filter:"blur(4px)"}}></section>
        
        <div class="container-fluid mb-3">
  

  <section  >

    <div class="mask d-flex justify-content-center align-items-center" >
   
      <div class="container py-5  " style={{position:'absolute',top:'53px'}}>
        
  
        <div class="row d-flex align-items-center justify-content-center">
      
          <div class="col-md-8" >

                    <div className="card-transperent   p-3" style={{zIndex:"1"}}> 
                        <div class="testimonial">
                         <Link>
                            <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                <img src="http://shopsmartcart.reflomsolutions.com/webimg/storeimage4.png" class="rounded-circle img-fluid"/>
                            </div>
                            </Link>
                        </div>
                                <h3 class="font-weight-bold my-3 text-center" style={{color:'white'}}>Whole Foods Market</h3>

                                <div class="ui fluid category search">
                            <div class="ui icon input" style={{width:'100%'}}>
                                <input class="prompt" type="text" placeholder="Search Products...."/>
                                <i class="search icon"></i>
                            </div>
                            <div class="results"></div>
                            </div>    
                    </div>
               
               

                <form >
                   

                   
                </form>
              
            
      
          </div>
      
        </div>
       
      </div>
   
    </div>

  </section>

  
</div>
        </>
    );
}

}
export default Storeinfoheader;