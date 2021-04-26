import dynamic from 'next/dynamic';

export type ChartTypes =
  | 'line'
  | 'area'
  | 'bar'
  | 'histogram'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'treemap'
  | 'boxPlot'
  | 'candlestick'
  | 'radar'
  | 'polarArea'
  | 'rangeBar';

export const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default Chart;
