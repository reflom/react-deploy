// import React from 'react';
// import { Segment, Image ,Button } from 'semantic-ui-react'

// const Myaccount=()=>{


//     return(
//         <React.Fragment>
        
//                 <div className="container-fluid p-2 " style={{width:'auto' ,height:'auto'}}>
//                 <Segment >
//                     <div class="ui form" >
//                             <h4 class="ui dividing header mt-2">Account Information </h4>
                            
//                         <div class="field">
//                             <label>Email ID</label>
//                             <input placeholder="xacipe5112@insertswork.com" readonly="" type="text" className="place"  />
//                         </div>

//                         <div class="field">
//                             <label>Password </label>
//                             <input placeholder="************" readonly="" type="text"/>
//                         </div>

//                         <Button className="ml-2" size='small'>Edit</Button>
//                         <Button className="ml-2" size='small'>Change Password</Button>

                
//                     </div>
//                 </Segment>

//                 <Segment style={{height:'170px ' }}>
//                 <h4 class="ui dividing header mt-1">Account Information </h4>
//                         <div style={{width:'100px'}}>
//                             <Image className="img-thumbnail" src="http://shopsmartcart.reflomsolutions.com/webimg/profile2.jpg"   size='small' floated='left' circular />
//                          </div>
//                         <div className="ml-3 mt-3" style={{margin:'auto'}}>
//                             <h3>Name : Ravi</h3>
//                             <h5 style={{margin:'auto'}}>Contact No : +91 41212123 </h5>
//                         </div>
//                         </Segment>


// </div>





//         </React.Fragment>    
//             );
// }
// export default Myaccount;

import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";


class Myaccount extends React.Component{
    constructor(props){
    super(props)
    this.state={

    }
}

    componentDidMount(){

    }

    render(){
        return(
            <>
                <MDBContainer>
                    <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                      
                        <MDBCardBody style={{padding:'10px'}}>
                            <MDBCardTitle > <h2>Account information</h2></MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional
                                content.
                             </MDBCardText>
                            <MDBBtn color="deep-orange">go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>

            </>
        );
    }

}
export default Myaccount;
