import React from 'react'
import './LocationBanner.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Signin from '../Signin/Signin';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import Axios from 'axios';
import {connect} from 'react-redux';

// import { MDBAutocomplete}  from "mdbreact";





class LocationBanner extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      list: [],
      citys: [],
      cityName:[],
      cityData:[]
    }
    

    }


componentDidMount(){
  this.handleChange();

  
}





  handleChange(event) {
    
    const axios = require('axios');

    axios.get("https://shopsmartcart.reflomsolutions.com/public/api_city")
      .then(res => {
      
        this.setState({ citys: res.data })
        console.log(this.state.citys);
        console.log(this.state.cityData);
       
     
      })

     

 
  }
  

  handleSubmit(e){
    e.preventDedault();
   alert()
   

  }

  


render() {
  


 return ( 
      <>
       


        <div class="container-fluid mb-3">

       
          <section id="background-img">

            <div class="mask d-flex justify-content-center align-items-center">

              <div class="container py-5 my-5">


                <div class="row d-flex align-items-center justify-content-center">

                  <div class="col-md-6 col-xl-5" style={{ marginTop: '80px', marginBottom: '80px' }}>

                    <div class="card " style={{ borderRadius: '10px' }}>

                      <div class="card-body z-depth-2 px-5">
                        <h2 className=" m-3 " > Groceries to your Door Step</h2>


                        <form onSubmit={(e)=>this.handleSubmit(e)}>
                              

                      
            <Autocomplete
                            id="combo-box-demo"
                           
                            options={this.state.citys}

                            getOptionLabel={option => option.city_name}
                            
                            // value={option=>option.id}
                            
                            onFocus={(event)=>this.handleChange(event)}
                            onChange={(event, value) => {
                                    return(
                             this.setState({cityData : event.target.value})
                             
                                   
                           );
                           }}
                            
                    
                            renderInput={(params) =>
                              
                            
                             <TextField

                                {...params}
                                fullWidth
                                placeholder="Enter Your City"
                                variant="outlined"
                                // label={this.state.cityData}
                                // value={data.id}
                                
                               
                                 

                              />}
                          />
        
                      

                           
                          
                           <button className="btn peach-gradient btn-lg btn-block p-3 mt-4" type="submit"><h5>Continue</h5></button>

                          <p className="p-3" style={{ textAlign: 'center', fontSize: '20px' }}> Already have an Account ? <span  > <Link to='/dashboard' style={{ color: 'orange' }} >
                            Sign in
                            </Link></span></p>



                        </form>
                      </div>
                    </div>

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

// const mapDispatchProps =(dispatch)=>{

//   return{
//     changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
//   }
// }


// export default connect(null,mapDispatchProps)(LocationBanner);

export default LocationBanner;


