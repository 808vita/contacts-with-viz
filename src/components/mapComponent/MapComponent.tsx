import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "react-query";
import ErrorInfoBox from "../noContactInfo/ErrorInfoBox";


interface CountryInfo {
  lat: number;
  long: number;
  flag: string;
}

interface CountryData {
  country: string;
  active: string;
  recovered: string;
  deaths: string;
  countryInfo: CountryInfo;
}

/**
 *
 * @returns JSX.Element
 *
 * map component
 */
const MapComponent: () => JSX.Element = () => {
  const {
    isLoading,
    error,
    data: countriesData,
  } = useQuery("countryWiseData", () =>
    fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
  );

  if (isLoading)
    return (
      <h5 className="text-2xl font-thin p-5 mt-5 border bg-violet-100">
        Loading map...
      </h5>
    );

  if (error) {
    return (
      <ErrorInfoBox>
        <h5 className="text-2xl font-thin">
          An error occured! Please refresh page & try again.
        </h5>
      </ErrorInfoBox>
    );
  }

  // console.log(countriesData, "data");

  return (
    <div className="mb-5">
      <MapContainer center={[20, 77]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {countriesData.map((country: CountryData) => (
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
                <p className="text-lg">
                  Country:
                  <span className="font-semibold">{country?.country}</span>
                </p>
                <p className="text-lg">
                  Total Active:
                  <span className="font-semibold">{country?.active}</span>
                </p>
                <p className="text-lg">
                  Recovered:
                  <span className="font-semibold">{country?.recovered}</span>
                </p>
                <p className="text-lg">
                  Death:<span className="font-semibold">{country?.deaths}</span>
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
