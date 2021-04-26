import { useState } from 'react';
import { TextField } from '@material-ui/core';

import { Chart } from '../Chart/Chart';

export default function Pie() {
  const [width, setWidth] = useState(420);
  const [height, setHeight] = useState(420);
  const [json, setJson] = useState({
    cherries: 30,
    apples: 40,
    pears: 35,
    strawberries: 50,
  });

  const labels = Object.keys(json);
  const series = Object.values(json);

  function handleNumberChange(setValue) {
    return function changeHandler(e) {
      const value = parseInt(e.target.value);

      if (!isNaN(value)) {
        setValue(e.target.value);
      }
    };
  }

  function handleJsonChange(setValue) {
    return function changeHandler(e) {
      try {
        const newValue = JSON.parse(e.target.value);
        setValue(newValue);
      } catch (err) {}
    };
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{ flex: 1 }}>
          <TextField
            type="number"
            onChange={handleNumberChange(setHeight)}
            value={height}
            label="Height (px)"
            style={{ display: 'block', marginBottom: '8px' }}
          />

          <TextField
            type="number"
            onChange={handleNumberChange(setWidth)}
            value={width}
            label="Width (px)"
            style={{ display: 'block', marginBottom: '8px' }}
          />

          <TextField
            defaultValue={JSON.stringify(json, null, 4)}
            onChange={handleJsonChange(setJson)}
            rowsMax={50}
            multiline
            fullWidth
          />
        </div>

        <div
          style={{
            flex: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Chart
            type="pie"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'pie',
                stacked: false,
                toolbar: {
                  show: false,
                },
                width: width,
                height: height,
              },
              stroke: {
                curve: 'straight',
              },
              dataLabels: {
                enabled: true,
              },
              legend: {
                formatter(name, opts) {
                  return `${name} - ${opts.w.globals.seriesPercent[
                    opts.seriesIndex
                  ]
                    .map((el) => el.toFixed(1) + '%')
                    .join(',')}`;
                },
                labels: {
                  colors: '#fff',
                },
              },
              theme: {
                palette: 'palette1',
              },
              labels: labels,
            }}
            width={width}
            height={height}
            series={series}
          />
        </div>
      </div>
    </div>
  );
}
