import React from 'react';
import styles from './UserTypeCard.module.css';
import { Link } from 'react-router-dom';

function UserTypeCard({ type, imageSrc }) {
  return (
    <div className={styles.userTypeCard}>
      <h4 className={styles.userType}>{type}</h4>
      <img src={imageSrc} alt={`${type} icon`} className={styles.userTypeImage} />
      <Link to="/login">
      <button className={styles.loginButton}>LOGIN</button>
      </Link>

      buttonText:<Link to="/login"> "As a school" </Link>
    </div>
  );
}

export default UserTypeCard;

