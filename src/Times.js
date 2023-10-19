import useFetch from "./hooks/useFetch";
import Place from "./Place";

function Times(Lat, Lng) {
<Place Lat={Lat} Lng={Lng} />
  const [data] = useFetch(`https://api.sunrisesunset.io/json?lat=${Lat}&lng=${Lng}`);

  return (
    <div>
      {data && data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  );
}

export default Times;