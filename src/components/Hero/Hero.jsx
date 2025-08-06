import { useState } from 'react';
import { format } from 'date-fns';
import { IoIosSearch } from 'react-icons/io';
import s from './Hero.module.css';

export const Hero = ({ onSearch, date = new Date() }) => {
  const [city, setCity] = useState('');

  const handleChange = e => setCity(e.target.value);

  const handleSearch = () => {
    const trimmed = city.trim();
    if (trimmed) {
      onSearch(trimmed);
      setCity('')
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const line1 = format(date, 'MMMM yyyy');
  const line2 = format(date, 'EEEE, do');

  return (
    <section className={s.hero__section}>
      <h1 className={s.hero__title}>Weather dashboard</h1>
      <div className={s.hero__thumb}>
        <div className={s.line__mobile}></div>
        <div className={s.hero__box}>
          <p className={s.hero__text}>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>
          <div className={s.line}></div>
          <p className={s.hero__data}>
            {line1} <br />
            {line2}
          </p>
        </div>
      </div>

      <form onSubmit={e => e.preventDefault()} className={s.hero__form}>
        <input
          type="text"
          placeholder="Search location..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={city}
          className={s.hero__input}
          autoComplete="off"
          autoFocus
          name="city"
        />
        <button type="button" onClick={handleSearch} className={s.hero__btn}>
          <IoIosSearch className={s.hero__icon} />
        </button>
      </form>
    </section>
  );
};
