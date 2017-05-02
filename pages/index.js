import React from 'react'
import ReactDOM from 'react-dom'
import { Provider,observer } from 'mobx-react'
import { initStore } from '../store'
import Dashboard from '../components/Dashboard'
import map from '../lib/map'
import CTable from '../components/Tables'
import ABC from '../components/ABCView'
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

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
    map(this.refs.map,2.1,31.38)
  }

  render() {

    return (<Provider store={this.store}>
    <Dashboard>
      <ExpansionList
      style={{
          width: '98%'
        }}>
      <div
        ref='map'
        style={{
          width: '98%',
          height: '350px'
        }}>
          <div 
           style = {{
             position: 'absolute',
             zIndex:'2',
             color: '#fff',
             width: '30px',
             top: '0',
             left: '0',
             padding: '10px',
             height: '200px',
             lineheight: '200px',
             textalign: 'center'
           }}>
           <span id='rsselect'></span>
            <div >
        <fieldset>
            <div id='swatches'></div>
        </fieldset>
        </div>

        <div 
           style = {{
             position: 'absolute',
             zIndex:'2',
             color: '#fff',
             width: '30px',
             top: '210px',
             left: '0',
             marginTop:'10px',
             padding: '10px',
             height: '200px',
             lineheight: '200px',
             textalign: 'center'
           }}>
           <button id="addrs">Add User</button>
           </div>

           </div>

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

        <ExpansionPanel label="Data Table" defaultExpanded>
          <CTable/>
        </ExpansionPanel>
        
      </ExpansionList>


    </Dashboard>
    </Provider>)
    }
}