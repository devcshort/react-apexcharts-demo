import Head from 'next/head';
import { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';

import { Chart, ChartTypes } from '../common/components/Chart/Chart';

export default function Home() {
  const [chartType, setChartType] = useState<ChartTypes>('pie');
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

  function handleChange(setValue) {
    return function changeHandler(e) {
      setValue(e.target.value);
    };
  }

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
      <Head>
        <title>Apex Charts Demo</title>
      </Head>

      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{ flex: 1 }}>
          <FormControl>
            <InputLabel>Chart Type</InputLabel>
            <Select
              style={{ minWidth: 180, display: 'block', marginBottom: '8px' }}
              value={chartType}
              onChange={handleChange(setChartType)}
            >
              <MenuItem value="line">Line</MenuItem>
              <MenuItem value="area">Area</MenuItem>
              <MenuItem value="bar">Bar</MenuItem>
              <MenuItem value="histogram">Histogram</MenuItem>
              <MenuItem value="pie">Pie</MenuItem>
              <MenuItem value="donut">Donut</MenuItem>
              <MenuItem value="radialBar">Radial Bar</MenuItem>
              <MenuItem value="scatter">Scatter</MenuItem>
              <MenuItem value="bubble">Bubble</MenuItem>
              <MenuItem value="heatmap">Heatmap</MenuItem>
              <MenuItem value="treemap">Treemap</MenuItem>
              <MenuItem value="boxPlot">Box Plot</MenuItem>
              <MenuItem value="candlestick">Candlestick</MenuItem>
              <MenuItem value="radar">Radar</MenuItem>
              <MenuItem value="polarArea">Polar Area</MenuItem>
              <MenuItem value="rangeBar">Range Bar</MenuItem>
            </Select>
          </FormControl>

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
            style={{ display: 'block' }}
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
            marginTop: '48px',
          }}
        >
          <Chart
            type={chartType}
            options={{
              chart: {
                id: 'apexchart-demo',
                type: chartType,
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
