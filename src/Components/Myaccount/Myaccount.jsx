import React,{useState} from 'react';
import { Segment, Image ,Button } from 'semantic-ui-react'
import { Modal} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';



const Myaccount=()=>{

    const [show, setShow] = useState(false);
    const[namemodalShow,setNameShow]=useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const handlenameShow = ()=> setNameShow(true);
    const handlenameshowClose = ()=>setNameShow(false);

    return(
        <React.Fragment>
        
                <div className="container-fluid p-2 " style={{width:'auto' ,height:'auto'}}>
                <Segment >
                    <div class="ui form" >
                            <h4 class="ui dividing header mt-2">Account Information </h4>
                            
                        <div class="field">
                            <label>Email ID</label>
                            <input placeholder="xacipe5112@insertswork.com" readonly="" type="text" className="place"  />
                        </div>

                        <div class="field">
                            <label>Password </label>
                            <input placeholder="************" readonly="" type="text"/>
                        </div>

                        
                        <Button className="ml-2" size='small' onClick={handleShow}>Change Password</Button>

                
                    </div>
                </Segment>

                <Segment style={{height:'170px ' }}>
                <h4 class="ui dividing header mt-1 ">Account Information </h4>
                <Button className="ml-2" size='small'  style={{float:'right',marginButtom:'10px'}} onClick={handlenameShow}>Edit</Button>
                        <div style={{width:'100px'}}>
                            <Image className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/profile2.jpg"   size='small' floated='left' circular />
                         </div>
                        <div className="ml-3 mt-3" style={{margin:'auto'}}>
                            <h3>Name : Ravi</h3>
                            <h5 style={{margin:'auto'}}>Contact No : +91 41212123 </h5>
                        </div>
                        </Segment>


</div>


<Modal size='md'
         style={{background:'white'}}
          show={show} 
         aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <Modal.Header closeButton onClick={handleClose} style={{ border: 'none' }}>

             <h1 style={{margin:'2px'}}>Change password </h1>
          </Modal.Header>
          <Modal.Body >

          <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             name="password"
             label="Current Password "
             type="password"
             id="password"
             autoComplete="current-password"
           
            
             
           />


    <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             name="password"
             label="New Password "
             type="password"
             id="password"
             autoComplete="current-password"
           
             
             
           />   

<TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             name="password"
             label="Confirm Password "
             type="password"
             id="password"
             autoComplete="current-password"
           
            
             
           />   

<div className="text-center " style={{float:'right'}}> 
<Button color='orange' size="large" >Save</Button>
</div>

          </Modal.Body>

</Modal>

<Modal size='md'
         style={{background:'white'}}
         show={namemodalShow} 
         aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <Modal.Header closeButton onClick={handlenameshowClose} style={{ border: 'none' }}>
            <h1 style={{margin:'2px'}}>Change Name</h1>
           
          </Modal.Header>
          <Modal.Body >

          <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             name="name"
             label="Enter Name "
             type="text "
             id="password"
             autoComplete="current-password"
           
            
             
           />


   



<div className="text-center " style={{float:'right'}}> 
<Button color='orange' size="large" onClick={()=>this.handleSubmit}>Save</Button>
</div>

          </Modal.Body>

</Modal>





        </React.Fragment>    
            );
}
export default Myaccount;

// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";


// class Myaccount extends React.Component{
//     constructor(props){
//     super(props)
//     this.state={

//     }
// }

//     componentDidMount(){

//     }

//     render(){
//         return(
//             <>
//                 <MDBContainer>
//                     <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                      
//                         <MDBCardBody style={{padding:'10px'}}>
//                             <MDBCardTitle > <h2>Account information</h2></MDBCardTitle>
//                             <MDBCardText>
//                                 With supporting text below as a natural lead-in to additional
//                                 content.
//                              </MDBCardText>
//                             <MDBBtn color="deep-orange">go somewhere</MDBBtn>
//                         </MDBCardBody>
//                     </MDBCard>
//                 </MDBContainer>

//             </>
//         );
//     }

// }
// export default Myaccount;
