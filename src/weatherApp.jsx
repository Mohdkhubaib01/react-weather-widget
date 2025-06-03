import SearchBox from "./SearchBox"
import Infobox from "./infoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pratapgarh",
        feels_like: 34.55,
        humidity: 32,
        temp: 33.59,
        tempMax: 50.59,
        tempMin: 25.59,
        weather: "clear sky",
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Khubaib</h2>
            <SearchBox updateInfo={updateInfo} />
            <Infobox  info={weatherInfo} />
        </div>
    );
}