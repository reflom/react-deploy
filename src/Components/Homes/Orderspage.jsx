import React from 'react';
import Header from '../Header/Header';
import Myorders from '../Myorders/Myorders';
import Footer from '../Footer/Footer';

const Orderspage=()=>{

    return(
        <React.Fragment>
                <Header/>
                <Myorders/>
                <Footer/>
        </React.Fragment>
    );
}
export default Orderspage;