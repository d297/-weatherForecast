import React, { memo, useContext, useEffect } from 'react';
import { GlobalContext } from '../App';
import '../App.css';
import { useWeather } from '../Hooks/useWeather';
import { Link, useNavigate, useLocation } from 'react-router-dom';
/*  

    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    0178827167af7ad208836d65b48f6b56


    https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}

*/
const CardNoMemo = ({ city, setCityCoord }) => {
    const { dispatch } = useContext(GlobalContext);
    const navigate = useNavigate();
    const pathName = useLocation().pathname;
    const goBack = () => navigate('/');
    const handleOnDelete = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: 'DELETE_CITY',
            payload: city
        });

    };
    const handleOnEdit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: 'EDIT_CITY',
            payload: city
        });
        goBack();
    };
    const handleOnLinkClick = () => {
        dispatch({
            type: 'EDIT_CITY_DONE',
            payload: city
        });
        goBack();
    };
    const data = useWeather(city);
    useEffect(()=>{
        if(data && data.coord.lat && data.coord.lon && setCityCoord){
            setCityCoord({
                lat: data.coord.lat,
                lon: data.coord.lon
            })
        }
    },[data, setCityCoord])
    if(data === null){
        return (
            <div className='Card'>
                <div className='ActionButtonWrapper'>
                    <button className='ActionButton' onClick={handleOnEdit}>
                        edit
                    </button>
                    <button className='ActionButton' onClick={handleOnDelete}>
                        X
                    </button>
                </div>
                <div className='MainInfo'>
                    <div className='Title'>
                        {city}
                    </div>
                    <div className='Description'>
                        Not Found!
                    </div>
                </div>
            </div>
        )
    }
    if (!data) return null;
    const { name, weather, main } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;
    if (pathName === "/") {
        return <Link to={`/city/${city.toLowerCase()}`} onClick={handleOnLinkClick} className="Card">
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
        </Link>
    }
    return (
        <div className='Card'>
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
};

export const Card = memo(CardNoMemo);

