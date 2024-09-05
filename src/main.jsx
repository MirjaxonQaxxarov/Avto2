import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'
import Card from './card/Card.jsx'
import House from './house/House.jsx'
import Sms from './sms/Sms'
import Sms2 from './sms/Sms2'
import Heart from './heart/Heart.jsx'
import Plus from './plus/Plus.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/card' element={<Card/>}/>
      <Route path='/house' element={<House/>}/>
      <Route path='/sms' element={<Sms/>}/>
      <Route path='/sms2' element={<Sms2/>}/>
      <Route path='*' element={<App/>}/>
      <Route path='/heart' element={<Heart/>}/>
      <Route path='/plus' element={<Plus/>}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
)
