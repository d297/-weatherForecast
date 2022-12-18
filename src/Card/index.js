import React, { memo, useContext } from 'react';
import { GlobalContext } from '../App';
import '../App.css';
import { useWeather } from '../Hooks/useWeather';
/*  

    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    0178827167af7ad208836d65b48f6b56
*/
export const Card = memo(({ city }) => {
    const { dispatch } = useContext(GlobalContext);
    const handleOnDelete = () => {
        dispatch({
            type: 'DELETE_CITY',
            payload: city
        })
    };
    const handleOnEdit = () => {
        dispatch({
            type: 'EDIT_CITY',
            payload: city
        })
    };
    const data = useWeather(city);
    console.log(data);
    if (!data) return null;
    const { name, weather, main } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;
    return (
        <div className="Card">
            <div className='ActionButtonWrapper'>
                <button className='ActionButton' onClick={handleOnEdit}>
                    edit
                </button>
                <button className='ActionButton' onClick={handleOnDelete}>
                    X
                </button>
            </div>

            <div className='MainInfo'>
                <img className='icon' alt="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                <div className='Title'>
                    {name}
                </div>
                <div className='Description'>
                    {description}
                </div>
                <div className='Temperature'>
                    {temp.toFixed()}
                </div>
            </div>
            <div className='Information'>
                <div>
                    Humidity: {humidity}
                </div>
                <div>
                    Feels like: {feels_like}
                </div>
            </div>
        </div>
    );

});

