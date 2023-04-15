import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
/**
 *
 * @returns JSX.Element
 *
 * map component
 */

interface MarkersDataInterface {
  markerPosArray: [number, number];
  markerIconUrl: string;
}

const MapComponent: () => JSX.Element = () => {
  // mock markers data
  // to be modified later
  const markersData: MarkersDataInterface[] = [
    {
      markerPosArray: [51.505, -0.09],
      markerIconUrl: markerIconPng,
    },
    {
      markerPosArray: [51.52, -0.09],
      markerIconUrl:
        "https://avatars.githubusercontent.com/u/97225946?s=48&v=4",
    },
  ];

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markersData.map((country) => (
          // map through markers data and use the below jsx to place markers and popup data
          <Marker
            position={country.markerPosArray}
            icon={
              new Icon({
                iconUrl: country.markerIconUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.{" "}
              {country.markerIconUrl}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
