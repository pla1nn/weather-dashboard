import { Context } from 'components/App';
import s from './SignUpForm.module.css';
import { useContext } from 'react';

export const SignUpForm = ({ onClose }) => {
  const context = useContext(Context);
  console.log('context', context);

  return (
    <div className={s.overlay}>
      <div className={s.formContainer}>
        <button className={s.closeBtn} type="button" onClick={onClose}>
          ×
        </button>
        <h2 className={s.title}>Sign up</h2>
        <form className={s.form}>
          <label className={s.text}>
            Username
            <input
              className={s.placeholder}
              type="text"
              placeholder="Username"
              required
            />
          </label>
          <label className={s.text}>
            E-Mail
            <input
              className={s.placeholder}
              type="email"
              placeholder="E-Mail"
              required
            />
          </label>
          <label className={s.text}>
            Password
            <input
              className={s.placeholder}
              type="password"
              placeholder="Password"
              required
            />
          </label>
          <button type="submit" className={s.submitBtn}>
            Sign up
          </button>
        </form>
        <p className={s.loginText}>
          Already have an account? <span> Log In</span>
        </p>
      </div>
    </div>
  );
};
