import { observable } from 'mobx'
import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'
import map from './lib/map'


let store = null

class Store {
  @observable light = false
  @observable username = 'Broadcaster'
  @observable count
  @observable data=[]
  @observable dataXYZ=[]
  @observable dataABC=[]
  @observable dataXYZroam=[]
  @observable dataABCroam=[]
  @observable rs=[]
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

      this.rs=[]
      this.rs[0]="rs1"
      this.rs[1]="rs2"
      this.rs[2]="rs3"
      this.rs[3]="rs4"
      this.rs[4]="rs5"
      this.count=5
      this.inventory()
 }
   
  inventory=async()=>{
    this.data=[]
    this.dataXYZ=[]
    this.dataABC=[]
    this.dataXYZroam=[]
    this.dataABCroam=[]
    let i=0
    while(i<this.count)
    {
    let summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key:this.rs[i]}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));
     if(JSON.parse(summaries.text).ho=="XYZ")
     {
       this.dataXYZ = this.dataXYZ.concat(JSON.parse(summaries.text));
     }
     if(JSON.parse(summaries.text).ho=="ABC")
     {
       this.dataABC = this.dataABC.concat(JSON.parse(summaries.text));
     }
     if(JSON.parse(summaries.text).rp=="XYZ")
     {
       this.dataXYZroam = this.dataXYZroam.concat(JSON.parse(summaries.text));
     }
      if(JSON.parse(summaries.text).rp=="ABC")
     {
       this.dataABCroam = this.dataABCroam.concat(JSON.parse(summaries.text));
     }

     i=i+1
      }
    
    }

/////////////////////////////////////////////////////////////////////////////////////////////////

   usecase1=async()=>{
     this.data=[]
     this.lat1=2.1734
     this.long1=41.3851
     console.log("test1")
     
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

   if(JSON.parse(summaries2.text).flag!="Fraud")
    {
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
    }

     this.data=this.data.concat({});

      

   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////

   usecase1_2=async()=>{
     this.data=[]
     this.lat1=2.1734
     this.long1=41.3851
     console.log("test1")
     
     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'Discovery'});
     let discover= await request
      .post('//bctelco-api.mybluemix.net/discoverRP')
      .type('form')
      .send({
        data: JSON.stringify({ key: "rs8",
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
        data: JSON.stringify({key: 'rs8'}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));
     this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Authentiation'});
     let authenticate = await request
      .post('//bctelco-api.mybluemix.net/authentication')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs8'}),
      })

      let y = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

     let summaries2 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs8'}),
      })
     this.data = this.data.concat(JSON.parse(summaries2.text));

   if(JSON.parse(summaries2.text).flag!="Fraud")
    {
     this.data=this.data.concat({publickey: 'Block 3',msisdn: 'Register'});
   
     let updateRates= await request
      .post('//bctelco-api.mybluemix.net/updateRates')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs8'}),
      })

      let z = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      let summaries3 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs8'}),
      })
     this.data = this.data.concat(JSON.parse(summaries3.text));
    }

     this.data=this.data.concat({});

      

   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


adduser=async()=>{
     this.data=[]
     console.log("test1")
     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'Add User'});
     let add= await request
      .post('//bctelco-api.mybluemix.net/enterData')
      .type('form')
      .send({
        data: JSON.stringify({ key:"rs8",
                msisdn:"14691234568", 
                name:"A",
                address:"DALLAS",
                ho:"ABC",
                lat:"32.942746",
                long:"-96.994838"}),
      })
      console.log("test2", add)
      
      let x = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      let summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs8'}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));

     this.rs[5]="rs8"
     this.count=this.count+1

   }

/////////////////////////////////////////////////////////////////////////////////////////////////

   usecase2_1=async()=>{
     this.data=[]
     console.log("test1")
     
     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'CallOut'});
     let callout= await request
      .post('//bctelco-api.mybluemix.net/CallOut')
      .type('form')
      .send({
        data: JSON.stringify({ key: "rs2",
                sp: "XYZ",
                destmsisdn: "14691234569"}),
      })
      console.log("test2", callout)
      
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

   }

   usecase2_2=async()=>{

     this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Call End'});
     let callend = await request
      .post('//bctelco-api.mybluemix.net/CallEnd')
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
     
     this.data=this.data.concat({publickey: 'Block 3',msisdn: 'Call Charges'});

     let callpay= await request
      .post('//bctelco-api.mybluemix.net/CallPay')
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


   usecase3=async()=>{

     this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Overage Check'});
     let overage = await request
      .post('//bctelco-api.mybluemix.net/Overage')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })

      let x = await request
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

     this.data=this.data.concat({publickey: 'Block 3',msisdn: 'Call End'});
     let callend = await request
      .post('//bctelco-api.mybluemix.net/CallEnd')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })

      let y = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

     let summaries3 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })
     this.data = this.data.concat(JSON.parse(summaries2.text));
     
     this.data=this.data.concat({publickey: 'Block 4',msisdn: 'Call Charges'});

     let callpay= await request
      .post('//bctelco-api.mybluemix.net/CallPay')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })

      let z = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      let summaries4 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: 'rs2'}),
      })
     this.data = this.data.concat(JSON.parse(summaries3.text));
     this.data=this.data.concat({});

      

   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  this.rs[0]="rs1"
  this.rs[1]="rs2"
  this.rs[2]="rs3"
  this.rs[3]="rs4"
  this.rs[4]="rs5"
  this.count=5

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