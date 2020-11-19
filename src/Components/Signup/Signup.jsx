import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link,Redirect } from 'react-router-dom';
import './Signup.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
class Signup extends React.Component{
constructor(props)
{
  super(props)
  this.state={
    name: '',
    email: '',
    password: '',
    c_Password: '',
  }
}

  handleName(text) {
    this.setState({ name: text.target.value });
  }

  handleEmail(text) {
    this.setState({ email: text.target.value });
   
  }

  handlePassword(text) {
    this.setState({ password: text.target.value });
  }

  handleConfirmPassword(text) {
    this.setState({ confirmPassword: text.target.value });

  }



  handleSubmit = event => 
     {
    
  //   var FormData = require('form-data');
  //   var data1 = new FormData();
  //   data1.append('name', this.state.name);
  //   data1.append('email', this.state.email);
  //   data1.append('password', this.state.password);
  //   data1.append('c_Password', this.state.c_Password);
    
  //   axios.post(`https://shopsmartcart.reflomsolutions.com/public/api/register`, { data1 })
  //     .then(res => {
  //       // console.log(res);
  //       // console.log(res.data);
  //     })

  // }

   var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
    
    data.append('name', this.state.name);
     data.append('email', this.state.email);
     data.append('password', this.state.password);
     data.append('c_Password', this.state.c_Password);

var config = {
  method: 'post',
  url: 'https://shopsmartcart.reflomsolutions.com/public/api/login',
  headers: {
    "Content-Type": "application/json"
  },
  data: data
};

axios(config)
  .then(function (response) {
    var r = this; 
    console.log(response);
    alert("you have signuped")

  })

  .catch(function (error) {
    console.log(error);
  });



     }


render(){

  const responseFacebook = (response) => {
    console.log(response);

  }


  const responseGoogle = (response) => {
    console.log(response);

  }
  return(
    <>
      <h4 className='text-center' style={{ color: '#424242', font: 'Work Sans' }}> <h2>Shop Smart Cart</h2></h4>
      <p className="font-weight-light text-center" style={{ fontSize: '19px' }}>Create an account to start shopping</p>
      <div className='card-body'>
        <form onSubmit={this.handleSubmit()}>

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="name"
            label="Name"
            type="text"

            onChange={(text) => { this.handleName(text) }}
          />


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="E-mail"
            type="text"
            id="password"
            autoComplete="current-password"
            onChange={(text) => { this.handleEmail(text) }}
          />


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"

            autoComplete="current-password"
            placeholder="(min 6 characters)"
            onChange={(text) => { this.handlePassword(text) }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="c_password"
            label="Confirm Password"
            type="password"

            autoComplete="current-password"
            placeholder="*Confirm Password "
            onChange={(text) => { handleConfirmPassword(text) }}
          />




          <Button style={{ Color: '#ffffff', backgroundColor: '#2ed573' }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className=" mt-3 btn-signin text-lowercase text-capitalize p-2 "

          >
            <p style={{ fontSize: '17px' }}>  Sign up</p>
          </Button>
        </form>




        <center>
          <FacebookLogin
            className="facebook"
            appId="2421201141518623"
            callback={responseFacebook}
            cookiePolicy={'single_host_origin'}

          />

        </center>


        <center>

          <GoogleLogin
            className="google-btn"
            clientId='845602509852-pook2otv32c3pjj6c2l6dajp9np9qsl3.apps.googleusercontent.com'
            buttonText="Continue With Google"
            size='small'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}


          />
        </center>


        <p className="text-center mt-4" style={{ fontSize: '19px' }}> Already have an account ? <Link to='Signin'>Sign in</Link></p>
      </div>
      

    </>
  );
}
}
export default Signup;