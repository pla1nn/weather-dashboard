import { useState } from 'react';
import s from './Hero.module.css';
import searchIcon from './imgs/search.png';

export const Hero = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleChange = e => setCity(e.target.value);

  const handleClick = () => {
    onSearch(city.trim());
  };

  const handleKeyDown = e => {
    if (e.key = 'Enter') {
        handleClick()
    }
  }

  return (
    <div>
      <div className={s.inputBox}>
        <input
          type="text"
          placeholder="Search location..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={city}
          className={s.input}
        />
        <button type="button" onClick={handleClick} className={s.searchBtn}>
          <img className={s.searchImg} src={searchIcon} alt="search" />
        </button>
      </div>
    </div>
  );
};
