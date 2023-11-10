import React, { useEffect, useState } from 'react';
import useAxios from './hooks/useAxios';

function Weather({wdata, wLoading, latLng}) {   

  const [setUrl, data, loading, setLoading, error] = useAxios()

  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${latLng.Lat}&lon=${latLng.Lng}&appid=3c2627a8b05031758ddfb20318e36cd2&units=metric`)
    setLoading(true)
  }, [])

  if(wLoading && !wdata){
      return <h1>Loading...</h1>
  }
      // This displays if you search for an incorrect place/term
      if(error){
        return <h1>An error has occured</h1>
    }
      // const weatherData = [{
      //     title: 'Temp:',
      //     titleData: data.main.temp,
      //   },
      //     {title: 'Feel',
      //     titleData: data.main.feels_like,
      //   },
      //     {title: 'Min:',
      //     titleData: data.main.temp_min,
      //   },
      //   {title: 'Max:',
      //   titleData: data.main.temp_max,
      // }]

      // console.log('weather:', weatherData)

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  const convertTemperature = (temp) => {
    if (isCelsius) {
      return ((temp - 32) * 5) / 9;
    } else {
      return (temp * 9) / 5 + 32;
    }
  };

return (
  <div>
    {
      data && !loading ?
      <h4>
      <table className="tg" align="center">
        <tbody>
          <tr>
            <td className="tg-lqy6">{data.weather[0].main}</td>
            <td className="tg-baqh2">{data.weather[0].description}</td>
          </tr>
          <tr>
            <td className="tg-lqy6">Temp:</td>
            <td className="tg-baqh">{convertTemperature(data.main.temp).toFixed(2)}</td>
          </tr>
          <tr>
            <td className="tg-lqy6">Feels Like:</td>
            <td className="tg-baqh">{convertTemperature(data.main.feels_like).toFixed(2)}</td>
          </tr>
          <tr>
            <td className="tg-lqy6">Temp Min:</td>
            <td className="tg-baqh">{convertTemperature(data.main.temp_min).toFixed(2)}</td>
          </tr>
          <tr>
            <td className="tg-lqy6">Temp Max:</td>
            <td className="tg-baqh">{convertTemperature(data.main.temp_max).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <button className="button" onClick={toggleTemperatureUnit}>
        {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </button>
      </h4>
      :
      <p>loading...</p>
    }
    
  </div>
);
}

export default Weather;
