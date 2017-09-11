import React, {Component } from 'react'
import SkyLight from 'react-skylight';
import CTable from './TablesXYZ'
import CTablePo from './XYZPayout'
import CTablePi from './XYZPayin'
import CTableR from './TablesXYZroam'
import Tabs from 'react-simpletabs';


//XYZ View Table
class XYZview extends Component {
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

XYZview.displayName = 'Example';

export default XYZview;