import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function Infobox( {info} ){

    let HOT_URL = "https://images.unsplash.com/photo-1592901663916-ac389a0c2a31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let COLD_URL = "https://images.unsplash.com/photo-1587640542932-064a5291cfbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let RAIN_URL = "https://media.istockphoto.com/id/2170866761/photo/woman-under-umbrella-rainy-weather.jpg?s=612x612&w=0&k=20&c=WKgb5qfmmAHWeZPzZLDtd-rSfHzSFXS33E1GqAxgy68=";

    return (
        <div className="InfoBox">
            <div className='cardContaier'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                            <p>Temprature = {info.temp}&deg;C </p>
                            <p>Feel Like = {info.feels_like}&deg;C</p>
                            <p>Humidity =  {info.humidity} </p>
                            <p>Min Temp = {info.tempMin}&deg;C  </p>
                            <p>Max Temp = {info.tempMax}&deg;C </p>
                            <p>The Weather can be described as <u><i>{info.weather}</i></u> and feels like = {info.feels_like}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}