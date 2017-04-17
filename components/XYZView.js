import React, {Component } from 'react'
import SkyLight from 'react-skylight';
import CTable from './Tables'


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
        <CTable/>
      </div>
    )
  }
}

XYZview.displayName = 'Example';

export default XYZview;