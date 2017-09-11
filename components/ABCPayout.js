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
    displayName: 'User',
    sortable: true 
  },
  {
    attribute: 'rp',
    displayName: 'Partner',
    sortable: true
  },
  {
    attribute: 'transaction',
    displayName: 'Transaction',
    sortable: true
  },
  {
    attribute: 'charges',
    displayName: 'Charges',
    sortable: true
  },
  {
    attribute: 'transactionid',
    displayName: 'TransactionId',
    sortable: true
  },
  {
    attribute: 'timestamp',
    displayName: 'TimeStamp',
    sortable: true
  }
]




@inject('store') @observer
export default class Tables extends Component{

 constructor() {
   super()
  }
  
 componentDidMount() {

  }
  componentWillUnmount() {
 
  }

render(){
    //const {store} = this.props.store
    const rows = this.props.store.dataABCpayout.map((row, i) => (
      <TableRow key={i}>
        <TableColumn>{row.publickey}</TableColumn>
        <TableColumn>{row.rp}</TableColumn>
        <TableColumn>{row.transaction}</TableColumn>
        <TableColumn>{row.charges}</TableColumn>
        <TableColumn>{row.transactionid}</TableColumn>
        <TableColumn>{row.timestamp}</TableColumn>
        
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