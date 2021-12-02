import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // to transform datapoints from objects to numbers (will return an array of numbers)
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // spred operator will pull out the values of the array so thats its 12 values
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
