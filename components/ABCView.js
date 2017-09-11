import React, {Component } from 'react'
import SkyLight from 'react-skylight';
import CTable from './TablesABC'
import CTablePo from './ABCPayout'
import CTablePi from './ABCPayin'
import CTableR from './TablesABCroam'
import Tabs from 'react-simpletabs';


//ABC View Table
class ABCView extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (

     <Tabs>
        <Tabs.Panel title='Users'>

        <div
        style={{
          width: '98%'
          
        }}>
        <h3><b>Home Users</b></h3>
        <CTable/>
        <h3><b>Roaming Users</b></h3>
        <CTableR/>
      </div>
           
            
       </Tabs.Panel>

        <Tabs.Panel title='Payments'>
       
        <div
        style={{
          width: '98%'
          
        }}>
        <h3><b>Paid</b></h3>
        <CTablePo/>
        <h3><b>Recieved</b></h3>
        <CTablePi/>
      </div>

        </Tabs.Panel>
      </Tabs>



      
    )
  }
}

ABCView.displayName = 'Example';

export default ABCView;