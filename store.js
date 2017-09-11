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
  @observable datain=[]
  @observable transdata=[]
  @observable transdata1=[]
  @observable transdata2=[]
  @observable transdata3=[]
  @observable transdata4=[]
  @observable transdata5=[]
  @observable dataXYZ=[]
  @observable dataABC=[]
  @observable dataABCpayout=[]
  @observable dataABCpayin=[]
  @observable dataXYZpayout=[]
  @observable dataXYZpayin=[]
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
  @observable visible=false;
  

  
showdiv=()=>{
  if(this.visible){
  this.visible=false;}
  else{
    this.visible=true;
  }
}
  
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
    this.data=[]
   let step1= await request
      .post('http://172.27.12.44:3000/api/removeMSISDN')
      .type('form')
      .send({
        $class: "org.gsc.roaming.removeMSISDN",
        noneed: "aa",
        transactionId: "",
        timestamp: "2017-08-10T17:08:49.284Z"
      })
    let step2= await request
      .post('http://172.27.12.44:3000/api/resetMSISDN')
      .type('form')
      .send({
        $class: "org.gsc.roaming.resetMSISDN",
        noneed: "aa",
        transactionId: "",
        timestamp: "2017-08-10T17:08:49.284Z"
      })

      let step3 = await request
      .delete('http://172.27.12.44:3000/api/rs/rs8');

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
    this.datain=[]
    this.dataXYZ=[]
    this.dataABC=[]
    this.dataXYZroam=[]
    this.dataABCroam=[]
    let i=0
    while(i<this.count)
    {
    let summaries = await request
      .get('http://172.27.12.44:3000/api/rs/'+this.rs[i]);

     this.datain = this.datain.concat(JSON.parse(summaries.text));
     if(JSON.parse(summaries.text).ho=="resource:org.gsc.roaming.CSP#XYZ")
     {
       this.dataXYZ = this.dataXYZ.concat(JSON.parse(summaries.text));
     }
     if(JSON.parse(summaries.text).ho=="resource:org.gsc.roaming.CSP#ABC")
     {
       this.dataABC = this.dataABC.concat(JSON.parse(summaries.text));
     }
     if(JSON.parse(summaries.text).rp=="resource:org.gsc.roaming.CSP#XYZ")
     {
       this.dataXYZroam = this.dataXYZroam.concat(JSON.parse(summaries.text));
     }
      if(JSON.parse(summaries.text).rp=="resource:org.gsc.roaming.CSP#ABC")
     {
       this.dataABCroam = this.dataABCroam.concat(JSON.parse(summaries.text));
     }

     i=i+1
      }
    
    }

    inventory2=async()=>{
    this.datain=[]
    this.dataXYZ=[]
    this.dataABC=[]
    this.dataXYZroam=[]
    this.dataABCroam=[]
    let i=0
    while(i<this.count)
    {
    let summaries = await request
      .get('http://172.27.12.44:3000/api/rs/'+this.rs[i]);
    
      this.datain = this.datain.concat(JSON.parse(summaries.text));

     if(JSON.parse(summaries.text).ho=="resource:org.gsc.roaming.CSP#XYZ")
     {
       this.dataXYZ = this.dataXYZ.concat(JSON.parse(summaries.text));
     }
     if(JSON.parse(summaries.text).ho=="resource:org.gsc.roaming.CSP#ABC")
     {
       this.dataABC = this.dataABC.concat(JSON.parse(summaries.text));
     }
     if(JSON.parse(summaries.text).rp=="resource:org.gsc.roaming.CSP#XYZ")
     {
       this.dataXYZroam = this.dataXYZroam.concat(JSON.parse(summaries.text));
     }
      if(JSON.parse(summaries.text).rp=="resource:org.gsc.roaming.CSP#ABC")
     {
       this.dataABCroam = this.dataABCroam.concat(JSON.parse(summaries.text));
     }

     i=i+1
      }
    
    }

/////////////////////////////////////////////////////////////////////////////////////////////////



   usecase1_1=async(rs,lt,lng)=>{

      this.data=[]
      this.transdata=[]
     this.transdata1=[]
     this.transdata2=[]
     this.transdata3=[]
     this.transdata4=[]
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
      let city="  "
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
        rp="NA"}
     else
       { 
         rp="XYZ"}
     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'Discovery'});
     let discover= await request
      .post('http://172.27.12.44:3000/api/discovery')
      .type('form')
      .send({
        
            $class: "org.gsc.roaming.discovery",
            asset: rs,
            rp: rp,
            location: city,
            lat: this.lat.toString(),
            long: this.long.toString(),
            transtype: "discovery",
            transactionId: "",
            timestamp: "2017-08-09T13:57:23.305Z"
      })
      console.log("test2", discover)

      discover=JSON.parse(discover.text);
      delete discover.$class;

      this.transdata1[0]=this.transdata4.concat(discover);
      this.transdata=this.transdata.concat({Block:'Block 1: Discovery',d:JSON.stringify(discover)});
      

      let summaries = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     this.data = this.data.concat(JSON.parse(summaries.text));
       
   }




   usecase1=async(rs)=>{

     let hoinfo = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     let d= JSON.parse(hoinfo.text);
     var rp= d.rp.split("#");


     this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Authentiation'});
     let authenticate = await request
      .post('http://172.27.12.44:3000/api/authentication')
      .type('form')
      .send({
        
           $class: "org.gsc.roaming.authentication",
           asset: rs,
           rp: rp[1],
           transtype: "authentication",
           roaming: "True",
           flag: "active",
           transactionId: "",
           timestamp: "2017-08-09T13:57:23.211Z"

      })

      authenticate=JSON.parse(authenticate.text);
      delete authenticate.$class;

      this.transdata1[1]=this.transdata2.concat(authenticate);
      this.transdata=this.transdata.concat({Block:'Block 2: Authentication',d:JSON.stringify(authenticate)});

    let summaries2 = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     this.data = this.data.concat(JSON.parse(summaries2.text));

   if(JSON.parse(summaries2.text).flag!="Fraud")
    {
     this.data=this.data.concat({publickey: 'Block 3',msisdn: 'Register'});

     let updateRates= await request
      .post('http://172.27.12.44:3000/api/updaterate')
      .type('form')
      .send({
        
            "$class": "org.gsc.roaming.updaterate",
            "asset": rs,
            "rp": rp[1],
            "ratetype": "RoamingRate",
            "transtype": "UpdateRates",
            "transactionId": "",
            "timestamp": "2017-08-09T13:57:23.434Z"

      })

      updateRates=JSON.parse(updateRates.text);
      delete updateRates.$class;
      
      this.transdata1[2]=this.transdata3.concat(updateRates);
      this.transdata=this.transdata.concat({Block:'Block 3: UpdateRates',d:JSON.stringify(updateRates)});

     let summaries3 = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
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
     this.transdata=[]
     this.transdata1=[]
     this.transdata2=[]
     this.transdata3=[]
     this.transdata4=[]
     console.log("test1")
     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'Add User'});
     let add= await request
      .post('http://172.27.12.44:3000/api/addUser')
      .type('form')
      .send({
        
         $class: "org.gsc.roaming.addUser",
         noneed: "string",
         transactionId: "",
         timestamp: "2017-08-09T13:57:23.193Z"

      })
      console.log("test2", add)

      add=JSON.parse(add.text);
      delete add.$class;

      this.transdata1[0]=this.transdata5.concat(add);
      this.transdata=this.transdata.concat({Block:'Block 1: Add User',d:JSON.stringify(add)});

      let summaries = await request
      .get('http://172.27.12.44:3000/api/rs/rs8');
     this.data = this.data.concat(JSON.parse(summaries.text));

     this.rs[5]="rs8"
     this.count=this.count+1
      this.mapptcolor8='#3887be'
      this.mapptcolor8_1='#3bb2d0'
      this.lat8=30
      this.long8=-98

      //this.inventory2()

   }

/////////////////////////////////////////////////////////////////////////////////////////////////
   
   usecase2_1=async(rs)=>{
     //alert("aman")
     this.data=[]
     this.transdata=[]
     this.transdata1=[]
     this.transdata2=[]
     this.transdata3=[]
     this.transdata4=[]
     //alert("aman2")
     console.log("test1")

     let hoinfo = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     let d= JSON.parse(hoinfo.text);
     var rp= d.rp.split("#");
     
     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'CallOut'});
     let callout= await request
      .post('http://172.27.12.44:3000/api/callout')
      .type('form')
      .send({
         $class: "org.gsc.roaming.callout",
         asset: rs,
         rp: rp[1],
         destination: "4691234567",
         transtype: "CallOut",
         transactionId: "",
         timestamp: "2017-08-10T17:08:49.296Z"

      })
      console.log("test2", callout)

      callout=JSON.parse(callout.text);
      delete callout.$class;

      this.transdata1[0]=this.transdata5.concat(callout);
      this.transdata=this.transdata.concat({Block:'Block 1: CallOut',d:JSON.stringify(callout)});
      

      let summaries = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     this.data = this.data.concat(JSON.parse(summaries.text));

     this.inventory2()
     return "yes"
   }

    usecase2_1_1=async(rs)=>{
     //alert("aman")
     this.data=[]
     this.transdata=[]
     this.transdata1=[]
     this.transdata2=[]
     this.transdata3=[]
     this.transdata4=[]
     //alert("aman2")

     let hoinfo = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     let d= JSON.parse(hoinfo.text);
     var rp= d.rp.split("#");
     console.log("overage")

    this.screens[this.maptrgt]='<p>You are over your usage limit and new call rate will be applied on the usage from this point.\n Do you want to continue.</p>\n<button id="overageyes">Yes</button><button id="overageno">No</button>'

     this.data=this.data.concat({publickey: 'Block 1',msisdn: 'CallOut'});
     let callout= await request
     .post('http://172.27.12.44:3000/api/callout')
      .type('form')
      .send({
         $class: "org.gsc.roaming.callout",
         asset: rs,
         rp: rp[1],
         destination: "14691234567",
         transtype: "CallOut",
         transactionId: "",
         timestamp: "2017-08-10T17:08:49.296Z"

      })

      callout=JSON.parse(callout.text);
      delete callout.$class;

      this.transdata1[0]=this.transdata5.concat(callout);
      this.transdata=this.transdata.concat({Block:'Block 1: CallOut',d:JSON.stringify(callout)});

       let summaries = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     this.data = this.data.concat(JSON.parse(summaries.text));

     this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Overage Check'});
     let overage = await request
      .post('http://172.27.12.44:3000/api/overagecheck')
      .type('form')
      .send({
        
         $class: "org.gsc.roaming.overagecheck",
         asset: rs,
         rp: rp[1],
         transtype: "OverageCheck",
         flag: "Overage",
         transactionId: "",
         timestamp: "2017-08-10T17:08:49.372Z",
      })

      overage=JSON.parse(overage.text);
      delete overage.$class;

      this.transdata1[1]=this.transdata2.concat(overage);
      this.transdata=this.transdata.concat({Block:'Block 2: OverageCheck',d:JSON.stringify(overage)});

     let summaries2 = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     this.data = this.data.concat(JSON.parse(summaries2.text));
     
     this.inventory2()
     return "yes"
   }

   usecase2_2=async(rs)=>{
    
     let hoinfo = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     let d= JSON.parse(hoinfo.text);
     var rp= d.rp.split("#");

     if(!this.overage)
      {this.data=this.data.concat({publickey: 'Block 2',msisdn: 'Call End'});}
     else 
      {this.data=this.data.concat({publickey: 'Block 3',msisdn: 'Call End'});}

     let callend = await request
      .post('http://172.27.12.44:3000/api/callend')
      .type('form')
      .send({
        $class: "org.gsc.roaming.callend",
        asset: rs,
        rp: rp[1],
        duration: "5",
        transtype: "CallEnd",
        transactionId: "",
        timestamp: "2017-08-10T17:08:49.284Z"

      })

      callend=JSON.parse(callend.text);
      delete callend.$class;

    
      if(!this.overage)
       {
         this.transdata1[1]=this.transdata3.concat(callend);
         this.transdata=this.transdata.concat({Block:'Block 2: CallEnd',d:JSON.stringify(callend)});}
      else
       {
         this.transdata1[2]=this.transdata3.concat(callend);
         this.transdata=this.transdata.concat({Block:'Block 3: CallEnd',d:JSON.stringify(callend)});}

     let summaries2 = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     this.data = this.data.concat(JSON.parse(summaries2.text));

     if(!this.overage)
     {
     this.data=this.data.concat({publickey: 'Block 4',msisdn: 'Call Charges'});

     let callpay= await request
      .post('http://172.27.12.44:3000/api/callpay')
      .type('form')
      .send({
        $class: "org.gsc.roaming.callpay",
        asset: rs,
        rp: rp[1],
        charges: "10",
        transtype: "CallEnd",
        transactionId: "",
        timestamp: "2017-08-10T17:08:49.284Z"
      })

      callpay=JSON.parse(callpay.text);
      delete callpay.$class;

      
      if(!this.overage)
       {
         this.transdata1[2]=this.transdata4.concat(callpay);
         this.transdata=this.transdata.concat({Block:'Block 3: CallPay',d:JSON.stringify(callpay)});}
      else
       {
         this.transdata1[3]=this.transdata4.concat(callpay);
         this.transdata=this.transdata.concat({Block:'Block 4: CallPay',d:JSON.stringify(callpay)});}
   
      
     let summaries3 = await request
      .get('http://172.27.12.44:3000/api/rs/'+rs);
     this.data = this.data.concat(JSON.parse(summaries3.text));
     this.data=this.data.concat({});
    
    
 
    if(JSON.parse(summaries3.text).ho=="resource:org.gsc.roaming.CSP#XYZ")
     {
       this.dataXYZpayout=this.dataXYZpayout.concat({publickey:callpay.asset,rp:callpay.rp,transaction:callpay.transtype,charges:callpay.charges,transactionid:callpay.transactionId,timestamp:callpay.timestamp})
     }
     if(JSON.parse(summaries3.text).ho=="resource:org.gsc.roaming.CSP#ABC")
     {
       this.dataABCpayout=this.dataABCpayout.concat({publickey:callpay.asset,rp:callpay.rp,transaction:callpay.transtype,charges:callpay.charges,transactionid:callpay.transactionId,timestamp:callpay.timestamp})
     }
     if(JSON.parse(summaries3.text).rp=="resource:org.gsc.roaming.CSP#XYZ")
     {
       this.dataXYZpayin=this.dataXYZpayin.concat({publickey:callpay.asset,ho:JSON.parse(summaries3.text).ho,transaction:callpay.transtype,charges:callpay.charges,transactionid:callpay.transactionId,timestamp:callpay.timestamp})
     }
      if(JSON.parse(summaries3.text).rp=="resource:org.gsc.roaming.CSP#ABC")
     {
       this.dataABCpayin=this.dataABCpayin.concat({publickey:callpay.asset,ho:JSON.parse(summaries3.text).ho,transaction:callpay.transtype,charges:callpay.charges,transactionid:callpay.transactionId,timestamp:callpay.timestamp})
     }

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
  this.screens["rs8"]='<button id="reg" >Register</button>'

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