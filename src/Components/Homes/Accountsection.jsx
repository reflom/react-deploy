// import React from 'react';
// import Sidebar from '../Sidebar/Sidebar';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

// const Accountsection=()=>{

// return(
//     <React.Fragment>
//         <Header/>
//         <hr/>
//         <Sidebar/>
//         <hr/>
//         <Footer/>
//     </React.Fragment>
// );

// }
// export default Accountsection;

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
const Accountsection=()=>{
return(
    <React.Fragment>
        <Header/>
        <Sidebar/>
        <Footer/>
    </React.Fragment>
);
}
export default Accountsection;