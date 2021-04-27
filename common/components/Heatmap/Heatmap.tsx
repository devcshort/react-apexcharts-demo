import { useState } from 'react';
import { TextField } from '@material-ui/core';

import { Chart } from '../Chart/Chart';
import * as handlers from '../../utils/changeHandlers';

export default function Heatmap() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(320);
  const [json, setJson] = useState({
    series: [
      {
        name: 'Cherries',
        data: [
          { x: 10, y: 15.3 },
          { x: 40, y: 5.2 },
          { x: 35, y: 20 },
          { x: 20, y: 13.3 },
        ],
      },
      {
        name: 'Not Cherries',
        data: [
          { x: 20, y: 14 },
          { x: 10, y: 43.2 },
          { x: 32, y: 25 },
          { x: 5, y: 7 },
        ],
      },
      {
        name: 'Call Mark Cherries',
        data: [
          { x: 5, y: 25 },
          { x: 69, y: 33 },
          { x: 22, y: 15 },
          { x: 34, y: 24 },
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
            type="heatmap"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'heatmap',
                stacked: false,
                toolbar: {
                  show: false,
                },
                width: width,
                height: height,
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
