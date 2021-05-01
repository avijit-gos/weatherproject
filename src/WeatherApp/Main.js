import React,{useState, useEffect, useRef} from 'react';
import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import HourWeather from './HourWeather';
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let temp = [];
let timeArr = [];
const hourlyTemp = []
function Main() {
    const [location, setLocation] = useState('');
    const inputRef = useRef(null);
    const [weatherInfo, setWeatherInfo] = useState({}); //this useState object is for home page.(curreWeather.js)
    const [dailyWeather, setDailyWeather] = useState([]);//this useState object is for Daily weather Update page.(DailyWeather.js)
    const [dailyDay, setDailyDay] = useState([]);

    const [times, setTimes] = useState([])
    const [hourlyWeather, setHourlyWeather] = useState([]); //this useState object is for ourly weather update....

    //creating input focus ref...
    useEffect(()=> {
        inputRef.current.focus();
    }, [])

    //Input event Handler...
    const changeInput = (e) => {
        setLocation(e.target.value)
    }

    //if the user pressed the Enter key then only the API call will make otherwise nothing happen..
    const keyPressed = (e) => {
        if(e.key === "Enter") {
            axios.get(`httpS://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f81a225131b81dba99d6c46cc0023d66`)
            .then(res => {
                let lon = res.data.coord.lon;
                let lat = res.data.coord.lat;
                setWeatherInfo(res.data);
                setLocation('');

                //calling second API for daily weather Update...
                axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=f81a225131b81dba99d6c46cc0023d66`)
                .then (dailyRes => {
                    setDailyWeather(dailyRes.data.daily);
                    let data = dailyRes.data.daily;
                    for(let i=0; i<data.length; i++) {
                        let date = new Date(data[i].dt*1000);
                        let dayNum = date.getDay();
                        temp.push(days[dayNum])
                    };
                    setDailyDay(temp);
                    //console.log(dailyRes.data.hourly);
                    let timeData = dailyRes.data.hourly.slice(0, 23)
                    for(let i=0; i<timeData.length; i++) {
                        let time = new Date(timeData[i].dt*1000);
                        let timeNum = time.getHours();
                        timeArr.push(timeNum);
                        setTimes(timeArr)
                    };
                    let tempH = timeData.slice(0, 23);
                    for(let j=0; j<tempH.length; j++) {
                        hourlyTemp.push(Math.round(tempH[j].temp - 273.15))
                    }
                    setHourlyWeather(hourlyTemp)
                })
            })
            .catch(err => {
                alert(err);
                setLocation('');
            })
        }
    };
    return (
    <div className="container">
        <Nav />
        <div className="input-field">
            <input type="text" placeholder="search" className="input" value={location} onChange={changeInput} ref={inputRef} onKeyPress={keyPressed} />
            <FaSearch className="search-icon" />
        </div>
           {
            weatherInfo.main !== undefined ? <Switch>
                  <Route exact path='/' render={()=> <CurrentWeather weatherInfo={weatherInfo} />} />

                  <Route path="/daily" render={()=> <DailyWeather dailyWeather={dailyWeather} dailyDay={dailyDay} key={dailyWeather.index} />} />

                  <Route path="/hour" render={() => <HourWeather hourlyWeather={hourlyWeather} times={times} />} />
               </Switch> : null
           }
    </div>
    )
}

export default Main
