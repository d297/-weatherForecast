import React from 'react';
import { Input } from './Input';
import { useCitiesList } from './Hooks/useCitiesList';
import { CardList } from './CardList';
import './App.css';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  // const { inputValue, citiesList, editingCity } = state;
  const { citiesList } = state;
  return (
    <div className="Main">
      <GlobalContext.Provider value={{state, dispatch}}>
        <Input />
        <CardList citiesList={citiesList} dispatch={dispatch} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
