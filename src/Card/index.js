import React from 'react';
import '../App.css';

export const Card = ({city}) => {

        return(
        <div className="Card">
           <div className='MainInfo'>
                <img className='icon' alt="icon" src="http://openweathermap.org/img/wn/10d@2x.png"/>
                <div className='Title'>
                    {city}
                </div>
                <div className='Description'>
                    Cloudy
                </div>
                <div className='Temperature'>
                    20
                </div>
           </div>
           <div className='Information'>
                <div>
                    Humidity: 15 
                </div>
                <div>
                    Feels like: 19
                </div>            
           </div>
        </div>
        );
      
};
  
