import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ByCity = props => {
    const [data, setData] = useState({});
    const { city } = useParams();
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ce7164686f3c8c841f3a72a3ef7ae469`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
    }, [city])
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

export default ByCity;