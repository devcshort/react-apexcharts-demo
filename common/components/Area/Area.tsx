import { useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Switch,
  FormControlLabel,
} from '@material-ui/core';

import { Chart, CurveTypes } from '../Chart/Chart';

export default function Area() {
  const [curve, setCurve] = useState<CurveTypes>('straight');
  const [isDashed, setIsDashed] = useState(false);
  const [dashWidth, setDashWidth] = useState(15);
  const [lineWidth, setLineWidth] = useState(8);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(320);
  const [json, setJson] = useState({
    series: [
      {
        name: 'Cherries',
        data: [10, 40, 35, 50],
      },
      {
        name: 'Not Cherries',
        data: [20, 10, 32, 5],
      },
      {
        name: 'Call Mark Cherries',
        data: [5, 69, 22, 34],
      },
    ],
    categories: ['10:45am', '10:50am', '10:55am', '11:00am'],
  });

  const labels = json.categories;
  const series = json.series;

  function handleNumberChange(setValue) {
    return function changeHandler(e) {
      const value = parseInt(e.target.value);

      if (!isNaN(value)) {
        setValue(e.target.value);
      }
    };
  }

  function handleChange(setValue) {
    return function changeHandler(e) {
      setValue(e.target.value);
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

  function handleBoolean(toggleValue) {
    return function changeHandler(e) {
      toggleValue((prev) => !prev);
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
          <FormControl>
            <InputLabel>Curve</InputLabel>
            <Select
              style={{ minWidth: 180, display: 'block', marginBottom: '8px' }}
              value={curve}
              onChange={handleChange(setCurve)}
            >
              <MenuItem value="straight">Straight</MenuItem>
              <MenuItem value="smooth">Smooth</MenuItem>
              <MenuItem value="stepline">Stepline</MenuItem>
            </Select>
          </FormControl>

          <TextField
            type="number"
            onChange={handleNumberChange(setLineWidth)}
            value={lineWidth}
            label="Line Width (px)"
            style={{ display: 'block', marginBottom: '8px' }}
          />

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

          <FormControlLabel
            control={
              <Switch
                checked={isDashed}
                onChange={handleBoolean(setIsDashed)}
                name="dashed"
                color="primary"
              />
            }
            label="Dashed?"
          />

          {isDashed && (
            <TextField
              type="number"
              onChange={handleNumberChange(setDashWidth)}
              value={dashWidth}
              label="Dash Width (px)"
              style={{ display: 'block', marginBottom: '8px' }}
            />
          )}

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
            type="area"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'area',
                stacked: false,
                toolbar: {
                  show: false,
                },
                width: width,
                height: height,
              },
              stroke: {
                curve: curve,
                dashArray: isDashed ? [dashWidth] : [0],
                width: lineWidth,
              },
              dataLabels: {
                enabled: true,
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
                categories: labels,
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
