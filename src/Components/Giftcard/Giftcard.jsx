import React from 'react';
import { Card } from 'semantic-ui-react';

import { TextArea ,Form } from 'semantic-ui-react';

const Giftcard=()=>{

    return(
        <React.Fragment>
           <div className="container-fluid text " style={{margin:'auto'}}>
                <Card  style={{width:'500px',marginTop:'10px',height:'auto'}}>
                    <Card.Content>
                        <strong>Give Giftcard Card to your loved one's</strong>
                          <Card.Meta className="text-center"><h5>Send an email invite</h5></Card.Meta>

                        
                        
                        <div className="mt-4">
                        
                                <i class="gift icon green"></i>
                                <strong> Build Gift Card</strong> 
                                
                                
                                
                                <div className='center aligned'>
                                
                                    <br/>
                                    <strong>Amount </strong>

                                    <div className="ui buttons ml-3">
                                    
                                        <button class="ui button active">$25</button>
                                        <button class="ui button">$50</button>
                                        <button class="ui button">$100</button>
                                        <button class=" medium ui button">Custom</button>

                                    </div>
                                </div>


                        </div>




                        <div className='center aligned'>
                           
                           
                          

                            
                            
                        </div>
                        <button className='mt-4 ui inverted green button medium  right floated m-3'>Add Card</button>

                        <div style={{marginTop:'70px'}}>
                            <form class="ui form">

                        <div class="field">
                            <label>
                               To
                            </label>
                                
                                     <input type="text" placeholder="Address line 2(optional)"/>
                                
                            
                        </div>

                        
                        <div class="field">
                            <label>
                               From
                            </label>
                                
                                     <input type="text" placeholder="Address line 2(optional)"/>
                                
                            </div>

                            <div class="field">
                                <label>Instruction for delivery (optional)</label>
                                <textarea rows="2" col="8" style={{width:'100%'}}></textarea>
                              </div>

                             

                    </form>

                    <button class='mt-4 ui inverted green button medium  right floated mt-3'>Purchase $125 Gift Card</button>
                   
                    </div>
                        
                            



                   </Card.Content> 
                </Card>
           </div>
        </React.Fragment>
    );

}
export default Giftcard; 