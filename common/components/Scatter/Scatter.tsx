import { useState } from 'react';
import { TextField } from '@material-ui/core';

import { Chart } from '../Chart/Chart';
import * as handlers from '../../utils/changeHandlers';

export default function Scatter() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(320);
  const [json, setJson] = useState({
    series: [
      {
        name: 'Cherries',
        data: [
          [10, 15.3],
          [40, 5.2],
          [35, 20],
          [20, 13.3],
        ],
      },
      {
        name: 'Not Cherries',
        data: [
          [20, 14],
          [10, 43.2],
          [32, 25],
          [5, 7],
        ],
      },
      {
        name: 'Call Mark Cherries',
        data: [
          [5, 25],
          [69, 33],
          [22, 15],
          [34, 24],
        ],
      },
    ],
  });

  const series = json.series;

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
            onBlur={handlers.handleNumberChange(setHeight)}
            defaultValue={height}
            label="Height (px)"
            style={{ display: 'block', marginBottom: '8px' }}
          />

          <TextField
            type="number"
            onBlur={handlers.handleNumberChange(setWidth)}
            defaultValue={width}
            label="Width (px)"
            style={{ display: 'block', marginBottom: '8px' }}
          />

          <TextField
            defaultValue={JSON.stringify(json, null, 4)}
            onBlur={handlers.handleJsonChange(setJson)}
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
            type="scatter"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'scatter',
                stacked: false,
                toolbar: {
                  show: false,
                },
                width: width,
                height: height,
              },
              dataLabels: {
                enabled: false,
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'],
                  opacity: 0.1,
                },
              },
              legend: {
                labels: {
                  colors: '#fff',
                },
              },
              tooltip: {
                theme: 'dark',
              },
              theme: {
                palette: 'palette1',
              },
              yaxis: {
                labels: {
                  style: {
                    colors: '#fff',
                  },
                },
              },
              xaxis: {
                labels: {
                  style: {
                    colors: '#fff',
                  },
                },
              },
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
