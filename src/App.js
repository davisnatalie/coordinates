import './App.css';
import React, { useState } from 'react';
import useAxios from './hooks/useAxios';
import Place from './Place';
import Times from './Times';
import Weather from './Weather';
import SearchInput from './SearchInput';
import Date from './Date';
import Local from './Local';

function App() {
  const [searchPlace, setSearchPlace] = useState("")
  const [place, setPlace] = useState("")
  const [latLng, setLatLng] = useState({ Lat: 0, Lng: 0})

  const [setUrl, data, loading, setLoading, error] = useAxios()

  function handleSubmit(e){
    e.preventDefault();

    setPlace(searchPlace)

    setUrl(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchPlace}&key=AIzaSyC_x8AZcb2YCH_ux2AU34nYFtPka3waB2A`)
    setLoading(true)

    // setTimeout(() => {
    //   console.log(`searchPlace: ${searchPlace}`)
    //   console.log(`place: ${place}`)
    // }, 5000)
  }
  return (
    <div className="App">
      <header>

        <Date />
        
        <SearchInput handleSubmit={handleSubmit} searchPlace={searchPlace} setSearchPlace={setSearchPlace}  />
      
        <Place loading={loading} data={data} place={place} error={error} setLatLng={setLatLng}/>

        {data && <Local ldata={data} lLoading={loading} latLng={latLng}/>}
        
        <div className="container">
        <div className="time">
          {data && <Times info={data} isLoading={loading} latLng={latLng}/>}
        </div>
        <div className="weather">
          {data && <Weather wdata={data} wLoading={loading} latLng={latLng}/>}
        </div>
        </div>

      </header>
    </div>
  );
}

export default App;
