import React, { useEffect } from 'react';
import useAxios from './hooks/useAxios';

function Local({ldata, lLoading, latLng}) {   

  const [setUrl, data, loading, setLoading, error] = useAxios()

  useEffect(() => {
    setUrl(`https://timeapi.io/api/Time/current/coordinate?latitude=${latLng.Lat}&longitude=${latLng.Lng}`)
    setLoading(true)
  }, [])

  if(lLoading && !ldata){
      return <h1>Loading...</h1>
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
