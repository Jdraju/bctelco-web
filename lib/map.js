// https://www.mapbox.com/mapbox-gl-js/api/

//import animatedCircle from '../lib/animatedCircle'

export default function(node) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHVhcHVyY2VsbCIsImEiOiJjaWdyZDQ0dnQwMjAzdThtMTM3MDd0bDQ0In0.5N1zODR0er7xZmGh0wM7gw'
  

  var map = new mapboxgl.Map({
    container: node, // container id
    style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
    center: [-74.50, 40], // starting position
    zoom: 2 // starting zoom
})

  //animatedCircle(map)

  map.on('load', function () {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    //Start of Points
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.03238901390978, 38.913188059745586],
                        "message": "TEST",
                    },
                    "properties": {
                        "title": "14691234569",
                        "icon": "marker",
                        "iconSize": [100],
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.414, 37.776]
                    },
                    "properties": {
                        "title": "14691234568",
                        "icon": "marker"
                    }},
                    {
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [-96.7970,32.7749]
                      },
                      "properties": {
                          "title": "14691234567",
                          "icon": "marker"
                      }

                    },
                      {
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [2.1734,41.3851]
                      },
                      "properties": {
                          "title": "349091234567",
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
            "text-anchor": "top",
            //"text-color":"white",
        }
    });
});


}
