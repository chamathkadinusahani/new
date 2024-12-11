import React from 'react';

import WelcomeSection from './WelcomeSection';

import styles from './WelcomePage.module.css';

function WelcomePage() {
  return (
    <div className={styles.welcomePage}>
     
      <main className={styles.mainContent}>
        <WelcomeSection />
      </main>
     
    </div>
  );
}

export default WelcomePage;