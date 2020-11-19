import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Frequently from '../FrequentlyBroughtProducts/Frequently';
import Topselling from '../Topselling/Topselling';
import Productdetailpage from '../Productdetailpage/Productdetailpage';


const Productdetail=()=>{
    return(
        <>
            <Header/>
            <hr/>
            <Productdetailpage/>
            <hr/>
            <Frequently/>
            <hr/>
            <Topselling/>
            <hr/>
            <Footer/>
            
        </>
    );
}
export default Productdetail;