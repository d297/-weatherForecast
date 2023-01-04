import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Card } from '../Card';
import { useForecast } from '../Hooks/useForecast';

import '../App.css';
import { CardList } from '../CardList';
import { DailyCard } from '../DailyCard';

export const SingleCity = () => {
    const [cityCoord, setCityCoord] = useState(null);
    const { city } = useParams();
    const data = useForecast(cityCoord);
    return (
        <>
            <div className="SingleCityWrap">
                <Link to="/" className='GoBack'>Go Back</Link>
                <Card city={city} setCityCoord={setCityCoord} />
                {
                    data && 
                    <div className="DailyCards">
                        {
                            data && data.list.map((dailyCard) => 
                                <DailyCard dailyCard={dailyCard} key={dailyCard.dt}/>
                            )
                        }                    
                    </div>
                }
                    
                
            </div>
        </>
    );
};


