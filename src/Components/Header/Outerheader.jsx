import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-modal/styles.css";
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';
import { Button,Modal} from 'react-bootstrap';
class Outerheader extends React.Component {
  
  constructor() {
    super();
    this.state = {
      showHide: false,
      showHide1: false,

    }
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }

  handleModalShowHide1() {
    this.setState({ showHide1: !this.state.showHide1 })
  }


 


  render() {

    return (
     
      <>
        <Navbar collapseOnSelect expand="lg">
                
          <Navbar.Brand className="m-4" style={{ fontSize: '40px', fontFamily: 'work sans' }}> <Link to='/' style={{color:'black',textDecoration:'none'}}>Smart Shop</Link></Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'flex-end'}}>

                    <div className="d-flex ">
                   
              <Link to=''>  <button className="btn peach-gradient btn-lg" onClick={() => this.handleModalShowHide()} style={{fontSize:'17px'}}>Sign IN</button></Link>
              <Link to=''> <button className="btn peach-gradient btn-lg" onClick={() => this.handleModalShowHide1()} style={{ fontSize: '17px' }}>Sign Up</button></Link>      

                    </div>

            </Navbar.Collapse>
          </Navbar> 

        <Modal size='md' show={this.state.showHide}  >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()} style={{ border: 'none' }}>

          </Modal.Header>
          <Modal.Body style={{ margin: '10px' }}>

          <Signin/>
              

          </Modal.Body>

        </Modal>

        <Modal size='md' show={this.state.showHide1}  >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide1()} style={{ border: 'none' }}>

          </Modal.Header>
          <Modal.Body style={{ margin: '10px'}}>
            
            <Signup />
            

          </Modal.Body>

        </Modal>

       
       </>
    );
  }
}
export default Outerheader;



