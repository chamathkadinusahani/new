import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import styles from './WelcomeSection.module.css';

function WelcomeSection() {
  const navigate = useNavigate(); // Allows you to navigate programmatically

  // User types and their corresponding login paths and images
  const userTypes = [
    {
      type: 'STUDENT',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f4d64313a2664716c8389f66553580719e4b47b2592ab6f26fb638f9d36542c4?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5',
      path: '/login' // Path for student login
    },
    {
      type: 'TEACHER',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c5e5aab716bd69e9965827ef110cc7689d736c9fddb6d07de186ac0fec5a0ab?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5',
      path: '/teacher-login' // Path for teacher login
    },
    {
      type: 'ADMIN',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d5df77ab3bea15eeec0030b1ad633264d3acde5059a391b834a51927207d442?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5',
      path: '/admin-login' // Path for admin login
    }
  ];

  // Function to handle navigation on button click
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the respective page
  };

  return (
    <section className={styles.welcomeSection}>
      <h2 className={styles.welcomeTitle}>WELCOME TO FRITHCODE</h2>
      <h3 className={styles.welcomeSubtitle}>Are you,</h3>
      <div className={styles.userTypeContainer}>
        {userTypes.map((user, index) => (
          <div key={index} className={styles.userTypeCard}>
            <img
              src={user.imageSrc}
              alt={`${user.type} icon`}
              className={styles.userTypeImage}
            />
            <h3>{user.type}</h3>
            {/* Button for each user type */}
            <button
              className={styles.userTypeButton}
              onClick={() => handleNavigation(user.path)}
            >
              Login as {user.type}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WelcomeSection;
