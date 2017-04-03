import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from '../components/Dashboard'
import map from '../lib/map'
import CTable from '../components/Tables'
import ABC from '../components/ABCView'


export default class Index extends React.Component {
  componentDidMount() {
    map(this.refs.map)
  }

  render() {
    return (<Dashboard>
      <div
        ref='map'
        style={{
          width: '95%',
          height: '350px',
        }}>
      </div>
      <div
        style={{
          width: '95%',
          borderStyle: 'solid',
        }}>
        <CTable/>
        </div>



    </Dashboard>)
    }
}