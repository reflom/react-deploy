import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Myshoppingcart from '../Myshoppingcart/Myshoppingcart';
import Frequently from '../FrequentlyBroughtProducts/Frequently';
import Relatedproducts from '../Relatedproducts/Relatedproducts';



const Shoppingcartpage=()=>{

    return(
        <React.Fragment>
            <Header/>
            
            <Myshoppingcart/>
            <hr/>
            <Frequently/>
            <hr/>
            <Relatedproducts/>
            <hr/>
            <Footer/>
        </React.Fragment>

    );
}
export default Shoppingcartpage;