import React from 'react';
import ReactDOM from 'react-dom';
import Render from './WeatherApp/Main'
import {BrowserRouter} from 'react-router-dom';
import './WeatherApp/Style.css'

ReactDOM.render(
  <BrowserRouter>
    <Render />
  </BrowserRouter>,
  document.getElementById('root')
);