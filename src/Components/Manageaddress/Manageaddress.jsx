import React from 'react';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Ordersummary from '../Ordersummary/Ordersummary';
import Deliveryslot from '../Deliveryslot/Deliveryslot';
const Mangeaddress=()=>{

    return(
        <React.Fragment>
           <div className="container-fluid mt-4" >
                
                <div className="row p-4">
                    
                        <div className="col-sm-4 pt-3 text-center" >
                        <div class="ui radio checkbox " >
                                            <input type="radio" name="example2" checked="checked"/>
                                                <label>
                                                    <h3  className="text-left">Rink Kanik</h3>
                                                <strong className="text-left">   <p> +91 2131231982 <br/> Flat No. 401 Block B Rohn Residency <br/> INDORE     , MADHYA PRADESH <br/> 452001<br/>INDIA </p></strong> 
                                                </label>

                                                <div className="mt-3" style={{margin:'auto'}}>
                                                    <button class="ui green  button" style={{width:'100%'}}>Deliver to this address</button>
                                
                                                </div>

                                                

                                                <div className="mt-3 d-flex p-3">
                                                    <button class="large ui  orange button" style={{width:'50%'}}>Edit </button>
                                                    <button class="large ui  red button" style={{width:'50%'}}>Delete</button>
                                                </div>
                                </div>

                        </div>
                        
                        <div className="col-sm-4 pt-3 text-center">
                        <div class="ui radio checkbox">
                                            <input type="radio" name="example2" checked="checked"/>
                                                <label>
                                                    <h3 className="text-left">Rink Kanik</h3>
                                                   
                                                <strong className="text-left">   <p> +91 2131231982 <br/>Flat No. 401 Block B Rohn Residency <br/> INDORE     , MADHYA PRADESH <br/> 452001<br/>INDIA </p></strong> 
                                                </label>

                                                <div className="mt-3" style={{margin:'auto'}}>
                                                    <button class="ui  green button" style={{width:'100%'}}>Deliver to this address</button>
                                                </div>

                                                

                                                <div className="mt-3 d-flex p-3">
                                                    <button class="large ui  orange button" style={{width:'50%'}}>Edit </button>
                                                    <button class="large ui  red button" style={{width:'50%'}}>Delete</button>
                                                </div>
                                </div>

                        </div>

                        <div className="col-sm-4 pt-3 text-center">
                                <div class="ui radio checkbox">
                                            <input type="radio" name="example2" checked="checked"/>
                                                <label>
                                                    <h3 className="text-left">Rink Kanik</h3>
                                                <strong className="text-left">   <p> +91 2131231982 <br/>Flat No. 401 Block B Rohn Residency <br/> INDORE     , MADHYA PRADESH <br/> 452001<br/>INDIA </p></strong> 
                                                </label>

                                                <div className="mt-3" style={{margin:'auto'}}>
                                                    <button class="ui  green button" style={{width:'100%'}}>Deliver to this address</button>
                                                </div>

                                                

                                                <div className="mt-3 d-flex p-3">
                                                    <button class=" large ui orange button" >Edit </button>
                                                    <button class=" large ui  red button" >Delete</button>
                                                </div>
                                </div>

                                </div>
                    </div>
           </div>

<hr/>

<div className="row">
        <div className="col-lg-6">
                    <h3 className="text-center">Add delivery address</h3>
                <div className="text-center">
                
                <TextField id="outlined-basic" label="Address line 1" variant="outlined" placeholder="Address line 1" className="mt-3" style={{width:"70%"}} />
          
                        <TextField id="outlined-basic" label="Address line 2 " variant="outlined" placeholder="Address line 2 (optional)" className="mt-3" style={{ width: "70%" }} />
                
                        <TextField id="outlined-basic" label="Business name" variant="outlined" placeholder="Business name (optional)" className="mt-3" style={{ width: "70%" }} />
                <br/>
                        <TextField id="outlined-basic" label="Postal code" variant="outlined" placeholder="postal code" className="mt-3 " style={{ width: "70%"}} />
                        <br />

                        <TextField
                            id="outlined-multiline-static"
                              multiline
                            className="mt-3"
                            rows={2}
                            style={{ width: "70%" }}
                             placeholder="Instructions for delivery (optional)"
                            variant="outlined"
                        />


                       
                </div>

                <div className="mt-3 text-center ">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"

                        startIcon={<SaveIcon />}
                    >
                        Save
                        </Button>
                </div>
        </div>   

        <div className="col-lg-6">

            <Ordersummary/>

        </div>  


                       
</div>



            



        </React.Fragment>
    );
}
export default Mangeaddress;