import s from './SignUpForm.module.css';

export const SignUpForm = ({ onClose }) => {
  return (
    <div className={s.overlay}>
      <div className={s.formContainer}>
        <button className={s.closeBtn} type="button" onClick={onClose}>
          ×
        </button>
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
