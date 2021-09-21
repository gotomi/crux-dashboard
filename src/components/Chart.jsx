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
