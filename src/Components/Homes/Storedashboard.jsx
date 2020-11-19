import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Storeslider from '../Storeslider/Storeslider';
import Storecategories from '../Storecategories/Storecategories';
import Frequent from '../FrequentlyBroughtProducts/Frequent';
import Topselling from '../Topselling/Topselling';
import Storeinfoheader from '../Storeinfoheader/Storeinfoheader';


const Storedashboard=()=>{

    return (
    <>
    <div>
       <Header/>

        <Storeinfoheader/>
        <hr/>
        <Storecategories/>
      
        <hr/>
        <Frequent/>
        <hr/>
        <Topselling/>

        <Footer/>
    </div>
    </>
);
}
export default Storedashboard; 

// import React from 'react';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Storeslider from '../Storeslider/Storeslider';
// import Storecategories from '../Storecategories/Storecategories';
// import Frequently from '../FrequentlyBroughtProducts/Frequently';
// import Topselling from '../Topselling/Topselling';
// import Storeinfoheader from '../Storeinfoheader/Storeinfoheader';

// class Storedashboard extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={

//         }
//     }


//     render(){
//         return(
//             <>
//                 <Header />
//         <Storeinfoheader/>
//          <hr/>
//          <Storecategories/>
//         <hr/>
//          <Frequently/>
//          <hr/>
//          <Topselling/>
//          <Footer/>

//             </>
//         );
//     }
// }

// export default Storedashboard;