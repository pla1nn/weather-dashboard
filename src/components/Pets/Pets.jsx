import { useEffect, useState } from 'react';
import s from './Pets.module.css';
import fetchNews from '../../services/newsApi';

export default function Pets() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetchNews('pets OR animals OR dogs OR cats OR wildlife', 10, 'en')
      .then(setArticles)
      .catch(console.error);
  }, []);
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className={s.newsSection}>
      <h2 className={s.title}>Interacting with our pets</h2>
      <ul className={s.list}>
        {articles.slice(0, visibleCount).map((item, idx) => (
          <li key={idx} className={s.card}>
            {item.image && (
              <img src={item.image} alt={item.title} className={s.image} />
            )}
            <p className={s.caption}>{item.title}</p>
          </li>
        ))}
      </ul>
      {visibleCount < articles.length && (
        <button className={s.button} type="button" onClick={handleLoadMore}>
          See more
        </button>
      )}
    </section>
  );
}
