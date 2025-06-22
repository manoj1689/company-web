"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const AIIndustryChart = () => {
  const labels = ["Initial", "Mid", "Final"];

  const data = {
    labels,
    datasets: [
      {
        label: "Overall Efficiency Gain",
        data: [19.6, 47.5, 77.5],
        borderColor: "#8b5cf6", // violet
        backgroundColor: "#c4b5fd", // light violet
        tension: 0.5, // Smooth curve
        fill: false,
        pointRadius: 6,
        pointBackgroundColor: "#8b5cf6",
        pointBorderColor: "#fff",
        pointHoverRadius: 8,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.parsed.y}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value: number) => `${value}%`,
        },
        title: {
          display: true,
          text: "Efficiency (%)",
          font: {
            size: 14,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Project Phase",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default AIIndustryChart;
