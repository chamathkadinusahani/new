import React from 'react';

import styles from './TeacherLogin.module.css';

function LoginForm() {
  return (
    <section className={styles.loginFormSection}>
      <h2 className={styles.loginTitle}>TEACHER LOGIN</h2>

      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="adminId" className={styles.inputLabel}>USERNAME</label>
          <input type="text" id="adminId" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input type="password" id="password" className={styles.inputField} />
        </div>
        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>REMEMBER ME</label>
        </div>
        <button type="submit" className={styles.signInButton}>SIGN IN</button>
      </form>

      
    </section>
  );
}

export default LoginForm;
