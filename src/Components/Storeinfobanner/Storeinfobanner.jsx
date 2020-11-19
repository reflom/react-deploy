import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContents from '@material-ui/core/CardContent';

const Storeinfobanner=()=>{
return(
    <React.Fragment>
    <div className="container-fluid">
           <Card  className="mt-4 "style={{margin:'auto',backgroundColor:'#9AECDB',borderRadius:'20px',width:'800px'}} >
           
           <div className="container-fluid text-center" style={{width:'177px',height:'150px'}} >
                    <CardMedia
                        component="img"
                        alt="store info"
                        height="140"
                        image="http://shopsmartcart.reflomsolutions.com/webimg/walmart.jpg"
                        className="rounded-circle img-thumbnail mt-3"
                        style={{maxWidth:"100%" , maxHeight:'100%'}}
                    />
                    <div className="container-fluid"><strong>Walmart </strong></div>
                    </div>

              <CardContents className="text-center ml-4">
              <div className="container-fluid mt-4 ">
              
              {/* <div className="row">
                        <div className="col-sm-4">
                                <h4>Categories :</h4>
                        </div>
                        
                        <ul className="d-flex">
                            
                            <div className="col-sm-1">
                                <li className="d-flex"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Snacks</span></li>
                            </div>
                            
                            <div className="col-sm-1">
                            <li className="d-flex pl-4"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}> meat</span></li>
                            </div>

                            <div className="col-sm-1">
                            <li className="d-flex pl-4"> <span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>pantry</span></li>
                            </div>

                            <div className="col-sm-1">
                            <li className="d-flex pl-4 "><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Fish</span></li>
                            </div>

                            <div className="col-sm-1">
                            <li className="d-flex pl-4"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Chilled </span></li>
                            </div>

                            <div className="col-sm-1">
                            <li className="d-flex pl-4"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Frozen </span></li>
                            </div>

                            <div className="col-sm-1">
                            <li className="d-flex pl-4"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Fruits</span></li>
                            </div>
                        </ul>
                 
                    </div>
                </div> */}


                <div className="row text-center">
                        
                                <h5>Categories :</h5>
                      
                        
                        <ul className="d-flex justify-content-center">
                            
                          
                            <li className="d-flex pl-4"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}> Meat</span></li>
 
                            <li className="d-flex pl-4 "><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Fish</span></li>

                            <li className="d-flex pl-4"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Chilled </span></li>
  
                            <li className="d-flex pl-4"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Frozen </span></li>
   
                            <li className="d-flex pl-4"><span className="p-2" style={{backgroundColor:'#ecf0f1',borderRadius:'5px'}}>Fruits</span></li>
                  
                        </ul>
                 
                    </div>
                </div>





              </CardContents>      
            
            <CardContents className="ml-4">
                <h5>About Store :</h5>
                <div className="container-fluid ">
                <p style={{fontFamily:'work sans'}}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"</p>
                </div>

            </CardContents>


           </Card>
           </div>
    </React.Fragment>

);
}
export default Storeinfobanner;