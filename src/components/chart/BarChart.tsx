import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions } from "chart.js";
import styles from "./BarChart.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Mock data for different time periods
const datasets = [
  {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    data: {
      datasets: [
        {
          label: "Dataset 1",
          data: [34, 8, 15, 16, 10, 36, 23, 22, 36],
          backgroundColor: "#3B82F6",
          borderRadius: 0,
        },
        {
          label: "Dataset 2",
          data: [28, 27, 25, 26, 2, 48, 37, 10, 33],
          backgroundColor: "#22C55E",
          borderRadius: 0,
        },
        {
          label: "Dataset 3",
          data: [12, 11, 8, 10, 7, 8, 18, 19, 9],
          backgroundColor: "#EF4444",
          borderRadius: 0,
        },
      ],
    },
  },
  // Add more datasets for different periods if needed
  {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: {
      datasets: [
        {
          label: "Dataset 1",
          data: [25, 18, 22, 19, 15, 28, 31, 26, 29],
          backgroundColor: "#3B82F6",
          borderRadius: 0,
        },
        {
          label: "Dataset 2",
          data: [32, 29, 35, 31, 22, 38, 42, 35, 38],
          backgroundColor: "#22C55E",
          borderRadius: 0,
        },
        {
          label: "Dataset 3",
          data: [8, 12, 15, 11, 9, 14, 16, 13, 12],
          backgroundColor: "#EF4444",
          borderRadius: 0,
        },
      ],
    },
  },
];

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#555",
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#555",
        callback: (value: string | number) => `${value}m`,
      },
    },
  },
  datasets: {
    bar: {
      barThickness: 4,
    },
  },
};

// Navigation Arrow Component
const NavigationArrow: React.FC<{
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}> = ({ direction, onClick, disabled = false }) => {
  return (
    <button
      className={`${styles.navButton} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "left" ? (
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M6 12L10 8L6 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
};

const BarChart: React.FC = () => {
  const [currentDatasetIndex, setCurrentDatasetIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentDatasetIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentDatasetIndex((prev) => Math.min(datasets.length - 1, prev + 1));
  };

  const currentDataset = datasets[currentDatasetIndex];
  const chartData = {
    labels: currentDataset.labels,
    ...currentDataset.data,
  };

  return (
    <div className={styles.chartWrapper}>
      <NavigationArrow
        direction="left"
        onClick={handlePrevious}
        disabled={currentDatasetIndex === 0}
      />
      
      <div className={styles.chartContainer}>
        <Bar data={chartData} options={options} />
      </div>
      
      <NavigationArrow
        direction="right"
        onClick={handleNext}
        disabled={currentDatasetIndex === datasets.length - 1}
      />
    </div>
  );
};

export default BarChart;