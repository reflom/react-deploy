import React from 'react';

class Storepartners extends React.Component{
constructor(props){
    super(props)
    this.state={

    }
}


render(){
    return(
        <>
      <div class="my-5">
      <h2 className="font-weight-bold mb-4 pb-2 text-center" style={{fontSize:'40px'}}>STORE <span style={{color:'#eb8025'}}>PARTNERS</span></h2>
  
  <section class=" lighten-2 py-5">
    
    <div class="flex-center">

      <div class="row">

        <div class="col-md-3 flex-center">
          <img src="https://mdbootstrap.com/img/Photos/Template/34.png" class="img-fluid wow fadeIn" data-wow-delay=".2s"/>
        </div>
  

        <div class="col-md-3 flex-center">
          <img src="https://mdbootstrap.com/img/Photos/Template/35.png" class="img-fluid wow fadeIn" data-wow-delay=".4s"/>
        </div>


        <div class="col-md-3 flex-center">
          <img src="https://mdbootstrap.com/img/Photos/Template/36.png" class="img-fluid wow fadeIn" data-wow-delay=".4s"/>
        </div>
      

       
        <div class="col-md-3 flex-center">
          <img src="https://mdbootstrap.com/img/Photos/Template/37.png" class="img-fluid wow fadeIn" data-wow-delay=".2s"/>
        </div>
  

      </div>
   

    </div>
    
  </section>

</div>
        </>
    );
}


}
export default Storepartners;