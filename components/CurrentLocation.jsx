import axios from "axios";
import { useEffect, useState } from "react";

const CurrentLocation = props => {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [data, setData] = useState({});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }
    useEffect(() => {
        if(lon && lat){
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=ce7164686f3c8c841f3a72a3ef7ae469`)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
        }}, [lon, lat])
    return (
        <div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <h1 className="location-name">{data.name}</h1>
                    </div>
                    <div className="temp">
                        {data.main ? <h1 className="temp-num">{data.main.temp}°F</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].description}</p> : null}
                    </div>
                </div>
                <div className="sun">
                    <div>
                    {data.sys ? <p><p className="sunrise">Sunrise:</p> {
                        (new Date(data.sys.sunrise * 1000).toLocaleTimeString())
                        }</p> : null}
                    </div>
                    <div>
                        {data.sys ? <p><p className="sunset">Sunset:</p>  {
                        (new Date(data.sys.sunset * 1000).toLocaleTimeString())
                        }</p> : null}
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className="bold">{data.main.feels_like}°F</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ?<p className="bold">{data.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentLocation;