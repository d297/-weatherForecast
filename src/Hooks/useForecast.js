import {useEffect, useState} from "react";
import { API_key } from '../settings';

export const useForecast = (coords) => {
    
    const [data, setData] = useState(null);
    console.log(`coords ${coords}`);
    useEffect(() => {
        if(coords){
            const {lat, lon} = coords;
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)            
            .then((res) => res.json())
            .then(setData);
        }
    }, [coords]);

    return data;
}