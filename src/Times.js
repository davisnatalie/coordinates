// import useFetch from "./hooks/useFetch";
// import Place from "./Place";
import React, { useEffect } from 'react';
import useAxios from './hooks/useAxios';

function Times({info, isLoading, latLng}) {   

  const [setUrl, data, loading, setLoading, error] = useAxios()

  useEffect(() => {
    setUrl(`https://api.sunrisesunset.io/json?lat=${latLng.Lat}&lng=${latLng.Lng}`)
    setLoading(true)
  }, [])

  if(isLoading && !info){
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
            <td class="tg-lqy6">Sunrise:</td> 
            <td class="tg-baqh">{data.results.sunrise}</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Sunset:</td> 
            <td class="tg-baqh">{data.results.sunset}</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Dawn:</td> 
            <td class="tg-baqh">{data.results.dawn}</td>
          </tr>
          <tr>
            <td class="tg-lqy6">Dusk:</td>
            <td class="tg-baqh">{data.results.dusk}</td>
             
          </tr>
          <tr>
            <td class="tg-lqy6">Golden Hour:</td> 
            <td class="tg-baqh">{data.results.golden_hour}</td>
          </tr>
        </tbody>
      </table>
      </h4>
      :
      <p>loading...</p>
    }
    
  </div>
);
}

export default Times;
