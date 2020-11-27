import React from 'react'
import Carousel from "react-elastic-carousel";
import { Item } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';



class Frequent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            frequentData:[]
        }
    }

    componentDidMount(){
      
      const axios=require ('axios');
      axios.get("https://shopsmartcart.reflomsolutions.com/public/api_store_product").then(res=>{
        this.setState({frequentData : res.data})
        console.log(this.state.frequentData);

      })

    }

    render(){
        const breakPoints = [

            { width: 337, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 5 },

          ];

        return(
            <>
            <div className="App mt-4 mb-5">
                <h2 className="text-center mt-5 mr-5 ml-5"  style={{fontSize:'30px '}}>FREQUENTLY BROUGHT<span style={{color:'orange'}}> PRODUCTS</span> </h2>
                    
                    <Carousel breakPoints={breakPoints}  pagination={false}  style={{marginTop:'70px',marginBottom:"70px"}} >
                      {this.state.frequentData.map((dynamicProducts,index)=>{
                        return(
                          <Item >
                              <Card  style={{ width: '210px',height:'340px',margin:'10px' }} key={index}>
                                  <div className="container-fluid" >
                                    <div className="text-center">
                                      <Card.Img className="img-thumbnail mt-2" style={{width:'210px',height:'200px'}} variant="top" src={`https://shopsmartcart.reflomsolutions.com/public/images/`+dynamicProducts.admin_product_image} />
                                    </div>

                                    <div className="card-body">
                                        <div>
                                          <p style={{marginBottom:'0px',fontSize:'15px'}}><strong> {dynamicProducts.product_price}</strong></p>
                                          <p style={{marginBottom:'0px'}}>{dynamicProducts.admin_product_name}</p>
                                          <p style={{marginBottom:'0px',textOverflow:'initial'}}>{dynamicProducts.admin_product_name}</p>
                                        </div>

                                        <div>
                                          <button class="fluid ui button positive mt-2" data-tooltip="Add to Cart">Buy Now</button>
                                                 
                                        </div>
                                    </div>

                                  </div>

                              </Card>
                          </Item>
                          
                        );
                      })}
                    </Carousel>
            
            
            </div>
           

            </>
        );
    }

}
export default Frequent;


