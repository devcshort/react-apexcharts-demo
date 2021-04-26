const defaultFormat = ['pie', 'donut', 'radialBar', 'polarArea'];
const formatWithData = [
  'scatter',
  'bubble',
  'heatmap',
  'boxPlot',
  'candlestick',
  'radar',
  'rangeBar',
  'line',
  'area',
  'bar',
];

export function formatterSwitch(type: string, data: any) {
  if (defaultFormat.includes(type)) {
    return Object.values(data);
  } else if (formatWithData.includes(type)) {
    return Object.keys(data).map((key) => ({ name: key, data: data[key] }));
  }

  return Object.values(data);
}

export function getFormatter(type: string) {
  if (defaultFormat.includes(type)) {
    return 'default';
  } else if (formatWithData.includes(type)) {
    return 'format with data';
  }
}
