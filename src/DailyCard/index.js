import React from 'react';

import '../App.css';


export const DailyCard = ({dailyCard}) => {

    const {
        temp,
    } = dailyCard.main;

    const {
        main, 
        description,
        icon
    } = dailyCard.weather[0];

    const dt = dailyCard.dt;

    const currentDate = new Date(dt * 1000);
  
    
    return (
        <div className='DailyCard'>
            <div>
                {
                    currentDate.toString().split(" ")[0]
                }
            </div>
            <div>
                {
                    currentDate.toString().split(" ")[4].slice(0,5)
                }
            </div>
            <img className='icon' alt="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            
            <div className='DailyTemp'>
                {
                    temp.toFixed(0)
                }
            </div>
            <div className='DailyMain'>
                {
                    main
                }
            </div>
        </div>
    );
};


