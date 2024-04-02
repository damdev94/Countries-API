import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import countryReducer from "./redux/reducers/index.js"
import { getCountry } from './redux/actions/country.action.js';

const store = configureStore ( {
    reducer: countryReducer,
    devTools: true,
})

store.dispatch(getCountry())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    
);

