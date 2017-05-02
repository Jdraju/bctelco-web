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
  @observable msisdnreg=[]
  @observable mappt
  @observable maptrgt
  @observable mapptcolor1
  @observable mapptcolor8
  @observable mapptcolor1_1
  @observable mapptcolor8_1
   @observable lat
  @observable long
  @observable lat1
  @observable long1
  @observable lat2
  @observable long2
  @observable lat3
  @observable long3
  @observable lat4
  @observable long4
  @observable lat5
  @observable long5
  @observable maplat
  @observable maplong
  @observable rs2screen
  @observable overage
  @observable screens={}
  @observable msisdnlist={}
  

  
  amantest=(rs,lng,lt)=>{
  // alert(rs+" "+lng+" Aman "+lt);
     this.screens[this.maptrgt]='<button id="reg" >Register</button>'
  }

   amantest2=()=>{

       this.screens[this.maptrgt]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:'+this.msisdnlist[this.maptrgt]+'</p>'
  }
  amantest3=()=>{

       this.screens[this.maptrgt]='<button id="reg" >Register</button>'
  }

  overageyes=(rs)=>{

    this.screens[this.maptrgt]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:'+this.msisdnlist[this.maptrgt]+'</p>'

  }
   overageno=(rs)=>{

    this.screens[this.maptrgt]='<p>OVERAGE<\p>\n<p>MSIDN:'+this.msisdnlist[this.maptrgt]+'</p>'

  }

  overageEnaDis=()=>{
    if(this.overage)
      {
         this.overage=false
      }
    else
    {
      this.overage=true
    }
  }

  calloutFunc=async(rs)=>{
    if(this.overage)
      {
       let a= await this.usecase2_1_1(rs)
        return "overage"
      }
    else
    {
      let a= this.usecase2_1(rs)
      return "yes"
    }
    return "yes"
  }
  
  callendFunc=(rs)=>{

      this.usecase2_2(rs)

  }

  focusrs2=()=>{
    this.mappt='point'
    this.maptrgt='rs2'
    this.maplat=this.lat2
    this.maplong=this.long2
  }
  focusrs3=()=>{
    this.mappt='point'
    this.maptrgt='rs3'
    this.maplat=this.lat3
    this.maplong=this.long3
  }
  focusrs8=()=>{
    this.mappt='point2'
    this.maptrgt='rs8'
    this.maplat=this.lat8
    this.maplong=this.long8
  }
  
 resetInventory=async()=>{
    var d = [{}]
   let summaries = await request
      .post('//bctelco-api.mybluemix.net/resetInventory')
      .type('form')
      .send({
        data:JSON.stringify(d),
      })
      let x = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      this.lat1=-96.7970
    this.long1=32.7767
  this.lat8=-98
  this.long8=30
  this.rs[0]="rs1"
  this.rs[1]="rs2"
  this.rs[2]="rs3"
  this.rs[3]="rs4"
  this.rs[4]="rs5"
  this.count=5
  this.overage=false
  this.mappt='point'
  this.maptrgt='rs2'
  this.mapptcolor1_1='#3bb2d0'
  this.mapptcolor1='#3887be'
  this.mapptcolor8='#333333'
  this.mapptcolor8_1='#333333'
  this.rs2screen='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:'+this.msisdnlist[this.maptrgt]+'</p>'
  this.screens["rs1"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:14691234567</p>'
  this.screens["rs2"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:14691234568</p>'
  this.screens["rs3"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:14691234569</p>'
  this.screens["rs4"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:03097218855  </p>'
  this.screens["rs5"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:349091234567</p>'
  this.screens["rs8"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:14691234568</p>'
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

    inventory2=async()=>{
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



   usecase1_1=async(rs,lt,lng)=>{

      this.data=[]
     this.lat=Math.round(lt * 100) / 100
     this.long=Math.round(lng * 100) / 100
     //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true&key=AIzaSyDa7v5iVlfBBPkyb5bdhb0rynjVZlyOoI0

    let citydata= await request
      .post('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat.toString()+','+this.long.toString()+'&sensor=true&key=AIzaSyDa7v5iVlfBBPkyb5bdhb0rynjVZlyOoI0')
      .type('form')

      //console.log("data",citydata)
      //alert(JSON.parse(citydata.text).results[0].address_components[2].long_name)

      let i=0
      let country=""
      let city=""
      while(i<JSON.parse(citydata.text).results[0].address_components.length)
      {

       // alert(JSON.parse(citydata.text).results[0].address_components[i].types)
        if (JSON.parse(citydata.text).results[0].address_components[i].types=='country,political')
           {
               country=JSON.parse(citydata.text).results[0].address_components[i].short_name
               break
           }
        if (JSON.parse(citydata.text).results[0].address_components[i].types=='administrative_area_level_1,political')
           {
               city=JSON.parse(citydata.text).results[0].address_components[i].long_name
           }
           i=i+1
      }

      //alert(country)

      //let city=JSON.parse(citydata.text).results[0].address_components[3].long_name
     console.log("test1")
     let loc=""
     let rp=""
     if(country=="US")
       { 
        rp=""}
     else
       { 
         rp="XYZ"}
     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'Discovery'});
     let discover= await request
      .post('//bctelco-api.mybluemix.net/discoverRP')
      .type('form')
      .send({
        data: JSON.stringify({ key: rs,
                sp: rp,
                loc: city,
                lat: this.lat.toString(),
                long: this.long.toString()}),
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
        data: JSON.stringify({key: rs}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));
       
   }




   usecase1=async(rs)=>{

     this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Authentiation'});
     let authenticate = await request
      .post('//bctelco-api.mybluemix.net/authentication')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })

      let y = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

     let summaries2 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })
     this.data = this.data.concat(JSON.parse(summaries2.text));

   if(JSON.parse(summaries2.text).flag!="Fraud")
    {
     this.data=this.data.concat({publickey: 'Block 3',msisdn: 'Register'});
   
     let updateRates= await request
      .post('//bctelco-api.mybluemix.net/updateRates')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })

      let z = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      let summaries3 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })
     this.data = this.data.concat(JSON.parse(summaries3.text));
     this.screens[this.maptrgt]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:'+this.msisdnlist[this.maptrgt]+'</p>'
    }
    else{
       this.mapptcolor8='#b30000'
       this.mapptcolor8_1='#ff1a1a'
        this.screens[this.maptrgt]='<p>*No Signal* Cannot Register to Network</p>'
        this.data=this.data.concat({});
        this.inventory2()
        return "fraud"
    }

     this.data=this.data.concat({});
      this.inventory2()
      return "yes"

   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
      this.mapptcolor8='#3887be'
      this.mapptcolor8_1='#3bb2d0'
      this.lat8=30
      this.long8=-98

      this.inventory2()

   }

/////////////////////////////////////////////////////////////////////////////////////////////////
   
   usecase2_1=async(rs)=>{
     //alert("aman")
     this.data=[]
     //alert("aman2")
     console.log("test1")
     
     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'CallOut'});
     let callout= await request
      .post('//bctelco-api.mybluemix.net/CallOut')
      .type('form')
      .send({
        data: JSON.stringify({ key: rs,
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
        data: JSON.stringify({key: rs}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));

     this.inventory2()
     return "yes"
   }

    usecase2_1_1=async(rs)=>{
     //alert("aman")
     this.data=[]
     //alert("aman2")
     console.log("overage")

    this.screens[this.maptrgt]='<p>You are over your usage limit and new call rate will be applied on the usage from this point.\n Do you want to continue.</p>\n<button id="overageyes">Yes</button><button id="overageno">No</button>'

     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'CallOut'});
     let callout= await request
      .post('//bctelco-api.mybluemix.net/CallOut')
      .type('form')
      .send({
        data: JSON.stringify({ key: rs,
                sp: "XYZ",
                destmsisdn: "14691234569"}),
      })
      
      let x = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      let summaries = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })
     this.data = this.data.concat(JSON.parse(summaries.text));

     this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Overage Check'});
     let overage = await request
      .post('//bctelco-api.mybluemix.net/Overage')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })

      let y = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

     let summaries2 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })
     this.data = this.data.concat(JSON.parse(summaries2.text));
     
     this.inventory2()
     return "yes"
   }

   usecase2_2=async(rs)=>{
    
     if(!this.overage)
      {this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Call End'});}
     else 
      {this.data=this.data.concat({publickey: 'Block 3',msisdn: 'Call End'});}

     let callend = await request
      .post('//bctelco-api.mybluemix.net/CallEnd')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })

      let y = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

     let summaries2 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })
     this.data = this.data.concat(JSON.parse(summaries2.text));

     if(!this.overage)
     {
     this.data=this.data.concat({publickey: 'Block 4',msisdn: 'Call Charges'});

     let callpay= await request
      .post('//bctelco-api.mybluemix.net/CallPay')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })

      let z = await request
      .post('//bctelco-api.mybluemix.net/delayFunc')
      .type('form')
      .send({})

      let summaries3 = await request
      .post('//bctelco-api.mybluemix.net/queryMSISDN')
      .type('form')
      .send({
        data: JSON.stringify({key: rs}),
      })
     this.data = this.data.concat(JSON.parse(summaries3.text));
     this.data=this.data.concat({});
     }
      
     this.inventory2()
   }


   

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



  
  constructor (isServer) {

  this.maplat=32.7767
  this.maplong=-96.7970
  //Dallas
  this.lat2=32.7767
  this.long2=-96.7970
  // Fraud
  this.lat8=30
  this.long8=-98
  //DC
  this.lat1=38.913188059745586
  this.long1=-77.03238901390978
  //SF
  this.lat3=37.776
  this.long3=-122.414
  //Berlin
  this.lat4=52.5200
  this.long4=13.4050
  //Barcelona
  this.lat5=41.3851
  this.long5=-2.1734
  this.rs[0]="rs1"
  this.rs[1]="rs2"
  this.rs[2]="rs3"
  this.rs[3]="rs4"
  this.rs[4]="rs5"
  this.count=5
  this.overage=false
  this.mappt='point'
  this.maptrgt='rs2'
  this.mapptcolor1_1='#3bb2d0'
  this.mapptcolor1='#3887be'
  this.mapptcolor8='#333333'
  this.mapptcolor8_1='#333333'
  this.rs2screen='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:'+this.msisdnlist[this.maptrgt]+'</p>'
  this.screens["rs1"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:14691234567</p>'
  this.screens["rs2"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:14691234568</p>'
  this.screens["rs3"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:14691234569</p>'
  this.screens["rs4"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:03097218855  </p>'
  this.screens["rs5"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:349091234567</p>'
  this.screens["rs8"]='<button id="callout"> Call Out</button><button id="callend">Call End</button><p>MSIDN:14691234568</p>'

  this.msisdnlist["rs1"]='14691234567'
  this.msisdnlist["rs2"]='14691234568'
  this.msisdnlist["rs3"]='14691234569'
  this.msisdnlist["rs4"]='03097218855'
  this.msisdnlist["rs5"]='349091234567'
  this.msisdnlist["rs8"]='14691234568'



  this.inventory()

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