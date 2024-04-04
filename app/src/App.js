import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Country from './pages/country';
import Header from './components/header';

export const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState('light')

  const useTheme = () => useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <BrowserRouter>
          <Header toggleTheme={toggleTheme}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country/:countryName' element={<Country />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
