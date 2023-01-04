import React, {useRef, useContext} from 'react';
import '../App.css';
// import { useCitiesList } from '../Hooks/useCitiesList';
import { GlobalContext } from '../App';

export const Input = () => {  

    const {dispatch, state: {inputValue,editingCity}} = useContext(GlobalContext);


    const inputRef = useRef(null);
    const handleOnAdd =  () => {
        if(inputValue.length){
            dispatch({
                type: 'ADD_CITY',
                payload: inputValue
            });
            dispatch({
                type: 'RESET_INPUT_VALUE',
               
            });
            inputRef.current.focus();
            inputRef.current.value = "";
        }
    }
    const handleOnDone =  () => {
        if(inputValue.length){
            dispatch({
                type: 'EDIT_CITY_DONE',
                payload: inputValue
            });
            dispatch({
                type: 'RESET_INPUT_VALUE',
               
            });
            inputRef.current.focus();
            inputRef.current.value = "";
        }
    }
    const handleOnChange = (event) =>{
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: event.target.value
        });

    }
    return(     
        <div className="InputWrap">
            <input className='Input' onChange={handleOnChange} ref={inputRef} value={inputValue} name="" />
            {
                editingCity ? 
                <button className="Button" onClick={handleOnDone}>DONE</button>
                :
                <button className="Button" onClick={handleOnAdd}>+</button>
            }
           
            
        </div>
    )
};
  
