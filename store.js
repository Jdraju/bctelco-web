import { observable } from 'mobx'
import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'
import map from './lib/map'


let store = null

class Store {
  @observable light = false
  @observable username = 'Broadcaster'

  @observable data=[]
  @observable lat1
  @observable long2

  
  

  
 resetInventory=async()=>{
    var d = [{}]
   let summaries = await request
      .post('//bctelco-api.mybluemix.net/resetInventory')
      .type('form')
      .send({
        data:JSON.stringify(d),
      })
      this.lat1=-96.7970
      this.long1=32.7749
      let x = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})
      this.inventory()
 }
   
  inventory=async()=>{
    this.data=[]
    let summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs1'}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));
     summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));
     summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs3'}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));
     summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs4'}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));
     summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs5'}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));

      /*this.data = [
  {
    publickey: 'rs1',
    msisdn: '14691234567',
    name:'A',
    address:'DALLAS',
    ho:'AT&T',
    rp:'N/A',
    roaming:'FALSE',
    location:'Dallas, TX',
    lat:'32.7749',
    long:'-96.7970',
    ratetype:'Local',
    action:'N/A',
    transtype:'N/A',
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
  }] */

}

   usecase1=async()=>{
     this.data=[]
     this.lat1=2.1734
     this.long1=41.3851
     console.log("test1")
     /*var geojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [this.lat1,this.long1]
         }
      }]
     };
    
     map.setPointer(geojson)*/

    /* setTimeout(()=>this.discoverRP(),1000)
     setTimeout(()=>this.queryMS(),2000)
     setTimeout(()=>this.authentication(),1000)
     setTimeout(()=>this.queryMS(),2000)
     setTimeout(()=>this.updateRates(),1000)
     setTimeout(()=>this.queryMS(),2000)
   */

     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'Discovery'});
     let discover= await request
      .post('//bctelco-api.mybluemix.net/discoverRP')
      .type('form')
      .send({
        data: JSON.stringify({ key: "rs2",
                sp: "XYZ",
                loc: "Barcelona",
                lat: "41.385064",
                long: "2.173403"}),
      })
      console.log("test2", discover)
      
      let x = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      let summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));
     this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Authentiation'});
     let authenticate = await request
      .post('//bctelco-api.mybluemix.net/authentication')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })

      let y = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

     let summaries2 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })
     this.data = this.data.concat(JSON.parse(summaries2.text));
     this.data=this.data.concat({publickey: 'Block 3',msisdn: 'Register'});

     let updateRates= await request
      .post('//bctelco-api.mybluemix.net/updateRates')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })

      let z = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      let summaries3 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })
     this.data = this.data.concat(JSON.parse(summaries3.text));
     this.data=this.data.concat({});

      

   }


   discoverRP=async()=>{
   // alert("called")
    let summaries =  await request
      .post('//bctelco-api.mybluemix.net/discoverRP')
      .type('form')
      .send({
        data: JSON.stringify({ key: "rs2",
                sp: "XYZ",
                loc: "Barcelona",
                lat: "41.385064",
                long: "2.173403"}),
      })

      
  }

     authentication=async()=>{
    //alert("called")
    let summaries = await request
      .post('//bctelco-api.mybluemix.net/authentication')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })
  }

     updateRates=async()=>{
    //alert("called")
    let summaries = await request
      .post('//bctelco-api.mybluemix.net/updateRates')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })

  }

 
    queryMS=async()=>{
    //alert("called")
    let summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })
      //alert(JSON.stringify(summaries.text))
     this.data = this.data.concat(JSON.parse(summaries.text));
     //alert(this.data)
  }


  
  constructor (isServer) {

  this.inventory()
  this.lat1=-96.7970
  this.long1=32.7749

  }

 

}

export function initStore (isServer) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer)
  } else {
    if (store === null) {
      store = new Store(isServer)
    }
    return store
  }
}