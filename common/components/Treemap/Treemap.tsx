import { useState } from 'react';
import { TextField } from '@material-ui/core';

import { Chart } from '../Chart/Chart';
import * as handlers from '../../utils/changeHandlers';

export default function Treemap() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(320);
  const [json, setJson] = useState({
    series: [
      {
        data: [
          { x: 'Cherries', y: 15.3 },
          { x: 'Not Cherries', y: 5.2 },
          { x: 'Call Mark Cherries', y: 20 },
          { x: 'Test', y: 13.3 },
          { x: 'Test Again', y: 14 },
          { x: 'Apples', y: 43.2 },
          { x: 'Mapples', y: 25 },
          { x: 'Pears', y: 7 },
          { x: 'Potatoes', y: 25 },
          { x: 'Grapes', y: 33 },
          { x: 'Lettuce', y: 15 },
          { x: 'Test', y: 24 },
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
            type="treemap"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'treemap',
                stacked: false,
                toolbar: {
                  show: false,
                },
                width: width,
                height: height,
              },
              legend: {
                show: false,
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
