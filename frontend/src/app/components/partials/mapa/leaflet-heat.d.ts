declare module 'leaflet' {
    interface HeatLayer {
      addTo(map: L.Map): this;
    }
  
    function heatLayer(latlngs: L.LatLngExpression[], options?: L.HeatLayerOptions): HeatLayer;
  }
  