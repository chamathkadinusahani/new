import React from 'react';
import styles from './TeacherLogin.module.css';
import LoginForm from './LoginForm';

function TeacherLogin() {
  return (
    <div className={styles.adminLogin}>
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <LoginForm />
          <div className={styles.loginImage}>
          <div className={styles.purpleOverlay}></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TeacherLogin;
