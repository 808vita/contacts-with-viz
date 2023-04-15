import React from "react";
import LineChartComponent from "../components/lineChart/LineChartComponent";
import MapComponent from "../components/mapComponent/MapComponent";
/**
 *
 * @returns JSX.Element
 *
 * Dashboard page
 *
 * display chart & map
 */
const Dashboard: () => JSX.Element = () => {
  return (
    <div>
      Dashboard
      <LineChartComponent />
      <MapComponent />
    </div>
  );
};

export default Dashboard;
