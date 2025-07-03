import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";

import { Line } from "react-chartjs-2";
import { AppContext } from "../Context/AppContext";

// Register the Chart.js components you’ll use
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function BalanceChart() {
  const { chart } = useContext(AppContext);
  
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const data = {
    labels: daysInMonth.map((day) => `June ${day}`),
    datasets: [
      {
        label: "Revenue",
        data: [5000, 7000],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.3,
      },
      {
        label: "Expenses",
        data: [3000, 4000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
