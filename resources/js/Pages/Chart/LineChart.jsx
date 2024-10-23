import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
const LineChart = ({ chartData }) => {
  return (
    <>
      <div className="w-96">
        <Line data={chartData} />
      </div>
    </>
  );
};

export default LineChart