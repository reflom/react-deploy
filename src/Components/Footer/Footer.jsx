// import React from 'react';
// import { Link } from 'react-router-dom';
// import CopyrightIcon from '@material-ui/icons/Copyright';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// // import Logo from '../';

// const Footer=()=>{
//         return(
//             <React.Fragment>
//             <div className="container-fluid p-0" style={{width:'100%' ,height:'auto', backgroundColor:'#F5F5F5',marginBottom:'0px!important'}}>
               
//                     <div className="container-fluid p-3" style={{width:'100%' ,height:'auto', backgroundColor:'#F5F5F5'}}> 
                    
//                             <div className='row ' >

//                                     <div className="col-sm-4 text-center" style={{width:'100%', backgroundColor:'#F5F5F5'}}>
//                                         <ul className="list-unstyled p-3" >
//                                                     <li className="pt-1"><Link  style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242'}}>Get Started</Link></li>
//                                                     <li className="pt-2" style={{fontFamily:'Work Sans',textDecoration:'none'}}>
//                                                     Social Links
                                                    
                                                   
//                                                         <ol   className="list-unstyled  pt-3 "  >
                                                        
//                                                         <div className="container-fluid " style={{display:"flex",marginLeft:"90px"}}>
//                                                             <li className="pl-2" ><Link style={{color:'black'}}><FacebookIcon fontSize='large'/></Link></li>
//                                                             <li className="pl-2" ><Link style={{color:'black'}}><InstagramIcon fontSize='large'/></Link></li>
//                                                             <li className="pl-2" ><Link style={{color:'black'}}><TwitterIcon fontSize='large'/></Link></li>
//                                                             <li className="pl-2" ><Link style={{color:'black'}}><YouTubeIcon fontSize='large'/></Link></li>
//                                                         </div>
                                                        
//                                                         </ol>
                                                    
                                                   
                                                    
//                                                     </li>
                                                    
//                                                     <li className="pt-1 pt-3" style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242'}} >We Accept 
                                                    
                                                    
//                                                     <ol   className="list-unstyled text-center pt-3 " style={{display:"flex"}} >
                                                        
//                                                         <li >
//                                                             <div className="pl-2" >
//                                                              <img className="img-thumbnail"src="http://shopsmartcart.reflomsolutions.com/webimg/visacard.png"/>
//                                                              </div>
//                                                         </li>
                                                        
//                                                         <li>

//                                                         <div className="pl-2" >
//                                                         <img  className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/american.png"/>
//                                                         </div>
                                                        
//                                                         </li>

//                                                         <li > 
//                                                         <div className="pl-2" >
//                                                         <img  className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/maestro.png"/>
//                                                         </div>
//                                                         </li>

//                                                         <li >
//                                                         <div className="pl-2">
//                                                         <img  className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/mastercard.png"/>
//                                                         </div>
//                                                         </li>
//                                                     </ol>
                                                  

                                                    
                                                    
                                                    
//                                                     </li>
                                        
                                        
                                      
                                        
//                                         </ul>
//                                     </div>

//                                     <div className="col-sm-4  text-center" style={{width:'100%', backgroundColor:'#F5F5F5'}}>
//                                             <ul className="list-unstyled p-3">
//                                                 <li className="pt-1"><Link  style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',color:'#424242'}}>Our Location</Link></li>
//                                                 <li className="pt-2"><Link style={{fontFamily:'Work Sans', textDecoration:'none',color:'#424242',color:'#424242'}}>Help</Link></li>
//                                                 <li className="pt-2"><Link style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',color:'#424242'}} >Contact Us</Link></li>
//                                             </ul>

//                                     </div>

//                                     <div className="col-sm-4   text-center" style={{width:'100%', backgroundColor:'#F5F5F5'}}>
                                    
//                                     <ul className="list-unstyled p-3 ">
//                                                 <li className="pt-1"><Link  style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242'}}>Who Are We</Link></li>
//                                                 <li  className="pt-2"><Link style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242'}}>Privacy</Link></li>
//                                                 <li className="pt-2"><Link style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242'}} >Terms</Link></li>
//                                             </ul>
//                                     </div>
//                             </div>   


                   
//                     </div>

//                     <div style={{width:'100%', backgroundColor:'#eb8025'}}>
                                
//                          <p className="p-3 text-center" style={{fontFamily:'Work Sans',fontWeight:'300',color:'white'}}><CopyrightIcon/> Shop Smart Cart 2020 All Rights Reserved</p>
//                      </div>

//             </div>
            
//             </React.Fragment>
//         );
// }
// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
// import Logo from '../';

const Footer=()=>{
        return(
            <React.Fragment>
                    <div className="container-fluid mt-4" style={{height:'400px', backgroundColor:'#eb8025'}}>
                    <div className='row ' >

                                    <div className="col-sm-4 text-center mt-5" style={{width:'100%', backgroundColor:'#eb8025'}}>
                                        <ul className="list-unstyled p-3" >
                                                    <li className="pt-1 mt-3"><Link  style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',fontSize:'20px',color:'black'}}>Get Started</Link></li>
                                                    <li className="pt-2 mt-3 " style={{fontFamily:'Work Sans',textDecoration:'none',fontSize:'20px'}}>
                                                    Social Links
                                                  
                                                   
                                                         <ol   className="list-unstyled  pt-3 mt-3"  >
                                                        
                                                        <div className="container-fluid justify-content-center" style={{display:"flex"}}>
                                                             <li className="pl-2" ><Link style={{color:'black'}}><FacebookIcon fontSize='large'/></Link></li>
                                                             <li className="pl-2" ><Link style={{color:'black'}}><InstagramIcon fontSize='large'/></Link></li>
                                                             <li className="pl-2" ><Link style={{color:'black'}}><TwitterIcon fontSize='large'/></Link></li>
                                                            <li className="pl-2" ><Link style={{color:'black'}}><YouTubeIcon fontSize='large'/></Link></li>
                                                        </div>
                                                        
                                                        </ol>
                                                    
                                                   
                                                    
                                                     </li>
                                                    
                                                    <li className="pt-1 pt-3 mt-3" style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',fontSize:'20px',color:'black'}} >We Accept 
                                                    
                                                    
                                                     <ol   className="list-unstyled text-center pt-3 mt-3" style={{display:"flex"}} >
                                                        
                                                         <li >
                                                             <div className="pl-2" >
                                                              <img className="img-thumbnail"src="http://shopsmartcart.reflomsolutions.com/webimg/visacard.png"/>
                                                              </div>
                                                         </li>
                                                        
                                                        <li>

                                                         <div className="pl-2" >
                                                         <img  className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/american.png"/>
                                                         </div>
                                                      
                                                         </li>

                                                         <li > 
                                                         <div className="pl-2" >
                                                         <img  className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/maestro.png"/>
                                                         </div>
                                                         </li>

                                                         <li >
                                                         <div className="pl-2">
                                                         <img  className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/mastercard.png"/>
                                                         </div>
                                                         </li>
                                                     </ol>
                                                  

                                                    
                                                    
                                                    
                                                     </li>
                                        
                                        
                                      
                                        
                                         </ul>
                                     </div>

                                     <div className="col-sm-4 mt-5 text-center" style={{width:'100%', backgroundColor:'#eb8025'}}>
                                             <ul className="list-unstyled p-3">
                                                 <li className="pt-1 mt-3"><Link  style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',color:'#424242',fontSize:'20px',color:'black'}}>Our Location</Link></li>
                                                 <li className="pt-2 mt-3"><Link style={{fontFamily:'Work Sans', textDecoration:'none',color:'#424242',color:'#424242',fontSize:'20px',color:'black'}}>Help</Link></li>
                                                 <li className="pt-2 mt-3"><Link style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',color:'#424242',fontSize:'20px',color:'black'}} >Contact Us</Link></li>
                                             </ul>

                                     </div>

                                    <div className="col-sm-4 mt-5  text-center" style={{width:'100%', backgroundColor:'#eb8025'}}>
                                    
                                     <ul className="list-unstyled p-3 ">
                                                 <li className="pt-1 mt-3"><Link  style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',fontSize:'20px',color:'black'}}>Who Are We</Link></li>
                                                 <li  className="pt-2 mt-3"><Link style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',fontSize:'20px',color:'black'}}>Privacy</Link></li>
                                                 <li className="pt-2 mt-3"><Link style={{fontFamily:'Work Sans',textDecoration:'none',color:'#424242',fontSize:'20px',color:'black'}} >Terms</Link></li>
                                             </ul>
                                     </div>
                             </div>   


                   
                     </div>

                <div style={{ width: '100%', backgroundColor:'#F5F5F5'}}>
                                
                         <p className="p-4 text-center" style={{fontFamily:'Work Sans',fontWeight:'300',color:'white',fontSize:'20px',color:'black'}}><CopyrightIcon/> Shop Smart Cart 2020 All Rights Reserved</p>
                    </div>

           
            </React.Fragment>
        );
}
export default Footer;