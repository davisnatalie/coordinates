import React, { useEffect } from 'react';
import useAxios from './hooks/useAxios';

function Weather({wdata, wLoading, latLng}) {   

  const [setUrl, data, loading, setLoading, error] = useAxios()

  useEffect(() => {
    setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${latLng.Lat}&lon=${latLng.Lng}&appid=3c2627a8b05031758ddfb20318e36cd2`)
    setLoading(true)
  }, [])

  if(wLoading && !wdata){
      return <h1>Loading...</h1>
  }

return (
  <div>
    {
      data && !loading ?
      <h4>
      <table class="tg" align="center">
        <tbody>
          <tr>
            <td class="tg-lqy6">{data.weather[0].main}</td> 
            <td class="tg-baqh">{data.weather[0].description}</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Temp:</td> 
            <td class="tg-baqh">{data.main.temp}K</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Feels Like:</td> 
            <td class="tg-baqh">{data.main.feels_like}K</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Temp Min:</td>
            <td class="tg-baqh">{data.main.temp_min}K</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Temp Max:</td> 
            <td class="tg-baqh">{data.main.temp_max}K</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <button>Celsius</button> <button>Fahrenheit</button>
      </h4>
      :
      <p>loading...</p>
    }
    
  </div>
);
}

export default Weather;
