// https://www.mapbox.com/mapbox-gl-js/api/

//import animatedCircle from '../lib/animatedCircle'


export default function(node) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHVhcHVyY2VsbCIsImEiOiJjaWdyZDQ0dnQwMjAzdThtMTM3MDd0bDQ0In0.5N1zODR0er7xZmGh0wM7gw'
  


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
            "coordinates": [-96.994838,32.942746 ]
        }
    }]
};
var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([-77.03238901390978, 38.913188059745586])
    .setHTML(
        '<button> Call In</button><button>Call Out</button><p>MSIDN:1469xxxxxxx1</p>'
        )
    .addTo(map)

var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([-122.414, 37.776])
    .setHTML(
        '<button> Call In</button><button>Call Out</button><p>MSIDN:1469xxxxxxx2</p>'
        )
    .addTo(map);
var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([-96.7970,32.7767])
    .setHTML(
        '<button> Call In</button><button>Call Out</button><p>MSIDN:1469xxxxxxx3</p>'
        )
        .addTo(map);
var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([13.4050,52.5200])
    .setHTML(
        '<button> Call In</button><button>Call Out</button><p>MSIDN:1469xxxxxxx4</p>'
        )
    .addTo(map)
var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([2.1734,41.3851])
    .setHTML(
        '<button> Call In</button><button>Call Out</button><p>MSIDN:1469xxxxxxx5</p>'
        )    
        .addTo(map);





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

    // Set a UI indicator for dragging.
    canvas.style.cursor = 'grabbing';

    // Update the Point feature in `geojson` coordinates
    // and call setData to the source layer `point` on it.
    geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
    map.getSource('point').setData(geojson);
}

function setPointer(geojson1)
{
     map.getSource('point').setData(geojson1)
}

function onUp(e) {
    if (!isDragging) return
    var coords = e.lngLat

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
                        "coordinates": [-96.7970,32.7767]
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
    });
})
}