import React, {Component } from 'react'
import ReactDOM from 'react-dom';
import { PureComponent } from 'react'
import { inject, observer } from 'mobx-react'
//import {Table, TableHeader, TableRow, TableCell} from 'pui-react-table';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
//import {Icon} from 'pui-react-iconography';
//import {Table, Column, Cell} from 'fixed-data-table';

//import Dashboard from '../components/Dashboard'
//import request from 'superagent'
//import ExpansionList from 'react-md/lib/ExpansionPanels/ExpansionList'
//import SummaryForm from '../components/SummaryForm'

 
const columns = [
  {
    attribute: 'publicKey',
    displayName: 'Public Key',
    sortable: true 
  },
  {
    attribute: 'msisdn',
    displayName: 'MSISDN',
    sortable: true
  },
  {
    attribute: 'address',
    displayName: 'Address',
    sortable: true
  },
  {
    attribute: 'ho',
    displayName: 'HO',
    sortable: true
  },
  {
    attribute: 'rp',
    displayName: 'RP',
    sortable: true
  },
  {
    attribute: 'roaming',
    displayName: 'Roaming',
    sortable: true
  },
  {
    attribute: 'location',
    displayName: 'Location',
    sortable: true
  },
  {
    attribute: 'longitude',
    displayName: 'longitude',
    sortable: true
  },
  {
    attribute: 'latitude',
    displayName: 'Latitude',
    sortable: true
  },
  {
    attribute: 'rateType',
    displayName: 'Rate Type',
    sortable: true
  },
  
  {
    attribute: 'flag',
    displayName: 'Flag',
    sortable: true
  }
]





@inject('store') @observer
export default class TablesInv extends Component{

 constructor() {
   super()
  }
  
 componentDidMount() {

  }
  componentWillUnmount() {
 
  }

render(){
    //const {store} = this.props.store
     //this.props.store.data.ho= this.props.store.data.ho.split("#")[1];
    // this.props.store.data.rp= this.props.store.data.rp.split("#")[1];
     const rows = this.props.store.datain.map((row, i) => (
      <TableRow key={i}>
        <TableColumn>{row.publickey}</TableColumn>
        <TableColumn>{row.msisdn}</TableColumn>
        <TableColumn>{row.address}</TableColumn>
        <TableColumn>{row.ho}</TableColumn>
        <TableColumn>{row.rp}</TableColumn>
        <TableColumn>{row.roaming}</TableColumn>
        <TableColumn>{row.location}</TableColumn>
        <TableColumn>{row.lat}</TableColumn>
        <TableColumn>{row.long}</TableColumn>
        <TableColumn>{row.ratetype}</TableColumn>
        <TableColumn>{row.flag}</TableColumn>
        
      </TableRow>
    ));


    const headers = columns.map((row, i) => (
      
        <TableColumn key={i}>{row.displayName}</TableColumn>

    ));
   

    return (
      <DataTable plain>
        <TableHeader>
          <TableRow>
            {headers}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows}
        </TableBody>
      </DataTable>
    )
    }
}
//export default Tables