import { useState } from 'react';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';

import { Chart } from '../Chart/Chart';
import * as handlers from '../../utils/changeHandlers';

export default function RangeBar() {
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(320);
  const [json, setJson] = useState({
    series: [
      {
        data: [
          { x: 'Cherries', y: [15.3, 12] },
          { x: 'Not Cherries', y: [5.2, 15] },
          { x: 'Call Mark Cherries', y: [20, 69] },
          { x: 'Apples', y: [13.3, 24] },
          { x: 'Pears', y: [43.2, 27] },
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

          <FormControlLabel
            control={
              <Switch
                checked={isHorizontal}
                onChange={handlers.handleBoolean(setIsHorizontal)}
                name="dashed"
                color="primary"
              />
            }
            label="Horizontal?"
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
            type="rangeBar"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'rangeBar',
                stacked: false,
                toolbar: {
                  show: false,
                },
                width: width,
                height: height,
              },
              plotOptions: {
                bar: {
                  horizontal: isHorizontal,
                },
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
