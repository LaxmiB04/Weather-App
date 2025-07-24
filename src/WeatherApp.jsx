import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
         city:"Delhi",
        feelslike: 43.54,
        temp: 36.54,
        temp_max:36.54,
        temp_min: 36.54,
        humidity: 55,
        weather:"haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );

}