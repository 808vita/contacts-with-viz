import LineChartComponent from "../components/lineChart/LineChartComponent";
import MapComponent from "../components/mapComponent/MapComponent";
import StatBoardComponent from "../components/statBoard/StatBoardComponent";

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
      <LineChartComponent />
      <MapComponent />
      <StatBoardComponent />
    </div>
  );
};

export default Dashboard;
