import React, { Component, useState } from "react";
import Chart from "react-apexcharts";


export default function App({ children, state: initialState }) {
    const [state, setState] = useState(initialState);
    return (
      <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="900"
            />
          </div>
        </div>
      </div>
      </>
    );
  }



//   var options = {
//     series: [
//     {
//       name: "High - 2013",
//       data: [28, 29, 33, 36, 32, 32, 33]
//     }
//   ],
//     chart: {
//     height: 450,
//     type: 'line',
//     dropShadow: {
//       enabled: false,
//       color: '#000',
//       top: 18,
//       left: 7,
//       blur: 10,
//       opacity: 0.2
//     },
//     toolbar: {
//       show: false
//     }
//   },
//   // colors: ['#77B6EA', '#545454'],
//   dataLabels: {
//     enabled: true,
//   },
//   stroke: {
//     curve: 'smooth'
//   },
//   title: {
//     text: 'Metrics',
//     align: 'left'
//   },
//   grid: {
//     borderColor: '#e7e7e7',
//     row: {
//       // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//       opacity: 0.5
//     },
//   },
//   markers: {
//     size: 1
//   },
//   xaxis: {
//     categories: [],
//     title: {
//       text: ''
//     }
//   },

//   legend: {
//     position: 'bottom',
//     horizontalAlign: 'left',
//     // floating: true,
//     // offsetY: -25,
//     offsetX: -5
//   }
//   };