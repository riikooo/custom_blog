import React from 'react';
import 'bulma/css/bulma.css';
import '../index.css';
import { TextBox } from './Box';
// import { List } from 'react-native-paper';
import { useNavigate } from 'react-router-dom';

export function Main() {
    const navigate = useNavigate();

    const handleButtonClickBlog = () => {
      navigate('/blog');
    };
    const handleButtonClickAbout = () => {
      navigate('/about');
    };
  return (
    <div className='main-contets'>
      <div className='main-contet'>
        <div className='main-contets-button'>
          <h2>5555</h2>
          <p>erreer</p>
          <button onClick={handleButtonClickBlog}>⭐️NEW BLOG⭐️</button>
          <button onClick={handleButtonClickAbout}>⭐️GGG GGGG⭐️</button>
        </div>
        <div className='main-contets-youtube'>
          ooo
        </div>
      </div>
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
    </div>
  )}