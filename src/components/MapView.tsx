import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map(state => (
        <Marker key={state.name} position={[state.latitude, state.longitude]}>
          <Popup>
            <strong>{state.name}</strong><br />
            Active Cases: {state.activeCases}<br />
            Total Cases: {state.totalCases}<br />
            Recovered: {state.recovered}<br />
            Deaths: {state.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
