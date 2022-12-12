import React, {useState} from 'react';
import '../App.css';


export const Input = ({setCitiesList}) => {  
    const [inputValue, setInputValue] = useState('empty');
       
    const handleOnClick =  () => {
        setCitiesList((currentArray) => [...currentArray, inputValue]);
    }
    const handleOnChange = (event) =>{
        setInputValue(event.target.value);
    }
    return(     
        <div className="InputWrap">
            <input className='Input' onChange={handleOnChange}  name="" />
            <button className="Button" onClick={handleOnClick}>+</button>
        </div>
    )
};
  
