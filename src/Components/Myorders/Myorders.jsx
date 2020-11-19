import React from 'react';
import {Segment,Tab,Card, CardContent, CardGroup} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Myorders=()=>{
    
    const panes = [
        { menuItem: 'Open Orders', render: () =>
                <Tab.Pane >
                 <CardGroup> 
                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"green"}}>on transit</span></h4>
                                <h4>Order Date : 13-07-2020</h4>
                                <h4>Total Amount : <span> $ 12.6</span></h4>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"green"}}>on transit</span></h4>
                                <h4>Order Date : 02-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>


                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"green"}}>on transit</span></h4>
                                <h4>Order Date : 07-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>


                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"green"}}>on transit</span></h4>
                                <h4>Order Date : 07-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>


                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"green"}}>on transit</span></h4>
                                <h4>Order Date : 07-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"green"}}>on transit</span></h4>
                                <h4>Order Date : 07-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>

                       

                        

                        </CardGroup> 

                </Tab.Pane> },

        { menuItem: 'Completed Orders', render: () =>
                    <Tab.Pane>
                    <CardGroup> 
                     <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>


                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>


                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                <h4>Status : <span style={{color:"blue"}}>Completed</span></h4>
                                <h4>Order Date : 23-07-2020</h4>
                                <h4>Total Amount : <span> $ 22.6</span></h4>
                            </CardContent>
                        </Card>
                   
                        </CardGroup> 
                    </Tab.Pane> },
        { menuItem: 'Cancelled Orders', render: () => 
        
                        <Tab.Pane>
                        <CardGroup>
                            <Card>
                                <CardContent>
                                    <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                    <h4>Status : <span style={{color:"red"}}>Cancelled</span></h4>
                                    <h4>Order Date : 23-07-2020</h4>
                                    <h4>Total Amount : <span> $ 22.6</span></h4>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent>
                                    <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                    <h4>Status : <span style={{color:"red"}}>Cancelled</span></h4>
                                    <h4>Order Date : 23-07-2020</h4>
                                    <h4>Total Amount : <span> $ 22.6</span></h4>
                                </CardContent>
                            </Card>


                            <Card>
                                <CardContent>
                                    <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                    <h4>Status : <span style={{color:"red"}}>Cancelled</span></h4>
                                    <h4>Order Date : 23-07-2020</h4>
                                    <h4>Total Amount : <span> $ 22.6</span></h4>
                                </CardContent>
                            </Card>


                            <Card>
                                <CardContent>
                                    <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                    <h4>Status : <span style={{color:"red"}}>Cancelled</span></h4>
                                    <h4>Order Date : 23-07-2020</h4>
                                    <h4>Total Amount : <span> $ 22.6</span></h4>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent>
                                    <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                    <h4>Status : <span style={{color:"red"}}>Cancelled</span></h4>
                                    <h4>Order Date : 23-07-2020</h4>
                                    <h4>Total Amount : <span> $ 22.6</span></h4>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent>
                                    <h4>Order Id : <Link>H2SAS776RT563WER676</Link></h4>
                                    <h4>Status : <span style={{color:"red"}}>Cancelled</span></h4>
                                    <h4>Order Date : 23-07-2020</h4>
                                    <h4>Total Amount : <span> $ 22.6</span></h4>
                                </CardContent>
                            </Card>



                           
                        </CardGroup>  
                        </Tab.Pane> },
      
    ]


    return(
        <React.Fragment>
           <div className="container-fluid " >
              
                <h3 className="ui dividing header p-3"> My Orders</h3>

                <Tab panes={panes} />

              
           </div>
        </React.Fragment>
    );

}
export default Myorders;