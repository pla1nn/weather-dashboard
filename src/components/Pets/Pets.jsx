import { useEffect, useState, useRef } from 'react';
import s from './Pets.module.css';
import fetchNews from '../../services/newsApi';

export default function Pets() {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const listRef = useRef(null);

  useEffect(() => {
    fetchNews('animals OR pets OR cats OR dogs OR wildlife', 20, 'en')
      .then(data => setNews(data))
      .catch(err => console.warn('Новини не завантажено:', err));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleCount]);

  return (
    <section className={s.newsSection}>
      <h2 className={s.title}>Interacting with our pets</h2>
      <ul
        className={s.list}
        ref={listRef}
        style={{ maxHeight: '600px', overflowY: 'auto' }}
      >
        {news.slice(0, visibleCount).map((item, idx) => (
          <li key={idx} className={s.card}>
            {item.urlToImage && (
              <img src={item.urlToImage} alt={item.title} className={s.image} />
            )}
            <p className={s.caption}>{item.title}</p>
          </li>
        ))}
      </ul>
      {visibleCount < news.length && (
        <button className={s.button} type="button" onClick={handleLoadMore}>
          See more
        </button>
      )}
    </section>
  );
}
