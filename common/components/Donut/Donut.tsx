import { useState } from 'react';
import { TextField } from '@material-ui/core';

import { Chart } from '../Chart/Chart';
import * as handlers from '../../utils/changeHandlers';

export default function Donut() {
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
            type="donut"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'donut',
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
