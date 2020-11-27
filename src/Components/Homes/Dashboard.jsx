import React ,{useState,useEffect}from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Howitworks2 from '../Howitworks/Howitworks2';
import Storeslider from '../Storeslider/Storeslider';
import Categories from '../Categories/Categories';
import Storeinformation from '../Storeinformation/Storeinfo';
import Storepartners from '../Storepartners/Storepartners';
import Storelist from '../Storelist/Storellist';

const Dashboard =()=>{

  

    return (
    <>
   
    
                <Header/>
                
                <Storeinformation/>
            
                <Categories/>
                <hr/>   
                <Howitworks2/>
                <hr/>

                <Storepartners/>
                <Footer/>
     
          
    </>
);
}
export default Dashboard; 

// import React ,{useState,useEffect}from 'react';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Howitworks2 from '../Howitworks/Howitworks2';
// import Storeslider from '../Storeslider/Storeslider';
// import Categories from '../Categories/Categories';
// import Storeinformation from '../Storeinformation/Storeinfo';
// import Storepartners from '../Storepartners/Storepartners';
// import Storelist from '../Storelist/Storellist';

// class Dashboard extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             storeData:[]
//         }
//     }


//     componentDidMount(){
//         const axios=require("axios");

//         axios.get("https://shopsmartcart.reflomsolutions.com/public/api_store").then(res =>{
      
//             this.setState({storeData : res.data});
//             console.log(storeData);
// })

//     }



//     render(){
//         return(
//             <>
//              <Header/>
//             <Storeinformation/>
//             <Categories/>
//             <hr/>   
//             <Howitworks2/>
//             <hr/>
//             <Storepartners/>
//             <Footer/>

//             </>
//         );
//     }
// }
// export default Dashboard; 







