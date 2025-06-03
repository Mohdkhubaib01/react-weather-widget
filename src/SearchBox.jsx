import "./SearchBox.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "2e741a213f33fafae8389081d45d28ca";

    let getWeatherInfo = async () =>{
        try{
          let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        
        }
        console.log(result)
        return result;   
        }catch(err){
            throw err;
        }
    }
let handleChange = (evt) =>{
    setCity(evt.target.value);
}

let hadnleSubmit = async (ev) =>{
    try{
    ev.preventDefault();
    console.log(city)
    setCity("")
    let newInfo = await getWeatherInfo()
    updateInfo(newInfo)
    }catch(err){
        setError(true);
    }
}
    return(
        <>
        <div className='SearchBox'>
            <form action="/" onSubmit={hadnleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} /><br /><br />
                <Button variant="contained"  type='submit'> Search </Button> 
                {error && <h3 style={{color:"red"}}>No such place Exists!</h3>}          
            </form>
        </div>
        </>
    )
}