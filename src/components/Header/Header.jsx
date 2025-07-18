import { FaCircleUser } from 'react-icons/fa6';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="/assets/logo.png" alt="logo" />
      <ul className={s.headerList}>
        <li className={s.headerItem}>Who we are</li>
        <li className={s.headerItem}>Contacts</li>
        <li className={s.headerItem}>Menu</li>
      </ul>
      <div>
        <button className={s.button} type="button">
          Sign Up
        </button>
        <FaCircleUser className={s.iconUser} />
      </div>
    </header>
  );
};
