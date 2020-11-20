import React from 'react';
import Signin from './Components/Signin/Signin';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, BrowserRouter,Switch } from 'react-router-dom';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import Signup from './Components/Signup/Signup';
import Location from './Components/Location/Location';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Howitworks from './Components/Howitworks/Howitworks';
import Storeslider from './Components/Storeslider/Storeslider';
import Home from './Components/Homes/Home';
import Categoriesslider from './Components/Categoriesslider/Categoriesslider'
import Outerheader from './Components/Header/Outerheader';
import Frequently from './Components/FrequentlyBroughtProducts/Frequently';
import Storeinfo from './Components/Storeinformation/Storeinfo';
import Becomeshopper from './Components/Becomeshopper/Becomeshopper';
import Cards from './Components/Cards/Cards';
import Topselling from './Components/Topselling/Topselling';
import Categories from './Components/Categories/Categories';
import Storeinfobanner from './Components/Storeinfobanner/Storeinfobanner';
import Allproducts from './Components/Allproducts/Allproduct';
import Storebio from './Components/Storebio/Storebio';
import Referfriend from './Components/Referfriend/Referfriend';
import Manageaddress from './Components/Manageaddress/Manageaddress';
import Addaddress from './Components/Addaddress/Addaddress';
import Deliveryslot from './Components/Deliveryslot/Deliveryslot';
import Sidebar from './Components/Sidebar/Sidebar';
import Myaccount from './Components/Myaccount/Myaccount';
import Myorders from './Components/Myorders/Myorders';
import Productdetailpage from './Components/Productdetailpage/Productdetailpage';
import Myshoppingcart from './Components/Myshoppingcart/Myshoppingcart';
import Ordersummary from './Components/Ordersummary/Ordersummary';
import Giftcard from './Components/Giftcard/Giftcard';
import Preview from './Components/Previewemail/Previewemail';
import Dummyheader from './Components/Header/Dummyheader';
import Dashboard from './Components/Homes/Dashboard';
import Storedashboard from './Components/Homes/Storedashboard';
import Productdetail from './Components/Homes/Productdetail';
import Accountsection from './Components/Homes/Accountsection';
import Relatedproducts from './Components/Relatedproducts/Relatedproducts';
import Shoppingcartpage from './Components/Homes/Shoppingcartpage';
import Addresspage from './Components/Homes/Addresspage';
import Logoutpage from './Components/Homes/Logoutpage';
import Productlistpage from './Components/Homes/Prodcutlistpage';
import Orderspage from './Components/Homes/Orderspage';
import Referfriendpage from './Components/Homes/Referfriendpage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Viewproducts from './Components/Allproducts/Viewproducts';
import Signin1 from './Components/Signin/Signin1';
import Root from './Components/Homes/Root';
import { Redirect } from "react-router-dom";
import Checkoutpage from './Components/Homes/Checkoutpage';
import { Router, BrowserRouter } from 'react-router-dom';
import history from './history';

const App = () => {
    return (
        <>
        <BrowserRouter basename={window.location.pathname || ''} history={history}>
            <TransitionGroup>
                <CSSTransition
                    
                    classNames="fade"
                    timeout={300}
                >
            <Switch>

                {/* <Route exact path='/' render={App}/> */}
                <Route exact path='/' component={Root} />
                <Route exact path='/home' component={Home} />

                <Route exact path='/signin' render={Signin} />
                <Route exact path='/signup' render={Signup} />
                <Route exact path='/allproducts' render={Allproducts} />
                <Route exact path='/header' component={Header} />
                <Route exact path='/outerheader' render={Outerheader} />
                <Route exact path='/footer' render={Footer} />
                <Route exact path='/location' render={Location} />
                <Route exact path='/becomeshopper' render={Becomeshopper} />
                <Route exact path='/Banner' render={Banner} />
                <Route exact path='/cards' render={Cards} />
                <Route exact path='/storebio' render={Storebio} />
                <Route exact path='/frequently' render={Frequently} />
                <Route exact path='/categoriesslider' render={Categoriesslider} />
                <Route exact path='/storeslider' render={Storeslider} />
                <Route exact path='/howitworks' render={Howitworks} />
                <Route exact path='/storeinfo' render={Storeinfo} />
                <Route exact path='/categories' render={Categories} />
                <Route exact path='/topselling' render={Topselling} />
                <Route exact path='/storeinfobanner' render={Storeinfobanner} />
                <Route exact path='/referfriend' render={Referfriend} />
                <Route exact path='/addaddress' render={Addaddress} />
                <Route exact path='/deliveryslot' render={Deliveryslot} />
                <Route exact path='/manageaddress' render={Manageaddress} />
                <Route exact path='/sidebar' render={Sidebar} />
                <Route exact path='/myaccount' render={Myaccount} />
                <Route exact path='/myorders' render={Myorders} />
                <Route exact path='/myshoppingcart' render={Myshoppingcart} />
                <Route exact path='/productdetailpage' render={Productdetailpage} />
                <Route exact path='/ordersummary' render={Ordersummary} />
                <Route exact path='/giftcard' render={Giftcard} />
                <Route exact path='/previewemail' render={Preview} />
                <Route exact path='/dummyheader' render={Dummyheader} />
                <Route exact path='/dashboard' render={Dashboard} />
                <Route path='/storedashboard' component={Storedashboard} />

                <Route exact path='/productdetail' render={Productdetail} />
                <Route exact path='/relatedproducts' render={Relatedproducts} />
                <Route exact path='/shoppingcartpage' render={Shoppingcartpage} />
                <Route exact path='/addresspage' render={Addresspage} />
                <Route exact path='/logoutpage' render={Logoutpage} />
                <Route exact path='/accountsection' render={Accountsection} />
                <Route exact path='/productlistpage' render={Productlistpage} />
                <Route exact path='/orderspage' render={Orderspage} />
                <Route exact path='/referfriendpage' render={Referfriendpage} />
                <Route exact path='/signin1' render={Signin1} />
                <Route exact path='/Checkoutpage' render={Checkoutpage} />

                <Route exact path='/viewproducts' render={Viewproducts} />
            
            </Switch>
</CSSTransition>
        </TransitionGroup>
</BrowserRouter>
        </>
    )
}
export default App;
