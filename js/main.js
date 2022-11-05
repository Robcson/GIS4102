//function to start the Leaflet map
function createMap() {

    //Varibles needed for running the funcation
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a> | <a href="https://sounny.github.io/">Sounny Slitine</a>';
    
    var apitoken = 'pk.eyJ1Ijoicm9iY3NvbiIsImEiOiJjbGEzM2hhNjIwMGF3M3Bybm4yZDByZG42In0.UTc-u55j8y04HuoMI42KsQ' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles
    
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Styles
    
    
    //Variables for the basemap
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'robcson/cla33lnt9000414o02vfolij8', token: apitoken,  attribution: mbAttr} );

    
   
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 7, //zoom level
        layers:darkTerrain //default base
    });
    
    //Adding a draggable marker to the map
  var marker = new L.marker([31.00, -5], {
    draggable: 'true'
  });


  map.addLayer(marker);
};

//calling the funcation
$(document).ready(createMap);