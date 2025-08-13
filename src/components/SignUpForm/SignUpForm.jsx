import s from './SignUpForm.module.css';
import { useState } from 'react';

export const SignUpForm = ({ onClose, setUsername }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const userData = { username: usernameInput, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    // обновляем username в App, чтобы сразу показывалось в Header
    setUsername(usernameInput);

    onClose(); // закрываем форму
  };

  return (
    <div className={s.overlay}>
      <div className={s.formContainer}>
        <button className={s.closeBtn} type="button" onClick={onClose}>
          ×
        </button>
        <h2 className={s.title}>Sign up</h2>

        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.text}>
            Username
            <input
              className={s.placeholder}
              type="text"
              placeholder="Username"
              required
              value={usernameInput}
              onChange={e => setUsernameInput(e.target.value)}
            />
          </label>
          <label className={s.text}>
            E-Mail
            <input
              className={s.placeholder}
              type="email"
              placeholder="E-Mail"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className={s.text}>
            Password
            <input
              className={s.placeholder}
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
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
