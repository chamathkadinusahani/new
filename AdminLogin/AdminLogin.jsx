import React from 'react';
import styles from './AdminLogin.module.css';
import LoginForm from './LoginForm';

function AdminLogin() {
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

export default AdminLogin;
