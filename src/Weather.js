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

return (
  <div>
    {
      data && !loading ?
      <h4>
        {/* <table className="table caption-top">
              <tbody>
                {weatherData.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>{data.title}</td>
                      <td>{data.titleData}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}
      <table class="tg" align="center">
        <tbody>
          <tr>
            <td class="tg-lqy6">{data.weather[0].main}</td> 
            <td class="tg-baqh">{data.weather[0].description}</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Temp:</td> 
            <td class="tg-baqh">{data.main.temp}</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Feels Like:</td> 
            <td class="tg-baqh">{data.main.feels_like}</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Temp Min:</td>
            <td class="tg-baqh">{data.main.temp_min}</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Temp Max:</td> 
            <td class="tg-baqh">{data.main.temp_max}</td>
          </tr>
        </tbody>
      </table>
      {/* <br></br>
      <button class="button" id="C">Celsius</button> <button class="button"  id="F">Fahrenheit</button> */}
      </h4>
      :
      <p>loading...</p>
    }
    
  </div>
);
}

export default Weather;
