import {useEffect, useState} from "react";
import { API_key } from '../settings';

export const useWeather = (city) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then((res) => res.json())
            .then((fetchedData) => {
                if(fetchedData && fetchedData.cod && fetchedData.cod === '404'){
                    throw new Error('CITY_NOT_FOUND');
                } else{
                    setData(fetchedData);
                }
                
            })
            .catch((err) => {
                console.log("ERROR - ", err)
            })
    }, [city]);

    return data;
}