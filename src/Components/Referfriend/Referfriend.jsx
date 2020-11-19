import React from 'react';
import { Card } from 'semantic-ui-react';
import { Input ,Icon} from 'semantic-ui-react';
const Referfriend=()=>{
    return(
        <React.Fragment>
            <div className="container-fluid mb-5 mt-4" >
                <Card className="card" style={{width:'700px',margin:"auto",marginTop:'20px'}}>
                    <div className="text-center">
                     <Card.Header className="mb-3"><h1>Give 10$ to your Friends</h1></Card.Header>
                        <Card.Meta className="mb-3"><h3>for every friend who places their first order</h3></Card.Meta>
                    </div>
                <Card.Content>
                
                <Card.Meta><h5>Share your link</h5></Card.Meta>
                <div className="text-center mt-2">
                    <Card.Description>
                    <Input
                    style={{width:'80%'}}
                        size='large'
                        action={{
                        color: 'teal',
                        labelPosition: 'right',
                        icon: 'copy',
                        content: 'Copy',
                        
                        }}
                        defaultValue='http://www.shopsmartcart.com/FZA34ED'
                     />

                    <Input
                    style={{width:'80%',marginTop:'20px'}}
                        size='large'
                        action={{
                        color: 'teal',
                        labelPosition: 'right',
                        icon: 'copy',
                        content: 'Copy',
                        
                        }}
                        defaultValue='A23S232ASF23AZHS7'
                     />


                        </Card.Description>
                      

                    <button class="ui facebook button" style={{marginTop:'20px'}}>
                    <i class="facebook icon"></i>
                            Share on  Facebook
                    </button>
                    </div>

                </Card.Content>

                <Card.Content>

                <Card.Meta><h5>Send an email invite</h5></Card.Meta>
                <Card.Description>
               
                <div className="text-center">
                    <Input iconPosition='left' size='large' placeholder='Email' style={{width:'80%',marginTop:'20px'}}>
                        <Icon name='at' />
                        <input  placeholder="Enter friends Email"/>
                    </Input>

                    <Input iconPosition='left' size='large' placeholder='Email' style={{width:'80%',marginTop:'20px'}}>
                        <Icon name='at' />
                        <input placeholder="Enter friends Email"/>
                    </Input>

                    <Input iconPosition='left' size='large' placeholder='Email' style={{width:'80%',marginTop:'20px'}}>
                        <Icon name='at' />
                        <input placeholder="Enter friends Email"/>
                    </Input>

                           
                </div>
                
                <div className="text-center mt-3">
                        <button class=" ui left floated grey button" >Preview Email</button>
                        <button class="positive  right floated ui button" >Send</button>
                </div>
                </Card.Description>
                </Card.Content>
            </Card>
            </div>
        </React.Fragment>
    );
}
export default Referfriend;