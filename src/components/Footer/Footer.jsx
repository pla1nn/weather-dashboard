import s from './Footer.module.css';

import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import whatsapp from '../../assets/whatsapp.png';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer__logoBox}>
        <img className={s.footer__logo} src={logo} alt="24/7 forecast logo" />
      </div>

      <div className={s.footer__content}>
        <address className={s.address}>
          <h4 className={s.address__title}>Address</h4>
          <p className={s.address__text}>
            Svobody str. 35
            <br />
            Kyiv
            <br />
            Ukraine
          </p>
        </address>

        <div className={s.contact}>
          <h4 className={s.contact__title}>Contact us</h4>
          <ul className={s.contact__list}>
            <li>
              <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                <img
                  src={instagram}
                  alt="Instagram"
                  className={s.contact__img}
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                <img src={facebook} alt="Facebook" className={s.contact__img} />
              </a>
            </li>
            <li>
              <a href="https://www.whatsapp.com/" target="_blank" aria-label="WhatsApp">
                <img src={whatsapp} alt="WhatsApp" className={s.contact__img} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
