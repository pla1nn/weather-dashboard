import { useState } from 'react';
import s from './MobileMenu.module.css';
import { FaCircleUser } from 'react-icons/fa6';

export const MobileMenu = ({ onOpenSignUp }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenuClick = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <>
      <button
        className={s.mobileMenuButton}
        type="button"
        onClick={toggleMenuClick}
      >
        Menu
        {isVisible ? (
          <svg
            className={s.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
          >
            <path
              d="M1.24219 9.24268L5.48483 5.00004L1.24219 0.757395"
              stroke="black"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M1 1L5.24264 5.24264L9.48528 1"
              stroke="black"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {isVisible && (
        <div className={s.mobileMenuContainer}>
          <ul className={s.menuList}>
            <li className={s.menuItem}>Who we are</li>
            <li className={s.menuItem}>Contacts</li>
            <li className={s.menuItem}>Menu</li>
          </ul>

          <div className={s.mobileUser}>
            <button className={s.button} type="button" onClick={onOpenSignUp}>
              Sign Up
            </button>
            <FaCircleUser className={s.iconUser} />
          </div>
        </div>
      )}
    </>
  );
};
