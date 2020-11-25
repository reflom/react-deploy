import React from 'react'
import {Link,Redirect} from 'react-router-dom';
import  axios from 'axios';
class Storecategories extends React.Component{

    constructor(props){
        super(props)
        this.state={
            storecategoriesData:[]

        }
    }

    componentDidMount(){
       
        const axios=require("axios");
        axios.get("https://shopsmartcart.reflomsolutions.com/public/api_category")
        .then(res =>{
                        this.setState({storecategoriesData : res.data});
                               
                });


               
    
    }

    

    

    render(){
        return(
            <>
            <div className="container-fluid">  
                 <h1 className="m-5 text-center" style={{fontSize:'40px'}}>Product <span style={{color:'orange'}}>  Categories </span></h1>
                
                {console.log(this.state.storecategoriesData)}
                
                    <div className="row justify-content-center m-3" >
            
                        {this.state.storecategoriesData.map((catgData, index)=>{
                                return(

                                    <div class="col-md-2 clearfix d-none d-md-block m-3" key={catgData.id}>
                                        <div className="card hoverable mx-auto  p-3">
                                            <div class="testimonial">
                                                <Link to="/productlistpage">
                                                    <div class="avatar mx-auto " style={{width:'150px',height:'150px'}}>
                                                        <img src={`http://shopsmartcart.reflomsolutions.com/public/categoryimage/`+catgData.category_image} class="rounded-circle img-fluid"/>
                                                    </div>
                                                </Link>
                                            </div>

                                            <h6 class="font-weight-bold my-3 text-center">{catgData.category_name} </h6>
                                        </div> 
                                    </div>
                                    
                                    
                                );
                        })}
                    
                    </div>
            </div>
            
            </>
        );
    }
}
export default Storecategories;