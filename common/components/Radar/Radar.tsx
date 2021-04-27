import { useState } from 'react';
import { TextField } from '@material-ui/core';

import { Chart } from '../Chart/Chart';
import * as handlers from '../../utils/changeHandlers';

export default function Radar() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(420);
  const [json, setJson] = useState({
    series: [
      { name: 'Series 1', data: [15.3, 12, 42, 23, 12] },
      { name: 'Series 2', data: [5.2, 15, 33, 45, 24] },
      { name: 'Series 3', data: [20, 69, 43, 12, 34] },
      { name: 'Series 4', data: [13.3, 24, 37, 22, 11] },
      { name: 'Series 5', data: [43.2, 27, 35, 14, 12] },
    ],
    categories: [
      'Cherries',
      'Not Cherries',
      'Call Mark Cherries',
      'Apples',
      'Pears',
    ],
  });

  const series = json.series;
  const categories = json.categories;

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
            type="radar"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'radar',
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
                categories: categories,
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
