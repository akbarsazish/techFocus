// BarChartJS.js

import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  return (
    <>
      <div className="w-96">
        <Bar data={chartData} />
      </div>
    </>
  );
};

export default BarChart;