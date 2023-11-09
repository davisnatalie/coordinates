import React, { useEffect } from 'react';
import useAxios from './hooks/useAxios';

function Local({ldata, lLoading, latLng}) {   

  const [setUrl, data, loading, setLoading, error] = useAxios()

  useEffect(() => {
    setUrl(`https://timeapi.io/api/Time/current/coordinate?latitude=${latLng.Lat}&longitude=${latLng.Lng}`)
    setLoading(true)
  }, [])

    // This only displays between searching and getting back either data or error
    if(loading && !data){
        return <h1>Loading...</h1>
    }

    // This displays if you search for an incorrect place/term
    if(error){
        return <h1>An error has occured</h1>
    }

return (
  <div>
    {
      data && !loading ?
      <h3>
        {data.year}  
      </h3>
      :
      <p>loading...</p>
    }
    
  </div>
);
}

export default Local;
