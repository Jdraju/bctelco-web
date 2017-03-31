import React, {Component } from 'react'
import ReactDOM from 'react-dom';
import {Table, TableHeader, TableRow, TableCell} from 'pui-react-table';
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
    attribute: 'name',
    displayName: 'Name',
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
    attribute: 'action',
    displayName: 'Action',
    sortable: true
  },
  {
    attribute: 'transactionType',
    displayName: 'Transaction Type',
    sortable: true
  },
  {
    attribute: 'destination',
    displayName: 'Destination',
    sortable: true
  },
  {
    attribute: 'duration',
    displayName: 'Duration',
    sortable: true
  },
  {
    attribute: 'charges',
    displayName: 'Charges',
    sortable: true
  },
  {
    attribute: 'flag',
    displayName: 'Flag',
    sortable: true
  },
  {
    attribute: 'timestamp',
    displayName: 'Timestamp',
    sortable: true
  },
]

const data = [
  {
    publicKey: 'rs1',
    msisdn: '14691234567',
    name:'A',
    address:'DALLAS',
    ho:'AT&T',
    rp:'N/A',
    roaming:'FALSE',
    location:'Dallas, TX',
    latitude:'32.7749',
    longitude:'-96.7970',
    rateType:'Local',
    action:'N/A',
    transactionType:'N/A',
    destination:'N/A',
    duration:'N/A',
    charges:'N/A',
    flag:'N/A',
    timestamp:'N/A',
  },
  {
    publicKey: 'rs2',
    msisdn: '14691234568',
    name:'B',
    address:'San Fransisco, CA',
    ho:'xyz',
    rp:'N/A',
    roaming:'False',
    location:'San Fransisco, CA',
    latitude:'-122.414',
    longitude:'37.776',
    rateType:'Local',
    action:'N/A',
    transactionType:'N/A',
    destination:'N/A',
    duration:'N/A',
    charges:'N/A',
    flag:'N/A',
    timestamp:'N/A',
  },
  {
    publicKey: 'rs3',
    msisdn: '14691234569',
    name:'C',
    address:'Washington DC',
    ho:'xyz',
    rp:'N/A',
    roaming:'False',
    location:'Washington DC',
    latitude:'-96.7970',
    longitude:'32.7749',
    rateType:'Local',
    action:'N/A',
    transactionType:'N/A',
    destination:'N/A',
    duration:'N/A',
    charges:'N/A',
    flag:'N/A',
    timestamp:'N/A',
  },
  {
    publicKey: 'rs5',
    msisdn: '349091234567',
    name:'D',
    address:'Barcelona, Spain',
    ho:'zyx',
    rp:'N/A',
    roaming:'False',
    location:'Barcelona, Spain',
    latitude:'2.1734',
    longitude:'41.3851',
    rateType:'Local',
    action:'N/A',
    transactionType:'N/A',
    destination:'N/A',
    duration:'N/A',
    charges:'N/A',
    flag:'N/A',
    timestamp:'N/A',
  }

]


class Tables extends Component{

render(){
    
    return <Table columns={columns} data={data} defaultSort='instances'/>

    }
}
export default Tables