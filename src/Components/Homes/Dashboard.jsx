import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Howitworks2 from '../Howitworks/Howitworks2';
import Storeslider from '../Storeslider/Storeslider';
import Categories from '../Categories/Categories';
import Storeinformation from '../Storeinformation/Storeinfo';
import Storepartners from '../Storepartners/Storepartners';
import Storelist from '../Storelist/Storellist';
const Dashboard=()=>{




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