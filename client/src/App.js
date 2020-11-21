import { Chart } from "react-google-charts"
import React, { useEffect, useState } from "react";

import './App.css';

function App() {

  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000",{
      method: "get",
      headers: {"Content-Type": "application/json"}
    }).then(response=> response.json())
    .then(data=> {
        setDetails(data)
    })
  },[])

  return (
        <>
         <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo">Scatter Chart</a>
            </div>
          </nav>
          <div className="App">
                <Chart
                  width={'1000px'}
                  height={'600px'}
                  chartType="ScatterChart"
                  loader={<div>Loading Chart</div>}
                  data={details}
                  options={{
                    title: 'Area vs Population comparison',
                    hAxis: { title: 'Area(sq.ft)', minValue: 0, maxValue: 15 },
                    vAxis: { title: 'Population(census)', minValue: 0, maxValue: 15 },
                    legend: 'none',
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
          </div>
        </>
        
  );
}

export default App;
