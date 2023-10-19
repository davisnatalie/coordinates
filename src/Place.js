
import React, { useState } from 'react';
import useFetch from "./hooks/useFetch";

function Location({loading, data, place, error}) {

    // This should display before any place is searched for
    if(!place){
        return <h1>Search for a place</h1>
    }

    // This only displays between searching and getting back either data or error
    if(loading && !data){
        return <h1>Loading...</h1>
    }

    // This displays if you search for an incorrect place/term
    if(error){
        return <h1>An error has occured</h1>
    }

    // This displays various coordinates of the searched place
    
    let Lat = data.results[0].geometry.location.lat
    let Lng = data.results[0].geometry.location.lng

    return (  
        <>
            <h1>{data.results[0].formatted_address}</h1>

            <br />

            <div>
                Latitude: {Lat}
                <br></br>
                Longitude: {Lng}
                <br></br>
            </div>

        </>
    );
}

export default Location;