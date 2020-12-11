import React, { createRef } from 'react';
import mapboxgl from 'mapbox-gl';

export class Map extends React.Component {
    map = null;
    mapContainer = createRef();
    
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoidGVya2F4b3N0IiwiYSI6ImNraTNoOHg5bjIwdzUydGx0MnU2em56aDEifQ.QBQQ1kqh2wLhSd2KAsBlgg';

        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [-74.5, 40],
            zoom: 9 
        });
    }
  
    componentWillUnmount() {
        this.map.remove();
    }
  
    render() {
        return <div className="map-wrapper" >
            <div data-testid="map" className="map" ref={this.mapContainer} ></div>
        </div>
    }
}