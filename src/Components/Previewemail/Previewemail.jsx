import React from 'react';
import {Segment} from 'semantic-ui-react';
const Previewemail=()=>{

    return(
        <React.Fragment>
            <div className="container-fluid" style={{margin:'auto'}}>
            <div class="ui card" style={{width:'100%',backgroundColor:'#f2f2f2',marginTop:'30px'}}>
  <div class="content">
    <div class="header text-center">Email Preview - Here's what your will see</div>
  </div>

  <div class="content p-3">
        <Segment>
        <h5 class="ui dividing header p-3">Subject : ajaysingh@shopsmart.com sent  $10  Gift Card </h5>

        <div class="ui card" style={{width:'100%' ,height:'auto'}}>

        <div class="ui inverted circular segment m-4">
            <h2 class="ui inverted header">
            <div class="sub header mb-3">ajaysdfsdgfdg@shopsmart.com gifited you </div>
                    $10.99
                    <div class="sub header mt-3 ">Towards your first order</div>
            </h2>
            
        </div>


        </div>

          
          <h5 class="ui header p-3 text-center"> Remember  to thank <strong>ajaysdfsdgfdg@shopsmart.com</strong> for being awesome human !</h5>
        </Segment>


   </div>
  <div class="extra content text-center">
    <button class="ui inverted green button ">Got it</button>
  </div>
</div>
           </div>  
        </React.Fragment>
    );
}
export default Previewemail;