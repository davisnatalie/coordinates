
import React, { useEffect } from 'react';
// import useFetch from "./hooks/useFetch";

function Location({loading, data, place, error, setLatLng}) {

    useEffect(() => {
        if(!loading && data) {
            let Lat = data.results[0].geometry.location.lat
            let Lng = data.results[0].geometry.location.lng

            setLatLng({ Lat, Lng })
        }
    }, [])

    // This should display before any place is searched for
    if(!place){
        return <h2>Please enter a location to find the local weather.</h2>
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