import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import './Location.css';
import {Link } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Modal from 'react-bootstrap/Modal';
import Signin from '../Signin/Signin';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
       <Signin/>
       </Modal>
    );
  }




const  Location=()=>{
    const [modalShow, setModalShow] = React.useState(false);
return(
    <>


            <div className="container maindiv " style={{minHeight:'250px',backgroundColor:'#f2f2f2',margin:'auto',width:'40%',borderRadius:'15px'}}>
               
                    <h1 className="text-center m-4 p-3"> Groceries to your Door Step</h1>
                    <div style={{width:'400px',margin:'auto',marginTop:'50px',marginBottom:'30px'}}>
                    <form >
                    <OutlinedInput
                            startAdornment=
                            {<InputAdornment position="start">
                                <LocationOnRoundedIcon/>
                            </InputAdornment>}
                            placeholder="Enter your City"
                            fullWidth
                            className="mb-2 "
                            autoComplete="address"
                    />

                    <button className="fluid big orange  ui button mt-4">
                        Continue
                    </button>

                    <p className="p-3" style={{textAlign:'center' ,fontSize:'20px' }}> Already have an Account ? <span  > <Link style={{color:'orange'}} onClick={() => setModalShow(true)}>
                                Sign in
                            </Link></span></p>
                    
                    
                   

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                    
                    
                    
                    
                    
                    </form>
                </div>
            </div>
    </>
);

}
export default Location;