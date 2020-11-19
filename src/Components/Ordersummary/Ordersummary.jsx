import React from 'react';
import Button from '@material-ui/core/Button';
const Ordersummary=()=>{

    return(
        <React.Fragment>
        <div className="container ">
            <div class="ui card m-3" style={{width:'500px',height:'auto'}}>
                <div class="content">
                    <div class="header text-center">Order Summary</div>
                </div>
               
                <div class="content">
 
                    <div className="row mt-3">
                        <div className="col-sm-6">
                                <h3>Store 1 Subtotal </h3>
                        </div>

                        <div className="col-sm-6 ">
                            <h3 className="float-right"> $ 24.5 </h3>
                        </div>
                      
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-6">
                                <h3>Store 2 Subtotal </h3>
                        </div>

                        <div className="col-sm-6 ">
                            <h3 className="float-right"> $ 14.5 </h3>
                        </div>
                      
                    </div>



                    <div className="row mt-4">
                        <div className="col-sm-6">
                                <h3>Store 3 Subtotal </h3>
                        </div>

                        <div className="col-sm-6 ">
                            <h3 className="float-right"> $ 34.5 </h3>
                        </div>
                      
                    </div>



                    <div className="row mt-4">
                        <div className="col-sm-6">
                                <h3>Shipping & Delivery </h3>
                        </div>

                        <div className="col-sm-6 ">
                            <h3 className="float-right"> $ 4.5 </h3>
                        </div>
                      
                    </div>



                    <div className="row mt-4">
                        <div className="col-sm-6">
                                <h3>Shipping & Delivery Tax </h3>
                        </div>

                        <div className="col-sm-6 ">
                            <h3 className="float-right"> $ 2.5 </h3>
                        </div>
                      
                    </div>


                    <div className="row mt-4">
                        <div className="col-sm-6 text-center">
                                <h2>TOTAL </h2>
                        </div>

                        <div className="col-sm-6 ">
                            <h2 className="float-right"> $ 80.5 </h2>
                        </div>
                      
                    </div>









                </div>
                <div class="extra content">
                
                        <button className="btn peach-gradient p-3" style={{width:'100%'}}>Proceed to pay  </button>
                </div>
    </div>
</div>
        </React.Fragment>
    );

}
export default Ordersummary;