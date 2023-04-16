import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import ErrorInfoBox from "../noContactInfo/ErrorInfoBox";
/**
 *
 * @returns JSX.Element
 *
 * line chart component
 */
const LineChartComponent: () => JSX.Element = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const {
    isLoading,
    error,
    data: dateWiseData,
  } = useQuery("dateWise", () =>
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
      (res) => res.json()
    )
  );

  if (isLoading)
    return (
      <h5 className="text-2xl p-5 mt-5 mb-5 border bg-violet-100">
        Loading chart...
      </h5>
    );

  if (error) {
    return (
      <ErrorInfoBox>
        <h5 className="text-2xl">
          An error occured! Please refresh page & try again.
        </h5>
      </ErrorInfoBox>
    );
  }

  console.log(dateWiseData, "data");
  const dates = Object.keys(dateWiseData?.cases).slice(-50);

  const activeCases = Object.values(dateWiseData?.cases).slice(-50);

  console.log(dates, "dates");
  console.log(typeof dates[0], dates[0]);
  console.log(activeCases, "activeCases");

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Active Cases",
        data: activeCases,
        borderColor: "rgb(235, 162, 53)",
        backgroundColor: "rgba(235, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />;
    </div>
  );
};

export default LineChartComponent;

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Recent Active Cases Trend",
    },
  },
};




