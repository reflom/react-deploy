// import React from 'react';

// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Navbar from 'react-bootstrap/Navbar';
// import NavbarBrand from 'react-bootstrap/NavbarBrand';
// import { Nav } from 'react-bootstrap';
// import NavItem from 'react-bootstrap/NavItem';
// import  MenuItem from '@material-ui/core/MenuItem';

// import  {Link} from 'react-router-dom';
// import './Header.css';
// import Button from '@material-ui/core/Button';

// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Badge from '@material-ui/core/Badge';
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

// const Header=()=>{
   
//   // const [open, setOpen] = useState(false);

// return (
  
// <React.Fragment>

    

//        <Navbar style={{backgroundColor:'#F5F5F5'}} expand='lg' style={{height:'84px'}}  >
//             <NavbarBrand className=" head brand m-4 col-md-2"  style={{fontSize:'40px',fontFamily:'work sans'}}><strong>Smart Shop</strong></NavbarBrand>
           
//              <NavItem className="searchbar" style={{marginLeft:'100px'}} >
           
//             <InputBase
//             placeholder="Search for Stores.."
//             className="text-center pl-2 "   
//             style={{width:'300px'}} 
//             startAdornment=
//             {<InputAdornment position="start">
//             <SearchIcon id="searchicon"/>
//             </InputAdornment>}
//              style={{border:'2px solid #eb8025',borderRadius:'8px'}}                                   
//             />
     
//             </NavItem> 

//              <NavItem className="searchbar flui justify-content-between col-md-6"  >

//              <div className="ui large search" >
//                 <div class="ui icon input" style={{width:'100%'}} >
//                   <input className="prompt" type="text" placeholder="Search Products.." style={{width:'100% !important'}}/>
//                   <i className="search icon"></i>
//                 </div>
//                 <div className="results"></div>
//               </div>
//             </NavItem>




//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav" >
     
        





     
//      <div className="navbar-collapse navicons justify-content-end col-md-12" style={{display:'flex'}}>
          
//      <Nav.Link  id="bellicon"style={{color:'black'}}>
//               <Badge badgeContent={4} color="secondary">
//                  <NotificationsNoneIcon fontSize='large'/>
//               </Badge>
//           </Nav.Link>

         

//           <Nav.Link className="mr-4">
//           <div class="ui large compact menu" style={{border:'none'}}>
//             <div class="ui simple dropdown item" >
//               Hii Rini
//               <i class="dropdown icon"></i>
//               <div class="menu ">
              
//                   <div class="item">
                   
//                     <Link to='/accountsection'  style={{color:"inherit"}}><strong>My Account</strong></Link>
//                   </div>

//                   <div class="item">
                   
//                     <Link to='/orderspage'  style={{color:"inherit"}}><strong>My Orders</strong></Link>
//                   </div>


//                   <div class="item">
                    
//                       <Link to='/addresspage'  style={{color:"inherit"}}><strong>Manage Address</strong></Link>
//                   </div>

//                   <div class="item">
                    
//                       <Link to='/'  style={{color:"inherit"}}><strong>Notification</strong></Link>
//                   </div>

//                   <div class="item">
                    
//                       <Link to='/referfriend'  style={{color:"inherit"}}><strong>Refer Friends</strong></Link>
//                   </div>
//                   <div class="divider"></div>
//                   <div class="item">
//                       <div class="ui "></div>
//                       <Link to='/' style={{color:"inherit"}}><strong>Logout</strong></Link>
//                   </div>
//               </div>
//             </div>
//           </div>

//           </Nav.Link >

//           <Link id="carticon" style={{color:'black'}} className="mr-5">
           
//             <button class="circular ui icon button"  style={{backgroundColor:'transparent'}}>
//               <Badge badgeContent={6} color="error">
//                 <ShoppingCartIcon fontSize='large' />
//               </Badge>
//               </button>
               
              
//             </Link>

    
      
//       </div>



//             </Navbar.Collapse>


//         </Navbar>
     
   

//     </React.Fragment>
 

// );
// }
// export default Header;



// import React from 'react';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Navbar from 'react-bootstrap/Navbar';
// import NavbarBrand from 'react-bootstrap/NavbarBrand';
// import { Nav } from 'react-bootstrap';
// import NavItem from 'react-bootstrap/NavItem';
// import  MenuItem from '@material-ui/core/MenuItem';
// import  {Link} from 'react-router-dom';
// import './Header.css';
// import Button from '@material-ui/core/Button';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Badge from '@material-ui/core/Badge';
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import IconButton from '@material-ui/core/IconButton';
// import Notification from './Notification';
// import history from '../../history';
// class Header extends React.Component{

//   constructor(props){
//     super(props)
//     this.state={
//       modal8: false,
//       modal9: false
//     }
//   }

//   toggle = nr => () => {
//     let modalNumber = 'modal' + nr
//     this.setState({
//       [modalNumber]: !this.state[modalNumber]
//     });
//   }

//   // gotoCheckout(){
//   //   window.location.replace("http://localhost:3000/checkoutpage");
//   // }

  



//   render(){
//     return(
//       <>



//         <Navbar style={{ backgroundColor: '#F5F5F5' }} expand='lg' style={{ height: '84px' }}  >
//             <NavbarBrand className=" head brand m-4 col-md-2"  style={{fontSize:'40px',fontFamily:'work sans'}}><strong>Smart Shop</strong></NavbarBrand>

//               {/* <NavItem className="searchbar" style={{marginLeft:'100px'}} >

//              <InputBase
//             placeholder="Search for Stores.."
//             className="text-center pl-2 "   
//             style={{width:'300px'}} 
//             startAdornment=
//             {<InputAdornment position="start">
//             <SearchIcon id="searchicon"/>
//             </InputAdornment>}
//              style={{border:'2px solid #eb8025',borderRadius:'8px'}}                                   
//             />

//             </NavItem>  */}

//              <NavItem className="searchbar flui justify-content-between col-md-6"  >

//              <div className="ui large search" >
//                 <div class="ui icon input" style={{width:'100%'}} >
//                   <input className="prompt" type="text" placeholder="Search Products.." style={{width:'100% !important'}}/>
//                   <i className="search icon"></i>
//                 </div>
//                 <div className="results"></div>
//               </div>
//             </NavItem>




//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav" >








//      <div className="navbar-collapse navicons justify-content-end col-md-12" style={{display:'flex'}}>

//      <div  id="bellicon"style={{color:'black'}}>
//                 <Notification/>
//      </div>



//           <Nav.Link className="mr-4">
//           <div class="ui large compact menu" style={{border:'none'}}>
//             <div class="ui simple dropdown item" >
//               Hii Rini
//               <i class="dropdown icon"></i>
//               <div class="menu ">

//                   <div class="item">

//                     <Link to='/accountsection'  style={{color:"inherit"}}><strong>My Account</strong></Link>
//                   </div>

//                   <div class="item">

//                     <Link to='/orderspage'  style={{color:"inherit"}}><strong>My Orders</strong></Link>
//                   </div>


//                   <div class="item">

//                       <Link to='/addresspage'  style={{color:"inherit"}}><strong>Manage Address</strong></Link>
//                   </div>

//                   <div class="item">

//                       <Link to='/'  style={{color:"inherit"}}><strong>Notification</strong></Link>
//                   </div>

//                   <div class="item">

//                       <Link to='/referfriend'  style={{color:"inherit"}}><strong>Refer Friends</strong></Link>
//                   </div>
//                   <div class="divider"></div>
//                   <div class="item">
//                       <div class="ui "></div>
//                       <Link to='/' style={{color:"inherit"}}><strong>Logout</strong></Link>
//                   </div>
//               </div>
//             </div>
//           </div>

//           </Nav.Link >

//           <div id="carticon" style={{color:'black'}} className="mr-5">

//                 <button class="circular ui icon button" style={{ backgroundColor: 'transparent' }} onClick={this.toggle(8)}>
//               <Badge badgeContent={6} color="error">
//                 <ShoppingCartIcon fontSize='large' />
//               </Badge>
//               </button>


//             </div>



//       </div>



//             </Navbar.Collapse>


//         </Navbar>

      

      
     
//         {/* <MDBBtn color="info">Right</MDBBtn> */}

//         <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
//           <MDBModalHeader toggle={this.toggle(8)}> <span style={{ color: 'green' }}><h3>My Cart</h3></span> </MDBModalHeader>
//           <MDBModalBody >



//              <div className="row">
                
//                 <div className="col-sm-3">
//                   <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
//                     <img src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" class="rounded-circle img-fluid" />
//                   </div>
//                 </div>

//                 <div className="col-sm-6 p-3">  
                
//                   <h4>Walmart </h4>

//                 </div>

//                 <div className="col-sm-3 float-right p-3" >
//                   <h3>$16.55</h3>
//                 </div>

//             </div>
// <hr/>
//             <div className="row mt-3">

//               <div className="col-sm-2">
//                 <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
//                   <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage9.jpeg" class="img-fluid "/>
//                 </div>
//               </div>

//               <div className="col-sm-6 p-2">

//                 <h4>Car Air Freshener</h4>

//               </div>

//               <div className="col-sm-2 p-2" >
//                <button class="ui active button">1</button>
//               </div>

//               <div className="col-sm-2 p-3 " >
//                 <h5>$9.55</h5>
//               </div>

//             </div>

           

//             <div className="row mt-4">

//               <div className="col-sm-2">
//                 <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
//                   <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage8.jpeg" class="img-fluid " />
//                 </div>
//               </div>

//               <div className="col-sm-6 p-2">

//                 <h4>Febreze Fabric Refresher, Clean Auto</h4>

//               </div>

//               <div className="col-sm-2 p-2" >
//                 <button class="ui active button">1</button>
//               </div>

//               <div className="col-sm-2 p-3 " >
//                 <h5>$6.55</h5>
//               </div>

//             </div>

// <hr/>

//             <div className="row">

//               <div className="col-sm-3">
//                 <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
//                   <img src="http://shopsmartcart.reflomsolutions.com/webimg/store4.png" class="rounded-circle img-fluid" />
//                 </div>
//               </div>

//               <div className="col-sm-6 p-3">

//                 <h4>The Wine Shop</h4>

//               </div>

//               <div className="col-sm-3 float-right p-3" >
//                 <h3>$10.55</h3>
//               </div>

//             </div>
//             <hr />
//             <div className="row mt-3">

//               <div className="col-sm-2">
//                 <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
//                   <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage12.jpeg" class="img-fluid " />
//                 </div>
//               </div>

//               <div className="col-sm-6 p-2">

//                 <h4>Jennie-O Fresh All-Natural 93% </h4>

//               </div>

//               <div className="col-sm-2 p-2" >
//                 <button class="ui active button">1</button>
//               </div>

//               <div className="col-sm-2 p-3 " >
//                 <h5>$9.55</h5>
//               </div>

//             </div>



//             <div className="row mt-4">

//               <div className="col-sm-2">
//                 <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
//                   <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage3.jpeg" class="img-fluid " />
//                 </div>
//               </div>

//               <div className="col-sm-6 p-2">

//                 <h4>House Party White Zinfandel</h4>

//               </div>

//               <div className="col-sm-2 p-2" >
//                 <button class="ui active button">1</button>
//               </div>

//               <div className="col-sm-2 p-3 " >
//                 <h5>$6.55</h5>
//               </div>

//             </div>

//             <hr />
           



          
//         </MDBModalBody>

            

// <button className="btn peach-gradient p-3"  ><Link to='/checkoutpage' style={{color:'none'}}>Go to Checkout <ShoppingCartIcon /></Link><span style={{ float: 'right' }}><h3>$25.6</h3></span></button>
             
            
//           </MDBModal>
             

//       </>
//     );
//   }
// }

// export default Header;

import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { Nav } from 'react-bootstrap';
import NavItem from 'react-bootstrap/NavItem';
import  MenuItem from '@material-ui/core/MenuItem';
import  {Link} from 'react-router-dom';
import './Header.css';
import Button from '@material-ui/core/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from '@material-ui/core/Badge';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import IconButton from '@material-ui/core/IconButton';
import Notification from './Notification';
import history from '../../history';
class Header extends React.Component{

  constructor(props){
    super(props)
    this.state={
      modal8: false,
      modal9: false
    }
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  // gotoCheckout(){
  //   window.location.replace("http://localhost:3000/checkoutpage");
  // }

  



  render(){
    return(
      <>



        <Navbar style={{ backgroundColor: '#F5F5F5' }} expand='lg' style={{ height: '84px' }}  >
            <NavbarBrand className=" head brand m-4 col-md-2"  style={{fontSize:'40px',fontFamily:'work sans'}}><Link to='/home' style={{color:'black',textDecoration:'none'}}>Smart Shop</Link></NavbarBrand>

              {/* <NavItem className="searchbar" style={{marginLeft:'100px'}} >

             <InputBase
            placeholder="Search for Stores.."
            className="text-center pl-2 "   
            style={{width:'300px'}} 
            startAdornment=
            {<InputAdornment position="start">
            <SearchIcon id="searchicon"/>
            </InputAdornment>}
             style={{border:'2px solid #eb8025',borderRadius:'8px'}}                                   
            />

            </NavItem>  */}

             <NavItem className="searchbar flui justify-content-between col-md-6"  >

             <div className="ui large search" >
                <div class="ui icon input" style={{width:'100%'}} >
                  <input className="prompt" type="text" placeholder="Search Products.." style={{width:'100% !important'}}/>
                  <i className="search icon"></i>
                </div>
                <div className="results"></div>
              </div>
            </NavItem>




            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >








     <div className="navbar-collapse navicons justify-content-end col-md-12" style={{display:'flex'}}>

     <div  id="bellicon"style={{color:'black'}}>
                <Notification/>
     </div>



          <Nav.Link className="mr-4">
          <div class="ui large compact menu" style={{border:'none'}}>
            <div class="ui simple dropdown item" >
              Hii Rini
              <i class="dropdown icon"></i>
              <div class="menu ">

                  <div class="item">

                    <Link to='/accountsection'  style={{color:"inherit"}}><strong>My Account</strong></Link>
                  </div>

                  <div class="item">

                    <Link to='/orderspage'  style={{color:"inherit"}}><strong>My Orders</strong></Link>
                  </div>


                  <div class="item">

                      <Link to='/addresspage'  style={{color:"inherit"}}><strong>Manage Address</strong></Link>
                  </div>

                  <div class="item">

                      <Link to='/'  style={{color:"inherit"}}><strong>Notification</strong></Link>
                  </div>

                  <div class="item">

                      <Link to='/referfriend'  style={{color:"inherit"}}><strong>Refer Friends</strong></Link>
                  </div>
                  <div class="divider"></div>
                  <div class="item">
                      <div class="ui "></div>
                      <Link to='/' style={{color:"inherit"}}><strong>Logout</strong></Link>
                  </div>
              </div>
            </div>
          </div>

          </Nav.Link >

          <div id="carticon" style={{color:'black'}} className="mr-5">

                <button class="circular ui icon button" style={{ backgroundColor: 'transparent' }} onClick={this.toggle(8)}>
              <Badge badgeContent={6} color="error">
                <ShoppingCartIcon fontSize='large' />
              </Badge>
              </button>


            </div>



      </div>



            </Navbar.Collapse>


        </Navbar>

      

      
     
        {/* <MDBBtn color="info">Right</MDBBtn> */}

        <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
          <MDBModalHeader toggle={this.toggle(8)}> <span style={{ color: 'green' }}><h3>My Cart</h3></span> </MDBModalHeader>
          <MDBModalBody >



             <div className="row">
                
                <div className="col-sm-3">
                  <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
                    <img src="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg" class="rounded-circle img-fluid" />
                  </div>
                </div>

                <div className="col-sm-6 p-3">  
                
                  <h4>Walmart </h4>

                </div>

                <div className="col-sm-3 float-right p-3" >
                  <h3>$16.55</h3>
                </div>

            </div>
<hr/>
            <div className="row mt-3">

              <div className="col-sm-2">
                <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
                  <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage9.jpeg" class="img-fluid "/>
                </div>
              </div>

              <div className="col-sm-6 p-2">

                <h4>Car Air Freshener</h4>

              </div>

              <div className="col-sm-2 p-2" >
               <button class="ui active button">1</button>
              </div>

              <div className="col-sm-2 p-3 " >
                <h5>$9.55</h5>
              </div>

            </div>

           

            <div className="row mt-4">

              <div className="col-sm-2">
                <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
                  <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage8.jpeg" class="img-fluid " />
                </div>
              </div>

              <div className="col-sm-6 p-2">

                <h4>Febreze Fabric Refresher, Clean Auto</h4>

              </div>

              <div className="col-sm-2 p-2" >
                <button class="ui active button">1</button>
              </div>

              <div className="col-sm-2 p-3 " >
                <h5>$6.55</h5>
              </div>

            </div>

<hr/>

            <div className="row">

              <div className="col-sm-3">
                <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
                  <img src="http://shopsmartcart.reflomsolutions.com/webimg/store4.png" class="rounded-circle img-fluid" />
                </div>
              </div>

              <div className="col-sm-6 p-3">

                <h4>The Wine Shop</h4>

              </div>

              <div className="col-sm-3 float-right p-3" >
                <h3>$10.55</h3>
              </div>

            </div>
            <hr />
            <div className="row mt-3">

              <div className="col-sm-2">
                <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
                  <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage12.jpeg" class="img-fluid " />
                </div>
              </div>

              <div className="col-sm-6 p-2">

                <h4>Jennie-O Fresh All-Natural 93% </h4>

              </div>

              <div className="col-sm-2 p-2" >
                <button class="ui active button">1</button>
              </div>

              <div className="col-sm-2 p-3 " >
                <h5>$9.55</h5>
              </div>

            </div>



            <div className="row mt-4">

              <div className="col-sm-2">
                <div class="avatar mx-auto " style={{ width: '50px', height: '50px' }}>
                  <img src="http://shopsmartcart.reflomsolutions.com/webimg/productimage3.jpeg" class="img-fluid " />
                </div>
              </div>

              <div className="col-sm-6 p-2">

                <h4>House Party White Zinfandel</h4>

              </div>

              <div className="col-sm-2 p-2" >
                <button class="ui active button">1</button>
              </div>

              <div className="col-sm-2 p-3 " >
                <h5>$6.55</h5>
              </div>

            </div>

            <hr />
           



          
        </MDBModalBody>

            

<button className="btn peach-gradient p-3"  ><Link to='/checkoutpage' style={{color:'none'}}>Go to Checkout <ShoppingCartIcon /></Link><span style={{ float: 'right' }}><h3>$25.6</h3></span></button>
             
            
          </MDBModal>
             

      </>
    );
  }
}

export default Header;
















