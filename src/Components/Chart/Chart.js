import ChartBar from '../ChartBar/ChartBar';
import './Chart.css';

const Chart= (props) => {
    const dataValue = props.dataPoints.map(data => data.value);
    const maximumValue = Math.max(...dataValue);

    return (
        <div className="chart">
            {props.dataPoints.map((data) =>(
                <ChartBar 
                    Key= {data.id}
                    Value= {data.value}
                    maxValue= {maximumValue}
                    label= {data.label}
                />
            ))}
        </div>
    )
}

export default Chart;