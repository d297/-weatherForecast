import React from 'react';
import { useCitiesList } from './Hooks/useCitiesList';
import Home from './Home';
import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SingleCity } from './SingleCity/index';
import Page2 from './Page2';

export const GlobalContext = React.createContext();

function App() {
  
  const [state, dispatch] = useCitiesList();
  // const { inputValue, citiesList, editingCity } = state;
  const { citiesList } = state;
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {
        /*
          <Link to="/home" >Home</Link>
          <Link to="/page" >SingleCity</Link>
          <Link to="/page2" >Page 2</Link>
        */
      }

      <div className='Main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:city" element={<SingleCity />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="pageTWO" element={<Navigate to="/page2" replace />} />
        </Routes>
      </div>

    </GlobalContext.Provider>
  );
}


export default App;
