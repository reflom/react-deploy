// import React from 'react';

// const Storebio=()=>{

//     return(
//         <React.Fragment>
//             <div className="container-fluid mt-2 mb-2" style={{backgroundColor:'#f2f2f2'}}>
//             <div className="row">
//                 <div className="col-sm-1" >
//                         <div style={{width:'120px',alignItems:'center'}}>
//                             <img style={{maxHeight:'100%',maxWidth:'100%'}}className="img-thumbnail rounded-circle"src="http://shopsmartcart.reflomsolutions.com/webimg/storelogo1.png"/>
//                         </div>
//                 </div>

//                 <div className="col-sm-11 ">
//                     <h3 className="ml-4">Shop Chart</h3>
//                     <strong  className="ml-4">It is a long established fact that a reader will whe poinpsum is that it has a more-or-less normal distribution of letters, as opposed</strong>
//                 </div>

//             </div>
//             </div>

//             {/* src="http://shopsmartcart.reflomsolutions.com/webimg/storelogo1.png" */}
//         </React.Fragment>
//     );
// }
// export default Storebio; 

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
import Button from '@material-ui/core/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from '@material-ui/core/Badge';


const Storebio=()=>{

    return(
        <>
           <div>
           <Navbar style={{backgroundColor:'#F5F5F5'}} expand='lg' style={{height:'84px'}}  >
            <NavbarBrand className=" head brand m-4"  style={{fontSize:'40px',fontFamily:'work sans'}}><strong>Smart Shop</strong></NavbarBrand>
           
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
     
            </NavItem> */}

            



            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
     
        





     
     <div className="navbar-collapse navicons justify-content-end" style={{display:'flex'}}>
          
     <Nav.Link  id="bellicon"style={{color:'black'}}>
              <Badge badgeContent={4} color="secondary">
                 <NotificationsNoneIcon fontSize='large'/>
              </Badge>
          </Nav.Link>

         

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
                      <Link to='/home' style={{color:"inherit"}}><strong>Logout</strong></Link>
                  </div>
              </div>
            </div>
          </div>

          </Nav.Link >

          <Link to='/shoppingcartpage' id="carticon" style={{color:'black'}} className="mr-5">
            <Badge badgeContent={6} color="error">
                <ShoppingCartIcon fontSize='large'/>
              </Badge>
            </Link>

           
               

          
         
         
          {/* <Nav.Link style={{color:'inherit '}}>
          
            <DropdownButton  id="myprofile" alignRight title={<AccountCircleIcon/>} style={{backgroundColor:'inherit' ,textDecoration:'none'}}>
            
            <Dropdown.Item className="mt-2"><Link to='/accountsection'><strong>My Account</strong></Link></Dropdown.Item>
            <Dropdown.Item className="mt-2"><Link to='/orderspage'><strong>My Orders</strong></Link></Dropdown.Item>
            <Dropdown.Item className="mt-2"><Link to='/addresspage'><strong>Manage Address</strong></Link></Dropdown.Item>
            <Dropdown.Item className="mt-2"><Link to='/'><strong>Notification</strong></Link></Dropdown.Item>
            <Dropdown.Item className="mt-2"><Link to='/referfriend'><strong>Refer Friends</strong></Link></Dropdown.Item>
            <Dropdown.Item className="mt-2"><Link to='/giftcard'><strong>Gift Cards</strong></Link></Dropdown.Item>
            
            <Dropdown.Item className="mt-2"><Link to='/logoutpage'><strong>Logout</strong></Link></Dropdown.Item>
           
          </DropdownButton>
          
          </Nav.Link>      */}


          

           
        

       
      
      </div>

            </Navbar.Collapse>
        </Navbar>
           </div>
        </>
    );
}
export default Storebio; 



