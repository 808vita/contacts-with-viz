import React from "react";

const statCardName: any = {
  todayCases: "Today Cases",
  todayRecovered: "Today Recovered",
  todayDeaths: "Today Deaths",
  cases: "Total Cases",
  recovered: "Total Recovered",
  deaths: "Total Deaths",
  tests: "Total Tests",
  active: "Total Active",
  critical: "Total Crtical",
  affectedCountries: "Affected Countries",
  population: "Population",
  casesPerOneMillion: "Cases/Million",
  recoveredPerOneMillion: "Recovered/Million",
  deathsPerOneMillion: "Deaths/Million",
  testsPerOneMillion: "Tests/Million",
  activePerOneMillion: "Active/Million",
  criticalPerOneMillion: "Crtical/Million",
};
const StatCardComponent = ({ heading, data }: any) => {
  return (
    <div className="flex flex-col p-10 m-5 justify-center items-center bg-violet-200 hover:bg-violet-100">
      <h5 className="text-3xl font-thin">{statCardName?.[heading]}</h5>
      <h5 className="text-2xl mt-5 font-light">{data}</h5>
    </div>
  );
};

export default StatCardComponent;
