import './weather.css';

const Weather = ({weatherData}) => {

    return (
        <div className={'weather-card'}>
            <div className={'weather-card-title'}>{weatherData.name}, {weatherData.sys.country}</div>
            <div className={'weather-card-data'}>
                <div className={'weather-card-general-description'}>
                    <img className={'weather-card-icon'} src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={''}/>
                    <span className={'weather-card-temperatureTxt'}>{Math.floor(weatherData.main.temp)} &deg;C</span>
                    <span>{weatherData.weather[0].description}</span>
                </div>
                <div className={'weather-card-general-description align-left'}>
                    <span>Feels like: {Math.floor(weatherData.main.feels_like)} &deg;C</span>
                    <span>Min. temperature: {Math.floor(weatherData.main.temp_min)} &deg;C</span>
                    <span>Max. temperature: {Math.floor(weatherData.main.temp_max)} &deg;C</span>
                    <span>Humidity: {Math.floor(weatherData.main.humidity)} %</span>
                </div>
            </div>
        </div>
    );
}

export default Weather;