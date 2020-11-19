import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link, Redirect } from 'react-router-dom';
import './Signup.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';




class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            c_Password: '',

        }
    }



    
    render() {

    

        return (
            <>
             <h4 className='text-center' style={{ color: '#424242', font: 'Work Sans' }}> <h2>Shop Smart Cart</h2></h4>
      <p className="font-weight-light text-center" style={{ fontSize: '19px' }}>Create an account to start shopping</p>
               

                  
            </>
        );
    }
}
export default Signup;

