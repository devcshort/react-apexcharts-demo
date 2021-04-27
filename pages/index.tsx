import Head from 'next/head';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

import { ChartTypes } from '../common/components/Chart/Chart';
import Pie from '../common/components/Pie/Pie';
import Donut from '../common/components/Donut/Donut';
import RadialBar from '../common/components/RadialBar/RadialBar';
import PolarArea from '../common/components/PolarArea/PolarArea';
import Line from '../common/components/Line/Line';
import Area from '../common/components/Area/Area';
import Bar from '../common/components/Bar/Bar';
import Scatter from '../common/components/Scatter/Scatter';
import Histogram from '../common/components/Histogram/Histogram';
import Bubble from '../common/components/Bubble/Bubble';
import Heatmap from '../common/components/Heatmap/Heatmap';
import Treemap from '../common/components/Treemap/Treemap';
import BoxPlot from '../common/components/BoxPlot/BoxPlot';
import Candlestick from '../common/components/Candlestick/Candlestick';
import Radar from '../common/components/Radar/Radar';
import RangeBar from '../common/components/RangeBar/RangeBar';

export default function Home() {
  const [chartType, setChartType] = useState<ChartTypes>('pie');

  function handleChange(setValue) {
    return function changeHandler(e) {
      setValue(e.target.value);
    };
  }

  return (
    <div>
      <Head>
        <title>React Apex Charts Demo</title>
      </Head>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>
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
        </div>

        {chartType === 'pie' && <Pie />}
        {chartType === 'donut' && <Donut />}
        {chartType === 'radialBar' && <RadialBar />}
        {chartType === 'polarArea' && <PolarArea />}
        {chartType === 'line' && <Line />}
        {chartType === 'area' && <Area />}
        {chartType === 'bar' && <Bar />}
        {chartType === 'scatter' && <Scatter />}
        {chartType === 'histogram' && <Histogram />}
        {chartType === 'bubble' && <Bubble />}
        {chartType === 'heatmap' && <Heatmap />}
        {chartType === 'treemap' && <Treemap />}
        {chartType === 'boxPlot' && <BoxPlot />}
        {chartType === 'candlestick' && <Candlestick />}
        {chartType === 'radar' && <Radar />}
        {chartType === 'rangeBar' && <RangeBar />}
      </div>
    </div>
  );
}
