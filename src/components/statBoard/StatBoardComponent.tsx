import React from "react";
import ErrorInfoBox from "../noContactInfo/ErrorInfoBox";
import { useQuery } from "react-query";
import StatCardComponent from "./statCard/StatCardComponent";
import BackToTopComponent from "../backToTop/BackToTopComponent";

const statCardOrder = [
  "todayCases",
  "todayRecovered",
  "todayDeaths",
  "cases",
  "recovered",
  "deaths",
  "tests",
  "active",
  "critical",
  "affectedCountries",
  "population",
  "casesPerOneMillion",
  "recoveredPerOneMillion",
  "deathsPerOneMillion",
  "testsPerOneMillion",
  "activePerOneMillion",
  "criticalPerOneMillion",
];

/**
 * 
 * @returns jsx
 * component for rendering stat info cards 
 */
const StatBoardComponent = () => {
  const {
    isLoading,
    error,
    data: statBoardData,
  } = useQuery("statBoardData", () =>
    fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json())
  );

  if (isLoading)
    return (
      <h5 className="text-2xl font-thin p-5 mt-5 border bg-violet-100">
        Loading stat board...
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

  console.log(statBoardData, "statBoardData");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-2 w-full relative">
      {statCardOrder.map((key) => (
        <StatCardComponent key={key} heading={key} data={statBoardData[key]} />
      ))}
      <BackToTopComponent />
    </div>
  );
};

export default StatBoardComponent;
