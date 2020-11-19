import React from 'react';
import Header from '../Header/Header';
import Manageaddress from '../Manageaddress/Manageaddress';
import Addaddress from '../Addaddress/Addaddress';
import Mangeaddress from '../Manageaddress/Manageaddress';
import Footer from '../Footer/Footer';
const Addresspage=()=>{

    return(
        <React.Fragment>
                <Header/>
                <Mangeaddress/>
                <hr/>
                <Addaddress/>
                <hr/>
                <Footer/>
        </React.Fragment>
    );
}
export default Addresspage;