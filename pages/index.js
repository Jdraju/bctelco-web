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
          width: '98%',
          height: '350px',
        }}>
      <pre id='coordinates' class='coordinates' 
        style={{
          position:'absolute', bottom: '20px',
          left: '10px',
          padding: '5px 10px',
          background: '#666',
          color: '#fff',
          //width:'100px',
          zIndex:'2',
          fontSize: '11px',
          lineHeight: '18px',
          borderRadius: '3px',
        }}>
      </pre>
      </div>
      <div
        style={{
          width: '98%'
        }}>
        <CTable/>
        </div>



    </Dashboard>)
    }
}