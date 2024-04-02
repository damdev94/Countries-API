import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/home'
import Country from './pages/country'
import Header from './components/header';

function App() {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
          
        <Route path='/country/:countryName' element={<Country />} /> 
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
