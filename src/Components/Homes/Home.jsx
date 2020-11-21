import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';

import Footer from '../Footer/Footer';
import Categoriesslider from '../Categoriesslider/Categoriesslider';
import Howitworks from '../Howitworks/Howitworks';

import Storeslider from '../Storeslider/Storeslider';
import Becomeshopper from '../Becomeshopper/Becomeshopper';
import LocationBanner from '../LocationBanner/LocationBanner';



const Home=()=>{

    return (
    <>
        <Header/>
        
      
      
        <LocationBanner/>
        <Howitworks/>
        <Categoriesslider/>
        <hr/>
        <Storeslider/>
        <hr/>
        <Becomeshopper/>
       <Footer/>
    </>
);
}
export default Home; 