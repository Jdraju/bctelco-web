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

var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: node,
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-40,32],
    zoom: 2
})

var canvas = map.getCanvasContainer();

var geojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [store.lat1,store.long1 ]
        }
    }]
};

var geojson2 = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [store.lat8,store.long8]
        }
    }]
};

var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([store.lat1,store.long1])
    .setHTML(
        store.rs2screen
        )
        .addTo(map);
/*var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([13.4050,52.5200])
    .setHTML(
        '<button> Call In</button><button>Call Out</button><p>MSIDN:1469xxxxxxx4</p>'
        )
    .addTo(map)*/



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

    map.getSource(store.mappt).setData(geojson);
    //map.setPaintProperty(store.mappt, 'circle-color', store.mapptcolor);
   if(store.mappt=='point')
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
    //store.usecase1(store.maptrgt,coords.lat,coords.lng)
    store.lat1=coords.lat
    store.long1=coords.lng
    popup.setHTML(store.rs2screen)

    // Print the coordinates of where the point had
    // finished being dragged to on the map.
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat;
    canvas.style.cursor = '';
    isDragging = false

    // Unbind mouse events
    map.off('mousemove', onMove);
}

map.on('load', function () {

  // Add a single point to the map
    map.addSource('point', {
        "type": "geojson",
        "data": geojson
    });
     map.addSource('point2', {
        "type": "geojson",
        "data": geojson2
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
     map.addLayer({
        "id": "point2",
        "type": "circle",
        "source": "point2",
        "paint": {
            "circle-radius": 10,
            "circle-color": store.mapptcolor2
        }
    }
    );
    
    // When the cursor enters a feature in the point layer, prepare for dragging.
    map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['point'] });
        var features2 = map.queryRenderedFeatures(e.point2, { layers: ['point2'] });

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

        if (features2.length) {
            map.setPaintProperty('point2', 'circle-color', store.mapptcolor2_1);
            canvas.style.cursor = 'move';
            isCursorOverPoint = true;
            map.dragPan.disable();
        } else {
            map.setPaintProperty('point2', 'circle-color', store.mapptcolor2);
            canvas.style.cursor = '';
            isCursorOverPoint = false;
            map.dragPan.enable();
        }
    })

    map.on('mousedown', mouseDown);
    popup.onclick=function (e){
        store.amantest2()
        popup.setHTML(store.rs2screen)
    }







/*
 map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {

                    //DC 
                    "type": "Point",
                    "coordinates": [-77.03238901390978, 38.913188059745586]
                    },
                    "properties": {
                        "icon": "marker"
                    }
                }, {
                    //San Fran
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.414, 37.776]
                    },
                    "properties": {
                        "icon": "marker"
                    }
                },{
                    //Dallas
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [store.lat1,store.long1]
                    },
                    "properties": {
                        "icon": "marker"
                    }
                },{
                    //Berlin
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [13.4050,52.5200]
                    },
                    "properties": {
                        "icon": "marker"
                    }
                },{
                    //Barecelona
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [2.1734,41.3851]
                    },
                    "properties": {
                        "icon": "marker"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
        
    }); */
})
}