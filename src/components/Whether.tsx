import { useState } from 'react';
import 'bulma/css/bulma.css';
import '../index.scss';

export function Whether() {
  const [city, setCity] = useState("");
  const getWeather = (e:any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=6b53fd2ed5d941f8989134646241404 &q=London&aqi=no").then(res => console.log(res))
  }
  return (
    <div>
      <form>
        <input type='text' name='city' placeholder='都市のなまえ' onChange={e => setCity(e.target.value)}/>
        <button type='submit' onClick={getWeather}>の天気を知りたい</button>
      </form>
    </div>
  )}