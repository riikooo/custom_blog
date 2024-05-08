import { useState } from 'react';
import 'bulma/css/bulma.css';
import '../index.scss';
import WhetherResults from './WhetherResults';

export function Whether() {
  const [city, setCity] = useState("");
  const [results,setResults] = useState<ResultStateType>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });
  type ResultStateType = {
    country:string;
    cityName:string;
    temperature:string;
    conditionText:string;
    icon:string;
  }
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (city.match(/^[\w@\.-]+$/)) {
    //   // バリデーションエラーをユーザーに通知する
    //   alert('無効な文字が含まれています。');
    //   return;
    // }
    fetch(`https://api.weatherapi.com/v1/current.json?key=6b53fd2ed5d941f8989134646241404 &q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      })})
      .catch(err => alert("エラーが発生しました！ページをリロードして再トライしてみて！"))
    }
  return (
    <div className='weather-contents'>
      <form onSubmit={getWeather}>
        <h2>今日の天気</h2>
        <input type='text' name='city' placeholder='都市のなまえ' onChange={e => setCity(e.target.value)}/>
        <button type='submit'>の天気を知りたい</button>
      </form>
      <WhetherResults results={results}/>
    </div>
  )}