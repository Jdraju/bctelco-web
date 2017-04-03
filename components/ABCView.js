import React, {Component } from 'react'
import SkyLight from 'react-skylight';
import CTable from './Tables'


//ABC View Table
class ABCview extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div
        style={{
          width: '95%',
          borderStyle: 'solid',
        }}>
        <CTable/>
      </div>
    )
  }
}

ABCview.displayName = 'Example';

export default ABCview;