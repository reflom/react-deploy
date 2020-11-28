// import  React from 'react';
// import './Allproduct.css';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// class Allproducts extends React.Component{
//   constructor() {
//     super();
//   }
  
  
 

//   componentDidMount() {
   
//     async function getUser() {
//       try {
//         const response = await axios.get('/user?ID=12345');
//         console.log(response);
//       } catch (error) {
//         console.error(error);
//       }
//     }
 
//   }


//   render() {
//     return (
//       <>
//           <div className="mt-3 mb-3" >
//             <div >
//                   <div class="ui large breadcrumb">
//                     <a class="section">Home</a>
//                     <i class="right chevron icon divider"></i>
//                     <a class="section">store</a>
//                     <i class="right chevron icon divider"></i>
//                     <i class="section"> Categorie</i>
//                     <i class="right chevron icon divider"></i>
//                     <div class="active section">All Products</div>
//                     <i class="right chevron icon divider"></i>
                    
//                   </div>

//               </div>


//             <div className="ui  cards justify-content-center" style={{marginTop:"20px"}}>
              
             
//                   <div className="card">
                        
//                          <div className="image">
//                          <p className="text-right mr-2 mt-2"style={{margin:'0px',height:'10px'}}><FavoriteBorderIcon /></p>
//                           <img src="http://shopsmartcart.reflomsolutions.com/webimg/product.png" alt="product1 "/>
//                           </div>

//                           <div class="content">
//                               <div class="header">Milk </div>
                                    
//                                 <div class="description">
//                                   250ml Nestle milk
//                                 </div>
//                                 <div class="footer header mt-2">$ 25</div>
//                         </div>

//                               <div class="extra content">
//                                     <div class="ui two buttons">
//                                       <div class="ui basic green button"><ShoppingCartIcon/>Add to cart</div>
//                                       <div class="ui basic blue button">Buy now</div>
                                     
//                                     </div>
//                               </div>

//                      </div>
                
               

//                           <div class="card">
                        
//                         <div class="image">
//                         <p className="text-right mr-2 mt-2"style={{margin:'0px',height:'10px'}}><FavoriteBorderIcon /></p>
//                              <img src="http://shopsmartcart.reflomsolutions.com/webimg/product.png"  alt="product1 "/>
//                          </div>

//                          <div class="content">
//                              <div class="header">Milk</div>
                                   
//                                <div class="description">
//                                  250ml Nestle milk
//                                </div>
//                                <div class="footer header mt-2">$ 25</div>
//                        </div>

//                              <div class="extra content">
//                                    <div class="ui two buttons">
//                                      <div class="ui basic green button"><ShoppingCartIcon/>Add to cart</div>
//                                      <div class="ui basic blue button">Buy now</div>
//                                    </div>
//                              </div>

//                          </div>


//                          <div class="card">
                        
//                         <div class="image">
//                         <p className="text-right mr-2 mt-2"style={{margin:'0px',height:'10px'}}><FavoriteBorderIcon /></p>
//                              <img src="http://shopsmartcart.reflomsolutions.com/webimg/product.png"  alt="product1 "/>
//                          </div>

//                          <div class="content">
//                              <div class="header">Milk</div>
                                   
//                                <div class="description">
//                                  250ml Nestle milk
//                                </div>
//                                <div class="footer header mt-2">$ 25</div>
//                        </div>

//                              <div class="extra content">
//                                    <div class="ui two buttons">
//                                      <div class="ui basic green button"><ShoppingCartIcon/>Add to cart</div>
//                                      <div class="ui basic blue button">Buy now</div>
//                                    </div>
//                              </div>

//                          </div>



                        


                        


                         





//             </div>
// </div>          
//         </>
     
//     );
//   }
// }
  

 
// export default Allproducts;

import  React from 'react';
import './Allproduct.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Allproducts extends React.Component{
  constructor() {
    super();
  }
  
  
 

  // componentDidMount() {
   
  //   async function getUser() {
  //     try {
  //       const response = await axios.get('/user?ID=12345');
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
 
  // }


  render() {
    return (
      <>

     <div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card h-100">
     
      <div class="view overlay">
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
          alt="Card image cap"/>
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

 
      <div class="card-body">

      
        <h4 class="card-title">Card title</h4>
       
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
       
        <button type="button" class="btn btn-light-blue btn-md">Read more</button>

      </div>

    </div>
  
  </div>
  <div class="col mb-4">
    <div class="card h-100">
    
      <div class="view overlay">
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"/>
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

     
      <div class="card-body">

      
        <h4 class="card-title">Card title</h4>
       
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
       
        <button type="button" class="btn btn-light-blue btn-md">Read more</button>

      </div>

    </div>
    
  </div>
  <div class="col mb-4">
    <div class="card h-100">
     
      <div class="view overlay">
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"/>
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    
      <div class="card-body">

       
        <h4 class="card-title">Card title</h4>
       
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content. Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
       
        <button type="button" class="btn btn-light-blue btn-md">Read more</button>

      </div>

    </div>
    
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      
      <div class="view overlay">
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"/>
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    
      <div class="card-body">

      
        <h4 class="card-title">Card title</h4>
       
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
     
        <button type="button" class="btn btn-light-blue btn-md">Read more</button>

      </div>

    </div>
    
  </div>
</div>
    


          
      </>
     
    );
  }
}
  

 
export default Allproducts;