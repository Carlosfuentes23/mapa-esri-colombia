require([
   "esri/config",
   "esri/Map", 
   "esri/views/MapView",
   "esri/Graphic",
   "esri/layers/GraphicsLayer",
   "esri/layers/FeatureLayer",
   "esri/widgets/Home"
], 

function (esriConfig, Map, MapView, Graphic, GraphicsLayer, FeatureLayer, 
   Home) {
      
   esriConfig.apiKey = "AAPK7591daeb76d64e44990358dcac82bf97a2T0BXRvYuvK4uKykv9xzu2zZBbKPpu1SW9SA4ldxqY1kOe5UF2JyWQCH74LJehq";
   const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
   });

   const view = new MapView({
      map: map,
      center: [-74.051239, 4.673729], // Longitude, latitude
      zoom: 15, // Zoom level
      container: "viewDiv" // Div element
   });

   const graphicsLayer = new GraphicsLayer();
   map.add(graphicsLayer);
   const popupTemplate = {
      title: "Edificio Esri colombia SAS",
      content: "calle 90 # 13-40"
   }
   const attributes = {
      Name: "Edificio Esri colombia SAS",
      Description: ""
   }
   const point = { //Create a point
      type: "point",
      longitude: -74.051239,
      latitude: 4.673729
   };

   const simpleMarkerSymbol = {
      type: "simple-marker",
      color: [226, 119, 40],  // Orange
      outline: {
      color: [255, 255, 255], // White
      width: 1
      }
   };
  
   const pointGraphic = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol,
      attributes: attributes,
      popupTemplate: popupTemplate
   });

   
   graphicsLayer.add(pointGraphic);

   const homeWidget = new Home({
      view: view
   });
   view.ui.add(homeWidget, "top-left");

   

   });  