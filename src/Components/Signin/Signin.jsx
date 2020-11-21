// import React,{useSate} from 'react';
// import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
// import FacebookIcon from '@material-ui/icons/Facebook';
// import { Link } from 'react-router-dom';
// import './Signin.css';





// const Signin=(props)=>{

// return (<>

// <Container component="main" maxWidth="xs">

// <div className='card' style={{marginTop:'40px' , borderRadius:'20px' , backgroundColor:'#ffffff'}}>
//     <div className='card-header' style={{backgroundColor:'#F5F5F5',borderRadius:'20px'}} >
//         <h4 className='text-center' style={{color:'#424242' , font:'#424242'}}> Shop Smart Cart</h4>
//             <p className="font-weight-light text-center">Login with your email and password </p>
//        <div className='card-body'>
//       <form>
//         <TextField 
//            variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="Email"
//             label="E-mail"
//             type="text"
//             id="password"
//             autoComplete="current-password"
//           />
//           </form>  

//         <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             placeholder="(min 6 characters)"
//           />




//         <Button style={{    Color:'#ffffff', backgroundColor:'#2ed573'}}
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className="mt-3 mt-2 btn-signin text-lowercase text-capitalize p-2"

//         >
//             Sign In
//         </Button>


//           <Button style={{marginTop:'20px' , color:'#ffffff',  backgroundColor:'#273c75' }}
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className="text-lowercase text-capitalize p-2"

//         >
//         <FacebookIcon   />
//             Sign in with Facebook
//         </Button>

//         <Button style={{marginTop:'20px' , color:'#ffffff',  backgroundColor:'#4b7bec' }}
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className="mb-3  text-lowercase text-capitalize p-2"

//         >

//         <i class="google icon" medium style={{marginBottom:"11px"}}></i>
//             Sign in with Google
//         </Button>



//           <p className="text-center">Forget Password  <Link to='Signup'>Forget password ?</Link></p>
//          <p className="text-center"> Don't Have Account ? <Link to='Signup'>Sign Up</Link></p>
//        </div>
//     </div>

// </div>

// </Container>

// </>)


// }
// export default Signin;

// // import React from 'react';
// // import TextField from '@material-ui/core/TextField';
// // import Container from '@material-ui/core/Container';
// // import Button from '@material-ui/core/Button'
// // import FacebookIcon from '@material-ui/icons/Facebook';
// // import { Link } from 'react-router-dom';
// // import './Signin.css';

// // class Signin extends React.Component{

// //   constructor(props){
// //     super(props);
// //     this.state={

// //     }
// //   }

// //   render()
// //   {
// //     return(
// //       <div>

// //       </div>
// //     )
// //   }
// // }

// // export default Signin;

// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button'
// import FacebookIcon from '@material-ui/icons/Facebook';
// import { Link, Route } from 'react-router-dom';
// import axios from 'axios';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
// import { Redirect } from "react-router-dom";
// import Homepage from '../Homes/Home';
// import Alert from '@material-ui/lab/Alert';
// import history from '../../history';
// import './Signin.css';
// import { render } from '@testing-library/react';


// class Signin extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       redirect: null,
//       googleData: []
//     }
//   }




//   //  handleClick(event){
//   //   var apiBaseUrl = "https://shopsmartcart.reflomsolutions.com/public/api_store_city";
//   //   var self = this;
//   //   var payload={
//   //   "email":this.state.username,
//   //   "password":this.state.password
//   //   }

//   //   axios.post(apiBaseUrl,payload)
//   //   .then(function (response) {
//   //   console.log(response);

//   //   if(response.data.code == 200){
//   //   console.log("Login successfull");

//   //   }

//   //   else if(response.data.code == 204){
//   //   console.log("Username password do not match");
//   //   alert("username password do not match")
//   //   }
//   //   else{
//   //   console.log("Username does not exists");
//   //   alert("Username does not exist");
//   //   }
//   //   })

//   //   .catch(function (error) {
//   //   console.log(error);
//   //   });
//   //   }

//   handleEmail(text) {
//     this.setState({ email: text.target.value })
//   }

//   handlePassword(text) {
//     this.setState({ password: text.target.value })
//   }

//   redirect() {

//   }



//   login() {


//     //   // fetch('http://shopsmartcart.reflomsolutions.com/public/api/login',
//     //   fetch('http://shopsmartcart.reflomsolutions.com/public/api/login',
//     //   {
//     //     method: 'POST',
//     //     mode: 'cors',
//     //     header:{
//     //       "Content-Type":"application/json"
//     //     },
//     //      body:JSON.stringify({obj})
//     //   }
//     //   ).then(function (response) {

//     //     console.log(obj);
//     //     console.log(response);
//     //     return <Redirect to="/home" />


//     // });

//     // let obj = {}
//     // obj.email = this.state.email;
//     // obj.password = this.state.password;

//     // var axios = require('axios');
//     // var FormData = require('form-data');
//     // var data = new FormData();
//     // data.append('email', 'dummy@gmail.com');
//     // data.append('password', '12345678');

//     // var config = {
//     //   method: 'post',
//     //   url: 'http://shopsmartcart.reflomsolutions.com/public/api/login',
//     //   headers: {
//     //     "Content-Type": "application/json"
//     //   },
//     //   data: data
//     // };

//     // axios(config)
//     //   .then(function (response) {
//     //     console.log(JSON.stringify(response.data));
//     //   })
//     //   .catch(function (error) {
//     //     console.log(error);
//     //   });


//     // const request = require('postman-request');

//     //  request.post({ url : 'https://shopsmartcart.reflomsolutions.com/public/api/login', form: { email:this.state.email, password:this.state.password} }

//     // , function(error, response, body) 
//     // {
//     //   console.log('error:', error); // Print the error if one occurred
//     //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //   console.log('body:', body); // Print the HTML for the Google homepage.

//     //   if (response && response.statusCode === 200) {

//     //        console.log("SUCCESSS")
//     //         // this.setState({ redirect: '/home' })

//     //      } else if (response.status === 408) {
//     //        console.log("SOMETHING WENT WRONG")
//     //        this.setState({ requestFailed: true })
//     //      }

//     // })


//     var axios = require('axios');
//     var FormData = require('form-data');
//     var data = new FormData();
//     data.append('email', this.state.email);
//     data.append('password', this.state.password);

//     var config = {
//       method: 'post',
//       url: 'https://shopsmartcart.reflomsolutions.com/public/api/login',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       data: data
//     };

//     axios(config)
//       .then(function (response) {

//         // console.log(JSON.stringify(response.data));
//         console.log(response);
//         // alert("you clicked login");

//         history.push('/home');
//         location.reload();
       

//       })

//       .catch(function (error) {
//         console.log(error);
//       });






//   }




//   googleSignin(res) {
//     const googleresponse = {
//       Name: res.profileObj.name,
//       email: res.profileObj.email,
//       token: res.googleId,
//       ProviderId: 'Google'

//     };

//     axios.post('https://shopsmartcart.reflomsolutions.com/public/api/login', googleresponse).then((result) => {

//       let responseJson = result;


//       sessionStorage.setItem("userData", JSON.stringify(result));

//       // // this.props.history.push('/Dashboard')




//     }).then(function (response) {
//       this.setState({ googleData: response })
//       // console.log(response);




//     })
//   }

//   facebookSignin(res) {
//     const responseFacebook = {
//       name: res.name,
//       email: res.email,
//       // token: res.accessToken,
//       ProviderId: 'Facebook'

//     }

//     axios.post('https://shopsmartcart.reflomsolutions.com/public/api/login', responseFacebook)
//       .then((result) => {
//         let responseJson = result;
//         console.log(result.data.name);
//         alert("data");
//         sessionStorage.setItem("userData", JSON.stringify(result));


//       }).then(function (response) {

//         console.log(JSON.stringify(response.data));

//         // if (response.status === 200) {
//         //   console.log("SUCCESSS")
//         //   alert('login successful');
//         //   window.location.replace("https://ssc.reflomsolutions.com/home");
//         //   // this.props.history.push("/home")

//         // } else if (response.status === 408) {

//         //   console.log("SOMETHING WENT WRONG")

//         // }


//       })

//   }







//   render() {
//     // if (this.state.redirect) {
//     //   return <Redirect to={this.state.redirect} />

//     //   }
//     console.log(this.state.googleData);
//     console.log(this.state.googleData);
//     console.log(this.state.googleData);
//     console.log(this.state.googleData);



//     const responseGoogle = (response) => {

//       console.log(response);
//       console.log(response);
//       var res = response.profileObj;
//       console.log(res);

//       this.googleSignin(response);


//     }



//     const responseFacebook = (response) => {

//       console.log(response);
//       var res = response.profileObj;
//       console.log(res);
//       this.signup(response);
//       window.location.replace("https://ssc.reflomsolutions.com/home");
//     }

//     return (
//       <>




//         <h4 className='text-center' style={{ color: '#424242', font: '#424242' }}><h2> Shop Smart Cart</h2></h4>
//         <p className="font-weight-light text-center" style={{ fontSize: '19px' }}>Login with your email and password </p>
//         <div className='card-body'>
//           <form>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="email"
//               label="E-mail"
//               type="text"
//               id="email"
//               autoComplete="current-password"
//               // onChange = {(event,newValue) => this.setState({username:newValue})}
//               onChange={(text) => { this.handleEmail(text) }}
//             />
//           </form>

//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             placeholder="(min 6 characters)"
//             // onChange = {(event,newValue) => this.setState({password:newValue})}
//             onChange={(text) => { this.handlePassword(text) }}
//           />




//           <Button style={{ Color: '#ffffff', backgroundColor: '#2ed573', padding: '9px' }}
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className="mt-3 mt-2 btn-signin text-lowercase text-capitalize p-2"
//             // onClick={(event) => this.handleClick(event)}
//             onClick={() => { this.login() }}

//           >
//             <p style={{ fontSize: '17px' }}>  Sign In</p>
//           </Button>


//           <center>
//             <FacebookLogin
//               className="facebook"
//               appId="3289839974459022"
//               autoLoad={false}
//               fields="name,email"
//               // onClick={this.ComponentClicked}
//               callback={this.responseFacebook}


//             />

//           </center>








//           <center>

//             <GoogleLogin
//               className="google-btn"
//               clientId='123114853806-fhk1pf929tkmo9oamihtit5r88jpvl5a.apps.googleusercontent.com'
//               buttonText="Sign in With Google"
//               size='small'
//               onSuccess={responseGoogle}
//               onFailure={responseGoogle}

//             >
//             </GoogleLogin>
//           </center>


//           <p className="text-center mt-4" style={{ fontSize: '19px' }}>Forget Password  <Link to='Signup'>Forget password ?</Link></p>
//           <p className="text-center" style={{ fontSize: '19px' }}> Don't Have Account ? <Link to='/signup'>Sign Up</Link></p>
//         </div>

//         {/* <button onClick={this.setState({redirect : '/home'})}>Hello </button> */}

//       </>
//     );
//   }
// }
// export default Signin;

import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link, Route,useHistory } from 'react-router-dom';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './Signin.css';



const Signin=()=>{

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [googleData, setgoogleData] = useState([]);
  const [facebookData , setFacebookData]=useState([]);



function handleSubmit(e){
  
      e.preventDefault()
      var axios = require('axios');
     var FormData = require('form-data');
     var data = new FormData();
     data.append('email', email);
     data.append('password', password);

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

         // console.log(JSON.stringify(response.data));
        if(response.status =='200'){
              console.log(response);
              
              alert("login successful ");
              history.push('/home');
             

        }else if(response.status =='400'){
              alert("Please Register !!")
        }
        

       })

       .catch(function (error) {
         console.log(error);
       });
}



function facebookSignin(res) 
{
      
  const responseFacebook = {
         name: res.name,
         email: res.email,
         token: res.facebookID,
         ProviderId: 'Facebook'
  
       }
  
     axios.post('https://shopsmartcart.reflomsolutions.com/public/api/login', responseFacebook)
         .then((result) => {
           let responseJson = result;
           console.log(result.data.name);
           alert("data");
           sessionStorage.setItem("userData", JSON.stringify(result));
  
  
         }).then(function (response) {
  
        
         setFacebookData({ facebookData: response });
         console.log(facebookData);
         history.replace('/home');
         
  
         })
  
}

function googleSignin(res) {
       const googleresponse = {
         Name: res.profileObj.name,
         email: res.profileObj.email,
         token: res.googleId,
         ProviderId: 'Google'
  
       };
  
       axios.post('https://shopsmartcart.reflomsolutions.com/public/api/login', googleresponse).then((result) => {
  
         let responseJson = result;
  
  
         sessionStorage.setItem("userData", JSON.stringify(result));
  
       }).then(function (response) {

         setgoogleData({ googleData: response });
         console.log(googleData)
         history.replace('/home');
        
  
  
       })
     }
   




const responseFacebook = (response) => {

         console.log(response);
         var res = response.profileObj;
         console.log(res);
        facebookSignin(response)
        
       }


const responseGoogle = (response) => {

              console.log(response);
               console.log(response);
               var res = response.profileObj;
               console.log(res)
              googleSignin(response);
        
        
  }









  return(
    <>
    
     <h4 className='text-center' style={{ color: '#424242', font: '#424242' }}><h2> Shop Smart Cart</h2></h4>
         <p className="font-weight-light text-center" style={{ fontSize: '19px' }}>Login with your email and password </p>
         <div className='card-body'>
           <form onSubmit={handleSubmit}>
             <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="email"
               label="E-mail"
               type="text"
               id="email"
               autoComplete="current-password"
               // onChange = {(event,newValue) => this.setState({username:newValue})}
              //  onChange={(text) => { this.handleEmail(text) }}
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
             id="password"
             autoComplete="current-password"
            placeholder="(min 6 characters)"
            // onChange = {(event,newValue) => this.setState({password:newValue})}
            //  onChange={(text) => { this.handlePassword(text) }}
             onChange={(e) => setPassword(e.target.value)}
           />

           




           <Button style={{ Color: '#ffffff', backgroundColor: '#2ed573', padding: '9px' }}
             type="submit"
             fullWidth
             variant="contained"
             color="primary"


             className="mt-3 mt-2 btn-signin text-lowercase text-capitalize p-2"
             // onClick={(event) => this.handleClick(event)}
             

           >
             <p style={{ fontSize: '17px' }}>  Sign In</p>
           </Button>
</form>

          <center>
             <FacebookLogin
               className="facebook"
               appId="3289839974459022"
               autoLoad={false}
               fields="name,email"
              callback={responseFacebook}

           />
           </center>

           <center>

             <GoogleLogin
               className="google-btn"
               clientId='123114853806-fhk1pf929tkmo9oamihtit5r88jpvl5a.apps.googleusercontent.com'
               buttonText="Sign in With Google"
               size='small'
               onSuccess={responseGoogle}
               onFailure={responseGoogle}

             >
             </GoogleLogin>

           </center>

          

           <p className="text-center mt-4" style={{ fontSize: '19px' }}>Forget Password  <Link to='Signup'>Forget password ?</Link></p>
           <p className="text-center" style={{ fontSize: '19px' }}> Don't Have Account ? <Link to='/signup'>Sign Up</Link></p>
         </div>

 



    </>
  );



}
export default Signin;