import React from 'react';
import Outerheader from '../Header/Outerheader';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';
import Footer from '../Footer/Footer';
import CatSlider from '../Categoriesslider/Categoriesslider';
import Howitworks from '../Howitworks/Howitworks';
import Storeslider from '../Storeslider/Storeslider';
import Becomeshopper from '../Becomeshopper/Becomeshopper';

const Logoutpage=()=>{

    return(
        <React.Fragment>
            <Outerheader/>
            <Location/>
            <hr/>
            <Banner/>
            <hr/>
            <Howitworks/>
            <hr/>
            <CatSlider/>
            <hr/>
            <Storeslider/>
            <hr/>
            <Becomeshopper/>
            <hr/>
            <Footer/>
        </React.Fragment>
    );
}
export  default Logoutpage;