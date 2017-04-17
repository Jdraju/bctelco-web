import React, {Component } from 'react'
import SkyLight from 'react-skylight';
import CTable from './Tables'


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
        <CTable/>
      </div>
    )
  }
}

ABCView.displayName = 'Example';

export default ABCView;