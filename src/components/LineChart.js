import React from "react";
import "./Line.css";
import { Line } from "react-chartjs-2";

function LineChart() {
  return (
    <div className="lineChart">
      <Line
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of vote",
              data: [12, 19, 3, 5, 2, 3],

              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={900}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default LineChart;
