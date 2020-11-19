import React from 'react';

const Deliveryslot=()=>{

    return(
        <React.Fragment>
           <div className="container-fluid mt-5" style={{width:'500px',height:'400px'}}>
    {/* <div class="ui form">
  <div class="grouped fields">
    <label>How often do you use checkboxes?</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="example2" checked="checked"/>
        <label>Once a week</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="example2"/>
        <label>2-3 times a week</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="example2"/>
        <label>Once a day</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="example2"/>
        <label>Twice a day</label>
      </div>
    </div>
  </div>
</div> */}

<div class="ui form">
<h1>Select Delivery Slot :</h1>
    <div style={{display:'flex'}}>
         <button class="ui inverted  green button large"> Today <br/>oct 10 </button>
         <button class="ui inverted  green button large"> Sun <br/>oct 11 </button>
         <button class="ui inverted  green button large"> Mon <br/>oct 12 </button>
         <button class="ui inverted  green button large"> Tue <br/>oct 13 </button>
    </div>

    <div class="field" style={{marginTop:'40px'}}>
      <div class="ui radio checkbox">
        <input type="radio" name="example2" checked="checked"/>
        <label ><strong><h4>Fast and flexible</h4></strong></label>
      </div>
      <button class="ui right floated inverted blue button tiny">Choose</button>
    </div>

    <div class="field" style={{marginTop:'40px'}}>
      <div class="ui radio checkbox">
        <input type="radio" name="example2" checked="checked"/>
        <label><strong><h4>11am - 1pm</h4></strong></label>
      </div>
      <button class="ui right floated inverted blue button tiny">Choose</button>
    </div>

    <div class="field" style={{marginTop:'40px'}}>
      <div class="ui radio checkbox">
        <input type="radio" name="example2" checked="checked"/>
            <label><strong><h4>Noon - 2pm</h4></strong></label>
          </div>
          <button class="ui right floated inverted blue button tiny">Choose</button>
     </div>
   

    <div class="field " style={{marginTop:'40px'}}>
    
      <div class="ui radio checkbox">
        <input type="radio" name="example2" checked="checked"/>
        <label><strong><h4>2pm - 4pm</h4></strong></label>
      </div>
      <button class="ui right floated inverted blue button tiny">Choose</button>
      
    </div>

</div>

           </div>
        </React.Fragment>
    );
}
export default Deliveryslot;