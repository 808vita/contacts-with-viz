import React from "react";
import LineChartComponent from "../components/lineChart/LineChartComponent";
import MapComponent from "../components/mapComponent/MapComponent";
import { useQuery } from "react-query";
/**
 *
 * @returns JSX.Element
 *
 * Dashboard page
 *
 * display chart & map
 */
const Dashboard: () => JSX.Element = () => {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
  // );

  // if (isLoading) return <h2>'Loading...'</h2>;

  // if (error) return <h2>'An error has occurred: ' + error.message</h2>;

  // console.log(data, "Dashboard");

  return (
    <div>
      Dashboard
      <LineChartComponent />
      <MapComponent />
    </div>
  );
};

export default Dashboard;
