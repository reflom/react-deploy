// // import React from 'react';
// // import TextField from '@material-ui/core/TextField';
// // import Button from '@material-ui/core/Button'
// // import { Link,Redirect } from 'react-router-dom';
// // import './Signup.css';
// // import GoogleLogin from 'react-google-login';
// // import FacebookLogin from 'react-facebook-login';
// // import axios from 'axios';
// // class Signup extends React.Component{
// // constructor(props)
// // {
// //   super(props)
// //   this.state={
// //     name: '',
// //     email: '',
// //     password: '',
// //     c_Password: '',
// //   }
// // }

// //   handleName(text) {
// //     this.setState({ name: text.target.value });
// //   }

// //   handleEmail(text) {
// //     this.setState({ email: text.target.value });
   
// //   }

// //   handlePassword(text) {
// //     this.setState({ password: text.target.value });
// //   }

// //   handleConfirmPassword(text) {
// //     this.setState({ confirmPassword: text.target.value });

// //   }



// //   handleSubmit = event => 
// //      {
    

// //    var axios = require('axios');
// // var FormData = require('form-data');
// // var data = new FormData();
    
// //     data.append('name', this.state.name);
// //      data.append('email', this.state.email);
// //      data.append('password', this.state.password);
// //      data.append('c_Password', this.state.c_Password);

// // var config = {
// //   method: 'post',
// //   url: 'https://shopsmartcart.reflomsolutions.com/public/api/login',
// //   headers: {
// //     "Content-Type": "application/json"
// //   },
// //   data: data
// // };

// // axios(config)
// //   .then(function (response) {
// //     var r = this; 
// //     console.log(response);
// //     alert("you have signuped")

// //   })

// //   .catch(function (error) {
// //     console.log(error);
// //   });



// //      }


// // render(){

// //   const responseFacebook = (response) => {
// //     console.log(response);

// //   }


// //   const responseGoogle = (response) => {
// //     console.log(response);

// //   }
// //   return(
// //     <>
// //       <h4 className='text-center' style={{ color: '#424242', font: 'Work Sans' }}> <h2>Shop Smart Cart</h2></h4>
// //       <p className="font-weight-light text-center" style={{ fontSize: '19px' }}>Create an account to start shopping</p>
// //       <div className='card-body'>
// //         <form onSubmit={this.handleSubmit()}>

// //           <TextField
// //             variant="outlined"
// //             margin="normal"
// //             fullWidth
// //             required
// //             name="name"
// //             label="Name"
// //             type="text"

// //             onChange={(text) => { this.handleName(text) }}
// //           />


// //           <TextField
// //             variant="outlined"
// //             margin="normal"
// //             required
// //             fullWidth
// //             name="email"
// //             label="E-mail"
// //             type="text"
// //             id="password"
// //             autoComplete="current-password"
// //             onChange={(text) => { this.handleEmail(text) }}
// //           />


// //           <TextField
// //             variant="outlined"
// //             margin="normal"
// //             required
// //             fullWidth
// //             name="password"
// //             label="Password"
// //             type="password"

// //             autoComplete="current-password"
// //             placeholder="(min 6 characters)"
// //             onChange={(text) => { this.handlePassword(text) }}
// //           />

// //           <TextField
// //             variant="outlined"
// //             margin="normal"
// //             required
// //             fullWidth
// //             name="c_password"
// //             label="Confirm Password"
// //             type="password"

// //             autoComplete="current-password"
// //             placeholder="*Confirm Password "
// //             onChange={(text) => { handleConfirmPassword(text) }}
// //           />




// //           <Button style={{ Color: '#ffffff', backgroundColor: '#2ed573' }}
// //             type="submit"
// //             fullWidth
// //             variant="contained"
// //             color="primary"
// //             className=" mt-3 btn-signin text-lowercase text-capitalize p-2 "

// //           >
// //             <p style={{ fontSize: '17px' }}>  Sign up</p>
// //           </Button>
// //         </form>




// //         <center>
// //           <FacebookLogin
// //             className="facebook"
// //             appId="2421201141518623"
// //             callback={responseFacebook}
// //             cookiePolicy={'single_host_origin'}

// //           />

// //         </center>


// //         <center>

// //           <GoogleLogin
// //             className="google-btn"
// //             clientId='845602509852-pook2otv32c3pjj6c2l6dajp9np9qsl3.apps.googleusercontent.com'
// //             buttonText="Continue With Google"
// //             size='small'
// //             onSuccess={responseGoogle}
// //             onFailure={responseGoogle}
// //             cookiePolicy={'single_host_origin'}


// //           />
// //         </center>


// //         <p className="text-center mt-4" style={{ fontSize: '19px' }}> Already have an account ? <Link to='Signin'>Sign in</Link></p>
// //       </div>
      

// //     </>
// //   );
// // }
// // }
// // export default Signup;


// import React, { useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button'
// import { Link,useHistory } from 'react-router-dom';
// import './Signup.css';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
// import axios from 'axios';
// import Alert from 'react-bootstrap/Alert';
// import {connect} from 'react-redux';

// const Signup=()=>{

//   const history = useHistory();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password,setPassword] =useState('');
//   const [c_password,setc_password] =useState('');
//   const [googleData, setgoogleData] = useState([]);
//   const [facebookData , setFacebookData]=useState([]);



// function handleSubmit(e){

//   if(password != c_password){

//     e.preventDefault();
//     alert("Password does not match");

//  }else{
//     e.preventDefault();
//     var axios = require('axios');
//     var FormData = require('form-data');
//     var data = new FormData();
        
//         data.append('name',name );
//          data.append('email',email);
//          data.append('password',password );
//          data.append('c_password',c_password );
    
//     var config = {
//       method: 'post',
//       url: 'https://shopsmartcart.reflomsolutions.com/public/api/register',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       data: data
//     };
    
//     axios(config)
//       .then(function (response) {
       
//         console.log(response);

//         alert("registeration successfully");
//         history.push('/home');
        
//       })
    
//       .catch(function (error) {
//         console.log(error);
//       });
     
//   }


// }


// function RegisteredName(){
  
// return(name);
// }


// function facebookSignin(res) 
// {
 
      
//   const responseFacebook = {
//         name: res.name,
//         email: res.email,
//         provider: res.graphDomain,
//         provider_id :res.userID,
//         remember_token: res.accessToken
  
//        }
  
//      axios.post('https://shopsmartcart.reflomsolutions.com/public/api/register', responseFacebook)
//          .then((result) => {
//            let responseJson = result;
//            console.log(result.data.name);
//            alert("Signup Success !");
//            history.replace('/home');
//            sessionStorage.setItem("userData", JSON.stringify(result));
  
  
//          }).then(function (response) {
  
        
//          setFacebookData({ facebookData: response });
//          console.log(facebookData);
         
         
  
//          })
  
// }

// function googleSignin(res) {
//        const googleresponse = {
//         name: res.profileObj.name,
//         email: res.profileObj.email,
//         provider:'google',
//         provider_id :res.googleId
  
//        };
  
//        axios.post('https://shopsmartcart.reflomsolutions.com/public/api/register', googleresponse).then((result) => {
  
//          let responseJson = result;
  
  
//          sessionStorage.setItem("userData", JSON.stringify(result));
  
//        }).then(function (response) {

//          setgoogleData({ googleData: response });
//          console.log(googleData)
//          history.replace('/home');
        
// })
//      }





// const responseFacebook = (response) => {

//   console.log(response);
//   var res = response.profileObj;
//   console.log(res);
//  facebookSignin(response)
 
// }


// const responseGoogle = (response) => {

//        console.log(response);
//         console.log(response);
//         var res = response.profileObj;
//         console.log(res)
//        googleSignin(response);
 
 
// }











//   return(
//     <>

// <h4 className='text-center' style={{ color: '#424242', font: 'Work Sans' }}> <h2>Shop Smart Cart</h2></h4>
//        <p className="font-weight-light text-center" style={{ fontSize: '19px' }}>Create an account to start shopping</p>
//        <div className='card-body'>
//          <form onSubmit={handleSubmit}>

//            <TextField

//             variant="outlined"
//             margin="normal"
//             fullWidth
//             required
//             name="name"
//             label="Name"
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//           />


//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="email"
//             label="E-mail"
//             type="text"
//             id="password"
//             autoComplete="current-password"
//             onChange={(e) => setEmail(e.target.value)}
//           />


//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"

//             autoComplete="current-password"
//             placeholder="(min 6 characters)"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="c_password"
//             label="Confirm Password"
//             type="password"

//             autoComplete="current-password"
//             placeholder="*Confirm Password "
//             onChange={(e) => setc_password(e.target.value)}
//           />




//           <Button style={{ Color: '#ffffff', backgroundColor: '#2ed573' }}
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className=" mt-3 btn-signin text-lowercase text-capitalize p-2 "
//           >
//             <p style={{ fontSize: '17px' }}>  Sign up</p>
//           </Button>

//         </form>




//         <center>
//           <FacebookLogin
//             className="facebook"
//             appId="2421201141518623"
//             callback={responseFacebook}
//             cookiePolicy={'single_host_origin'}

//           />

//         </center>


//         <center>

//           <GoogleLogin
//             className="google-btn"
//             clientId='845602509852-pook2otv32c3pjj6c2l6dajp9np9qsl3.apps.googleusercontent.com'
//             buttonText="Continue With Google"
//             size='small'
//             onSuccess={responseGoogle}
//             onFailure={responseGoogle}
//             cookiePolicy={'single_host_origin'}


//           />
//         </center>


//         <p className="text-center mt-4" style={{ fontSize: '19px' }}> Already have an account ? <Link to='Signin'>Sign in</Link></p>
//       </div>
    
  

//     </>
//   );



// }

// const mapDispatchProps =dispatch=>{

//   return{
    
//     // changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
   
//     // handleSubmit:()=>{dispatch({type:'sending name from signup',payload:state.name})}
    
//     registerName:()=>{dispatch({type:'Register_name',payload:name})}

//   }
// }

// export default connect(null,mapDispatchProps)(Signup);


import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link,useHistory } from 'react-router-dom';
import './Signup.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import * as EmailValidator from 'email-validator';

const Signup=()=>{

  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] =useState('');
  const [c_password,setc_password] =useState('');
  const [googleData, setgoogleData] = useState([]);
  const [facebookData , setFacebookData]=useState([]);



function handleSubmit(e){

  if(password != c_password){

    e.preventDefault();
    alert("Password does not match");

 }else if(!EmailValidator.validate(email)){
  e.preventDefault();
alert("invalid email")
 
}else{
    e.preventDefault();
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
        
        data.append('name',name );
         data.append('email',email);
         data.append('password',password );
         data.append('c_password',c_password );
    
    var config = {
      method: 'post',
      url: 'https://www.shopsmartcart.reflomsolutions.com/public/api/register',
      headers: {
        "Content-Type": "application/json",
        
      },
      data: data
    };
    
    axios(config)
    .then(function (response){

  
      if(response.data.Status =='Failed'){
           console.log(response);
            alert("INVALID EMAIL ID AND PASSWORD !!")
           
   
      }else{
       console.log(response);
       alert("login successful ");
       history.replace('/home');
      }
      
   
     })
   
     .catch(function (error) {
       console.log(error);
     });
     
  }


}


// function facebookSignin(res) 
// {
 
      
//   // const responseFacebook = {
//   //        name: res.name,
//   //        email: res.email,
//   //       provider: 'Facebook',
//   //       provider_id: res.facebookID,
//   //      }

//        var FormData = require('form-data');
//        var data = new FormData();
           
//             data.append('name',res.name);
//             data.append('email',res.email);
//             data.append('provider',res.facebookID );
//             data.append('provider_id',res.facebookID);
  
//      axios.post('https://www.shopsmartcart.reflomsolutions.com/public/api/register', data)
         
//      .then((result) => {
//            let responseJson = result;
//            console.log(result.data.name);
//            alert("data");
//           //  sessionStorage.setItem("userData", JSON.stringify(result));
  
  
//          }).then(function (response) {
  
        
//          setFacebookData({ facebookData: response });
//          console.log(facebookData);
//          history.replace('/home');
         
  
//          })
  
// }

function facebookSignin(res){
  
       

 

        var FormData = require('form-data');
          var data = new FormData();
       
            data.append('name',res.name);
            data.append('email',res.email);
            data.append('provider',res.graphDomain );
            data.append('provider_id',res.id);
          
            var config = {
              method: 'post',
              url:  `https://shopsmartcart.reflomsolutions.com/public/createuser/`+res.id+'/'+res.name+'/'+res.email+'/'+res.graphDomain,
              headers: {
                "Content-Type": "application/json",
                
              },
              data: data
            };

            axios(config)
            .then(function (response) {

  
              if(response.data.Status =='Failed'){
                   console.log(response);
                    alert("INVALID EMAIL ID AND PASSWORD !!")
                   
           
              }else{
               console.log(response);
               alert("login successful ");
               history.replace('/home');
              }
              
           
             })
           
             .catch(function (error) {
               console.log(error);
             });

             console.log(res.graphDomain);
             console.log(res.id);
            
           
        }












// function googleSignin(res) {
//        const googleresponse = {
//          Name: res.profileObj.name,
//          email: res.profileObj.email,
//          token: res.googleId,
//          ProviderId: 'Google'
  
//        };
  
//        axios.post('https://www.shopsmartcart.reflomsolutions.com/public/api/register', googleresponse).then((result) => {
  
//          let responseJson = result;
  
  
//          sessionStorage.setItem("userData", JSON.stringify(result));
  
//        }).then(function (response) {

//          setgoogleData({ googleData: response });
//          console.log(googleData)
//          history.replace('/home');
        
// })
//      }

function googleSignin(res) {
 
  var provider='google';
  var provider_id=res.googleId;    
  console.log(res);
  console.log(res.name);
  var FormData = require('form-data');
  var data = new FormData();
  data.append('name',res.name);
  data.append('email',res.email);
  data.append('provider',' google ');
  data.append('provider_id',res.googleId);

  var config = {
    method: 'post',
    url:  `https://shopsmartcart.reflomsolutions.com/public/api/createuser/`+res.googleId+'/'+res.name+'/'+res.email+'/'+ provider,
    headers: {
      "Content-Type": "application/json",
      
    },
    data: data
  };

  axios(config)
  .then(function (response) {


    if(response.data.Status =='Failed'){
         console.log(response);
          alert("TRY AGAIN !")
         
 
    }else{
     console.log(response);
     alert("login successful ");
     history.replace('/home');
    }
    
 
   })
 
   .catch(function (error) {
     console.log(error);
   });


}





const responseFacebook = (response) => {

  var res = response.profileObj;
  console.log(res);
  facebookSignin(res);
 
}


const responseGoogle = (response) => {

        console.log(response);
        var res = response.profileObj;
       googleSignin(res);
 
 
}











  return(
    <>

<h4 className='text-center' style={{ color: '#424242', font: 'Work Sans' }}> <h2>Shop Smart Cart</h2></h4>
       <p className="font-weight-light text-center" style={{ fontSize: '19px' }}>Create an account to start shopping</p>
       <div className='card-body'>
         <form onSubmit={handleSubmit}>

           <TextField

            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="name"
            label="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setc_password(e.target.value)}
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


        {/* <p className="text-center mt-4" style={{ fontSize: '19px' }}> Already have an account ? <Link to='Signin'>Sign in</Link></p> */}
      </div>
    
  

    </>
  );



}
export default Signup;
