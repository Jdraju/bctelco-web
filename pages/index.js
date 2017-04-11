import React from 'react'
import ReactDOM from 'react-dom'
import { Provider,observer } from 'mobx-react'
import { initStore } from '../store'
import Dashboard from '../components/Dashboard'
import map from '../lib/map'
import CTable from '../components/Tables'
import ABC from '../components/ABCView'

@observer
export default class Index extends React.Component {

   getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return {isServer}
  }
  
    constructor(props) {
    super(props)
    this.store = initStore(props.isServer)

  }
  
  componentDidMount() {
    map(this.refs.map)
  }

  render() {

    return (<Provider store={this.store}>
    <Dashboard>
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



    </Dashboard>
    </Provider>)
    }
}