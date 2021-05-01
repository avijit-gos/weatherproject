import React from 'react'
import { Line } from 'react-chartjs-2';
function HourWeather({times, hourlyWeather}) {
    const data = {
        labels: times,
        datasets: [
            {
               label: 'Per Hour weather forcast in °C',
               data: hourlyWeather,
               borderColor: ['rgba(235, 77, 75,0.2)'],
               backgroundColor: ['rgba(235, 77, 75,1.0)'],
               borderWidth: 3
            }
         ],
    }
    const legend = {
        display: true,
        position: "bottom",
        labels: {
            fontColor: "#323130",
            fontSize: 14
        }
    };
        
const options ={
    maintainAspectRatio: false	// Don't maintain w/h ratio
}
    return (
        <div className="line-graph">
            <Line data={data} legend={legend} options={options} />
        </div>
    )
}

export default HourWeather
