import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Step } from 'semantic-ui-react';


const Howitworks2=()=>{

    return(
        <React.Fragment>
         
         <div className="container-fluid my-5 p-5  ">



<section className="text-center dark-grey-text">

 
  <h2 className="font-weight-bold mb-4 pb-2" style={{fontSize:'40px'}}>HOW IT <span style={{color:'#eb8025'}}>WORKS ?</span></h2>
 
  <p className="lead grey-text mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

  <div className="row">

 
    <div className="col-md-4 mb-4">

      <i className="fas fa-chart-area fa-3x red-text"></i>
      <h5 className="font-weight-bold my-4">Analytics</h5>
      <p className="grey-text mb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        maiores aperiam minima assumenda deleniti hic.
      </p>

    </div>
  
    <div className="col-md-4 mb-4">

      <i className="fas fa-book fa-3x cyan-text"></i>
      <h5 className="font-weight-bold my-4">Tutorials</h5>
      <p className="grey-text mb-md-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        maiores aperiam minima assumenda deleniti hic.
      </p>

    </div>


    <div className="col-md-4 mb-4">

      <i className="far fa-comments fa-3x orange-text"></i>
      <h5 className="font-weight-bold my-4">Support</h5>
      <p className="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
        aperiam minima assumenda deleniti hic.
      </p>

    </div>
 

  </div>
 

</section>



</div>


        </React.Fragment>
    );


}
export default Howitworks2;
