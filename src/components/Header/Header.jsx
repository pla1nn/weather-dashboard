import { FaCircleUser } from 'react-icons/fa6';
import s from './Header.module.css';
import logo from '../../assets/logo.png';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Header = ({ onOpenSignUp, username }) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="logo" />
      <ul className={s.headerList}>
        <li className={s.headerItem}>Who we are</li>
        <li className={s.headerItem}>Contacts</li>
        <li className={s.headerItem}>Menu</li>
      </ul>
      <div className={s.userContainer}>
        <button className={s.button} type="button" onClick={onOpenSignUp}>
          Sign Up
        </button>
        <FaCircleUser className={s.iconUser} />
        {username && <span className={s.username}>{username}</span>}
      </div>
      <MobileMenu onOpenSignUp={onOpenSignUp} username={username} />
    </header>
  );
};
