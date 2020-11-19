import React from 'react';
import Outerheader from '../Header/Outerheader';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';
import Footer from '../Footer/Footer';
import Categoriesslider from '../Categoriesslider/Categoriesslider';
import Howitworks from '../Howitworks/Howitworks';
import Storeslider from '../Storeslider/Storeslider';
import Becomeshopper from '../Becomeshopper/Becomeshopper';
import LocationBanner from '../LocationBanner/LocationBanner';


const Root=()=>{

    return(
        <>
     
       <Outerheader/>
        
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
export default Root;