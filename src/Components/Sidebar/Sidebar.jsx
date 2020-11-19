import React from 'react';
import './Sidebar.css'
import { Tab } from 'semantic-ui-react';
import Referfriend from '../Referfriend/Referfriend';
import Mangeaddress from '../Manageaddress/Manageaddress';
import Addaddress from '../Addaddress/Addaddress';
import Myaccount from '../Myaccount/Myaccount';
import Myorders from '../Myorders/Myorders';
import Navbar from 'react-bootstrap/Navbar';
import Giftcard from '../Giftcard/Giftcard';
const Sidebar=()=>{


    const panes = [
      
        { menuItem: 'My Account', render: () => <Tab.Pane> <Myaccount/></Tab.Pane> },
       
        { menuItem: 'My Orders', render: () => <Tab.Pane><Myorders/></Tab.Pane> },
        
        { menuItem: 'Manage address', render: () => <Tab.Pane> <Mangeaddress/> </Tab.Pane> },
        
        { menuItem: 'Notification', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        
        { menuItem: 'Refer Friends', render: () => <Tab.Pane>
        <div className="container-fluid">

        <Referfriend/>
        
        </div>
        </Tab.Pane> },
        
        { menuItem: 'Gift Cards', render: () => <Tab.Pane><Giftcard/></Tab.Pane> },
        
       
       
      ]

    return(
        <React.Fragment>

          
            
                <Tab
                className="m-5 "
                    menu={{ fluid: true, vertical: true }}
                    menuPosition='left'
                    panes={panes}
                />
            
        </React.Fragment>
    );
}
export default Sidebar;

// import React from 'react';
// import './Sidebar.css'
// import Tab from 'react-bootstrap/Tabs';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// class Sidebar extends React.Component{

//     constructor(props){
//         super(props)
//         this.state={

//         }
//     }


// componentDidMount(){

// }

// render(){
//     return(
//         <>
//             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//                 <Row>
//                     <Col sm={3}>
//                         <Nav variant="pills" className="flex-column">
//                             <Nav.Item>
//                                 <Nav.Link eventKey="first">Account</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </Col>
//                     <Col sm={9}>
//                         <Tab.Content>
//                             <Tab.Pane eventKey="first">
//                               sdsd
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="second">
//                                 dsd
//                             </Tab.Pane>
//                         </Tab.Content>
//                     </Col>
//                 </Row>
//             </Tab.Container>

//         </>
//     );
// }

// }
// export default Sidebar;



