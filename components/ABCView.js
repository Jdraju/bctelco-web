import React, {Component } from 'react'
import SkyLight from 'react-skylight';
import CTable from './TablesABC'
import CTableR from './TablesABCroam'


//ABC View Table
class ABCView extends Component {
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

ABCView.displayName = 'Example';

export default ABCView;