import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Topselling from '../Topselling/Topselling';
import Storeinfoheader2 from '../Storeinfoheader/Storeinfoheader2';
import Viewproducts from '../Allproducts/Viewproducts';
import Frequent from '../FrequentlyBroughtProducts/Frequent';

const Productlistpage=()=>{


    

        return(
            <>
            
                <Header/>
                <Storeinfoheader2/>
                
                <hr/>
                <Viewproducts/>
                <hr/>
                <Frequent/>
                <hr/>
                <Topselling/>
                <hr/>
                <Footer/>
           
            </>
        );
}
export default Productlistpage;