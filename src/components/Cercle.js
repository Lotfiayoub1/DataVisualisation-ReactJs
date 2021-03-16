import React from "react";

import { Pie } from "react-chartjs-2";
import "./Cercle.css";

function Cercle() {
  return (
    <div className="Cercle">
      <Pie
        data={{
          labels: ["React", "Angular", "Spring", "AndroidStudio"],
          datasets: [
            {
              label: "tooto",
              data: [12, 19, 3, 5],
              backgroundColor: [
                "rgba(255, 99, 132)",
                "rgba(54, 162, 235)",
                "rgba(255, 206, 86)",
                "rgba(75, 192, 192)",
              ],
            },
            // {
            //   label: "tata",
            //   data: [12, 19, 3, 5],
            //   backgroundColor: "green",
            // },
            // {
            //   label: "titi",
            //   data: [12, 19, 3, 5],
            //   backgroundColor: "blue",
            // },
            // {
            //   label: "test",
            //   data: [2, 10, 3, 1],
            //   backgroundColor: "orange",
            // },
          ],
        }}
        height={400}
        width={400}
      />
    </div>
  );
}

export default Cercle;
