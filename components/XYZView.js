import React, {Component } from 'react'
import SkyLight from 'react-skylight';
import CTable from './TablesXYZ'
import CTableR from './TablesXYZroam'


//XYZ View Table
class XYZview extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div
        style={{
          width: '98%'
        }}>
        <h><b>Home Users</b></h>
        <CTable/>
        <h><b>Roaming Users</b></h>
        <CTableR/>
      </div>
    )
  }
}

XYZview.displayName = 'Example';

export default XYZview;