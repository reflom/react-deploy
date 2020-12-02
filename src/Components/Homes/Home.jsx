import React,{useState} from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Categoriesslider from '../Categoriesslider/Categoriesslider';
import Howitworks from '../Howitworks/Howitworks';
import Storeslider from '../Storeslider/Storeslider';
import Becomeshopper from '../Becomeshopper/Becomeshopper';
import LocationBanner from '../LocationBanner/LocationBanner';
import LocationBanner2 from '../LocationBanner/LocationBanner2';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';


// const Home=()=>{
    
// const [loading,isLoading]=useState(true);  



//    {if(loading==false){
//        return(
//            <>
//         <Header/>
//         <LocationBanner2/>
//         <Howitworks/>
//         <Categoriesslider/>
//         <hr/>
//         <Storeslider/>
//         <hr/>
//         <Becomeshopper/>
//        <Footer/>
//        </>
//        )
//    }}



       
  
// }
// export default Home; 


export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
                loading:true
        }
    }

    componentDidMount(){
        this.setState({loading: false});

    }



    render(){

        if(this.state.loading==false){
            return(
                <>
                <Header/>
                    <LocationBanner2/>
                    <Howitworks/>
                    <Categoriesslider/>
                    <hr/>
                    <Storeslider/>
                    <hr/>
                    <Becomeshopper/>
                <Footer/>
                </>

            )}
            else{
                return (
                    <div className="container-fluid" style={{backgroundColor:'black' ,width:'100%',height:'100%'}}>
                             
                                
                    </div>
                )
                    
                
            }
        }

        
    }




