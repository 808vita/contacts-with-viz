import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "react-query";

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

  const {
    isLoading,
    error,
    data: countriesData,
  } = useQuery("countryWiseData", () =>
    fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
  );

  if (isLoading) return <h2>'Loading...'</h2>;

  if (error) return <h2>{"An error has occurred"}</h2>;

  // console.log(countriesData, "data");

  return (
    <div>
      <MapContainer center={[20, 77]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {countriesData.map((country: any) => (
          // map through markers data and use the below jsx to place markers and popup data
          <Marker
            key={country?.country}
            position={[country?.countryInfo?.lat, country?.countryInfo?.long]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <div>
                <img
                  src={country?.countryInfo?.flag}
                  onLoad={(event) =>
                    //@ts-ignore
                    (event.target.style.display = "inline-block")
                  }
                />
                <p>Country:{country?.country}</p>
                <p>Total Active:{country?.active}</p>
                <p>Recovered:{country?.recovered}</p>
                <p>Death:{country?.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
