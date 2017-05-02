// https://www.mapbox.com/mapbox-gl-js/api/

//import animatedCircle from '../lib/animatedCircle'


import { initStore } from '../store'

export default function(node) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHVhcHVyY2VsbCIsImEiOiJjaWdyZDQ0dnQwMjAzdThtMTM3MDd0bDQ0In0.5N1zODR0er7xZmGh0wM7gw'

 const store = initStore() 

var isDragging

// Is the cursor over a point? if this
// flag is active, we listen for a mousedown event.
var isCursorOverPoint


var addrs = document.getElementById('addrs');
var rsselect = document.getElementById('rsselect');
var coordinates = document.getElementById('coordinates');

var swatches = document.getElementById('swatches');

;
rsselect.setAttribute("display","inline-block");
rsselect.setAttribute("vertical-align","middle");
rsselect.setAttribute("line-height","normal");
var rslist = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '8'
];

var map = new mapboxgl.Map({
    container: node,
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-40,32],
    zoom: 2
})

 var reg = document.getElementById('reg');
 var callout= document.getElementById('callout');
 var callend= document.getElementById('callend');
 var overageyes= document.getElementById('overageyes');
 var overageno= document.getElementById('overageno');
 if(callout !=null)
  callout.onclick = calloutf
 if(callend !=null)
  callend.onclick = callendf
 if(reg !=null)
  reg.onclick=enablecall




 function adduser()
 {
   store.adduser();
   geojson2.features.push({
                    "type": "Feature",
                    "geometry": {
                    //Dallas rs2
                    "type": "Point",
                    "coordinates": [-98,32]
                    },
                    "properties": {
                        "icon": "marker",
                        "colorc":"#fff234",
                        "title":"rs8"
                    }
                });

     map.getSource("rspoints").setData(geojson2);
    

 }
 function overageyesf()
 {
    store.overageyes(store.maptrgt);
    popup.setHTML(store.screens[store.maptrgt]);
    callout= document.getElementById('callout');
    callend= document.getElementById('callend');
    callout.onclick = calloutf
    callend.onclick = callendf
 }
 function overagenof()
 {
    store.overageno(store.maptrgt);
    popup.setHTML(store.screens[store.maptrgt]);
         geojson3.features.push({
                    "type": "Feature",
                    "geometry": {
                    "type": "Point",
                    "coordinates": [store.maplong,store.maplat]
                    }
                });

     map.getSource("rspoints2").setData(geojson3);
    store.usecase2_2(store.maptrgt);
 }
 
 async function calloutf()
 {
     let a= await  store.calloutFunc(store.maptrgt);
     if(store.overage)
     {
     popup.setHTML(store.screens[store.maptrgt]);
     overageyes= document.getElementById('overageyes');
     overageno= document.getElementById('overageno');
     overageyes.onclick = overageyesf;
     overageno.onclick = overagenof;
     }
 }

 function callendf()
 {
     store.callendFunc(store.maptrgt);
 }
 function register()
 {
     store.usecase1(store.maptrgt);
 }
 async function enablecall(){
        //register()
        //store.amantest2()
        let a= await store.usecase1(store.maptrgt,store.maplat,store.maplong);
       // alert(a)
        if(a=="yes")
        {
        popup.setHTML(store.screens[store.maptrgt])
        callout= document.getElementById('callout');
        callend= document.getElementById('callend');
        callout.onclick = calloutf
        callend.onclick = callendf
    }
    else
    {
         popup.setHTML(store.screens[store.maptrgt]);
         geojson4.features.push({
                    "type": "Feature",
                    "geometry": {
                    "type": "Point",
                    "coordinates": [store.maplong,store.maplat]
                    }
                });

     map.getSource("rspoints3").setData(geojson4);
    }
    }
function enablereg(){
        store.amantest3()
        popup.setHTML(store.screens[store.maptrgt])
        reg = document.getElementById('reg');
        reg.onclick=enablecall
    }


addrs.onclick=adduser

var canvas = map.getCanvasContainer();

var geojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [store.maplong,store.maplat ]
        }
    }]
};

var geojson2 = {
    "type": "FeatureCollection",
   "features": [{
                    "type": "Feature",
                    "geometry": {

                    //DC rs1
                    "type": "Point",
                    "coordinates": [store.long1,store.lat1]
                    },
                    "properties": {
                        "icon": "marker",
                        "colorc":"#fff234",
                        "title":"rs1"
                    }
                },{
                    //Dallas rs2
                    "id":"rs1",
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [store.long2,store.lat2]
                    },
                    "properties": {
                        "icon": "marker",
                        "colorc":"#fff234",
                        "title":"rs2"
                    }
                },{
                    //San Fran rs3
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [store.long3,store.lat3]
                    },
                    "properties": {
                        "icon": "marker",
                        "colorc":"#fff234",
                        "title":"rs3"
                    }
                },{
                    //Berlin rs4
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [store.long4,store.lat4]
                    },
                    "properties": {
                        "icon": "marker",
                        "colorc":"#fff234",
                        "title":"rs4"
                    }
                },{
                    //Barcelona
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [store.long5,store.lat5]
                    },
                    "properties": {
                        "icon": "marker",
                        "colorc":"#fff",
                        "title":"rs5"
                    }
                }]
};


var geojson3 = {
    "type": "FeatureCollection",
   "features": [{
        "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [store.long5,store.lat5]
                    }

       }]
};

var geojson4 = {
    "type": "FeatureCollection",
   "features": [{
        "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [store.long5,store.lat5]
                    }

       }]
};

var popup = new mapboxgl.Popup({closeOnClick: false,closeButton:false})
    .setLngLat([store.maplong,store.maplat])
    .setHTML(
        store.screens[store.maptrgt]
        )
        .addTo(map);



rslist.forEach(function(rs) {
    var swatch = document.createElement('button');
    swatch.setAttribute("id", rs);
    swatch.setAttribute("value",rs);
    swatch.setAttribute("name",rs);
    swatch.style.backgroundColor = "#e6e6e6";
    swatch.style.width = "25px";
    swatch.style.height = "20px";
    swatch.style.marginRight="1px";
    swatch.textContent="rs"+rs
    swatch.onclick= function() {
          switch (rs) {
                 case "1" : store.maptrgt='rs1'
                          store.maplat=store.lat1
                          store.maplong=store.long1
                          break;
                 case "2" : store.maptrgt='rs2'
                          store.maplat=store.lat2
                          store.maplong=store.long2
                          break;
                 case "3" : store.maptrgt='rs3'
                          store.maplat=store.lat3
                          store.maplong=store.long3
                          break;
                 case "4" : store.maptrgt='rs4'
                          store.maplat=store.lat4
                          store.maplong=store.long4
                          break;
                 case "5" : store.maptrgt='rs5'
                          store.maplat=store.lat5
                          store.maplong=store.long5
                          break;
                 case "8" :store.maptrgt='rs8'
                          store.maplat=store.lat8
                          store.maplong=store.long8
                          break;
             }

          popup.setHTML(store.screens[store.maptrgt]);
           reg = document.getElementById('reg');
           callout= document.getElementById('callout');
           callend= document.getElementById('callend');
           if(callout !=null)
             callout.onclick = calloutf
           if(callend !=null)
             callend.onclick = callendf
           if(reg !=null)
              reg.onclick=enablecall

       
       if(store.maptrgt=="rs3")
           store.overage=true
       else
           store.overage=false             
       geojson.features[0].geometry.coordinates = [store.maplong, store.maplat];
       map.getSource("point").setData(geojson);
       popup.setLngLat([store.maplong, store.maplat])

    }
    swatches.appendChild(swatch);
});






function mouseDown() {
    if (!isCursorOverPoint) return;

    isDragging = true;

    // Set a cursor indicator
    canvas.style.cursor = 'grab';

    // Mouse events
    map.on('mousemove', onMove);
    map.once('mouseup', onUp);
}




function onMove(e) {
    if (!isDragging) return;
    var coords = e.lngLat;
   // alert(e.sourceDataType)
    // Set a UI indicator for dragging.
    canvas.style.cursor = 'grabbing';

    // Update the Point feature in `geojson` coordinates
    // and call setData to the source layer `point` on it.
    geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
    map.getSource("point").setData(geojson);

    let i=store.maptrgt[2]
    if(i==8)
    geojson2.features[5].geometry.coordinates = [coords.lng, coords.lat];
    else
    geojson2.features[i-1].geometry.coordinates = [coords.lng, coords.lat];
    map.getSource("rspoints").setData(geojson2);

    //map.setPaintProperty(store.mappt, 'circle-color', store.mapptcolor);
     popup.setLngLat([coords.lng, coords.lat])


}

function setPointer(geojson1)
{
     map.getSource('point').setData(geojson1)
}

function onUp(e) {
    if (!isDragging) return
    var coords = e.lngLat

    store.amantest(store.maptrgt,coords.lat,coords.lng)
    store.usecase1_1(store.maptrgt,coords.lat,coords.lng)
    store.maplat=coords.lat
    store.maplong=coords.lng

     ////////////////////
      switch (store.maptrgt) {
                 case "rs1" : store.maptrgt='rs1'
                          store.lat1=store.maplat
                          store.long1=store.maplong
                          break;
                 case "rs2" : store.maptrgt='rs2'
                          store.lat2=store.maplat
                          store.long2=store.maplong
                          break;
                 case "rs3" : store.maptrgt='rs3'
                          store.lat3=store.maplat
                          store.long3=store.maplong
                          break;
                 case "rs4" : store.maptrgt='rs4'
                          store.lat4=store.maplat
                          store.long4=store.maplong
                          break;
                 case "rs5" : store.maptrgt='rs5'
                          store.lat5=store.maplat
                          store.long5=store.maplong
                          break;
                 case "rs8" : store.maptrgt='rs8'
                          store.lat8=store.maplat
                          store.long8=store.maplong
                          break;
             }
     /////////////////        

    popup.setHTML(store.screens[store.maptrgt])
    reg = document.getElementById('reg');
    reg.onclick=enablecall

    // Print the coordinates of where the point had
    // finished being dragged to on the map.
    coordinates.style.display = 'block';
   // rsselect.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat;
    canvas.style.cursor = '';
    isDragging = false

    // Unbind mouse events
    map.off('mousemove', onMove);
}

map.on('load', function () {

    geojson3.features.pop();
    geojson4.features.pop();

  // Add a single point to the map
    map.addSource('point', {
        "type": "geojson",
        "data": geojson
    });
       map.addSource('rspoints', {
        "type": "geojson",
        "data": geojson2
    });

    map.addSource('rspoints2', {
        "type": "geojson",
        "data": geojson3
    });
     map.addSource('rspoints3', {
        "type": "geojson",
        "data": geojson4
    });



    map.addLayer(
    {
        "id": "point",
        "type": "circle",
        "source": "point",
        "paint": {
            "circle-radius": 10,
            "circle-color": store.mapptcolor1
        }
    }
    );
    
    // When the cursor enters a feature in the point layer, prepare for dragging.
    map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['point'] });

        // Change point and cursor style as a UI indicator
        // and set a flag to enable other mouse events.
        if (features.length) {
            map.setPaintProperty('point', 'circle-color', store.mapptcolor1_1);
            canvas.style.cursor = 'move';
            isCursorOverPoint = true;
            map.dragPan.disable();
        } else {
            map.setPaintProperty('point', 'circle-color', store.mapptcolor1);
            canvas.style.cursor = '';
            isCursorOverPoint = false;
            map.dragPan.enable();
        }

    })

    map.on('mousedown', mouseDown);

    







 map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": "rspoints",
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
        },
        "paint":{
            "text-color": "#fff"
        }


        
    }); 

    map.addLayer({
        "id": "drone-glow",
        "type": "circle",
        "source": "rspoints",
        "paint": {
            "circle-radius": 15,
            "circle-color":"#fff",
            "circle-opacity": 0.2
        }
    });

   map.addLayer({
        "id": "drone-glow2",
        "type": "circle",
        "source": "rspoints2",
        "paint": {
            "circle-radius": 15,
            "circle-color":"#ffa31a",
            "circle-opacity": 0.8
        }
    });

       map.addLayer({
        "id": "drone-glow3",
        "type": "circle",
        "source": "rspoints3",
        "paint": {
            "circle-radius": 15,
            "circle-color":"#ff3300",
            "circle-opacity": 0.8
        }
    });

})

}