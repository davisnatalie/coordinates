// import useFetch from "./hooks/useFetch";
// import Place from "./Place";
import React, { useState, useEffect } from 'react';
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
      <h3>
        Sunrise: {data.results.sunrise}
        <br><br />
        Sunset: {data.results.sunset}
        <br><br />
        Dawn: {data.results.dawn}
        <br><br />
        Dusk: {data.results.dusk}
        <br><br />
        Golden Hour: {data.results.golden_hour}
      </h3>
      :
      <p>loading...</p>
    }
    
  </div>
);
}

export default Times;
