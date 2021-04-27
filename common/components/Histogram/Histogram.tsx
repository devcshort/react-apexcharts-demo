import { useState } from 'react';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';

import { Chart } from '../Chart/Chart';

export default function Histogram() {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isDashed, setIsDashed] = useState(false);
  const [dashWidth, setDashWidth] = useState(15);
  const [lineWidth, setLineWidth] = useState(8);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(320);
  const [json, setJson] = useState({
    categories: [
      '10:45am',
      '10:50am',
      '10:55am',
      '11:00am',
      '11:05am',
      '11:10am',
    ],
    series: [
      {
        name: 'FPM',
        data: [10, 40, 35, 50, 22, 100],
      },
    ],
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
                checked={isHorizontal}
                onChange={handleBoolean(setIsHorizontal)}
                name="dashed"
                color="primary"
              />
            }
            label="Horizontal?"
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
            type="bar"
            options={{
              chart: {
                id: 'apexchart-demo',
                type: 'bar',
                stacked: false,
                toolbar: {
                  show: false,
                },
                width: width,
                height: height,
              },
              stroke: {
                dashArray: isDashed ? [dashWidth] : [0],
                width: lineWidth,
              },
              dataLabels: {
                enabled: true,
              },
              plotOptions: {
                bar: {
                  horizontal: isHorizontal,
                },
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
                tickAmount: 4,
                labels: {
                  style: {
                    colors: '#fff',
                  },
                  offsetX: -5,
                  offsetY: -5,
                },
              },
              xaxis: {
                categories: labels,
                axisBorder: {
                  show: false,
                },
                labels: {
                  style: {
                    colors: '#fff',
                  },
                },
                axisTicks: {
                  show: false,
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
