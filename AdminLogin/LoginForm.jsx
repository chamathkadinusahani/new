import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './AdminLogin.module.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // Navigation for after sign-in

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // ID validation
    if (!formData.username) {
      newErrors.username = 'username is required';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform API call for login
      fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Redirect to the admin dashboard after successful login
            navigate('/admin-dashboard'); // Update this path to match your route for the Admin Dashboard
          } else {
            // Set an error if login fails
            setErrors({ ...errors, password: 'Invalid username or Password' });
          }
        })
        .catch(error => {
          console.error('Error during login:', error);
          setErrors({ ...errors, password: 'Login failed. Please try again.' });
        });
    }
  };

  return (
    <section className={styles.loginFormSection}>
      <h2 className={styles.loginTitle}>ADMIN LOGIN</h2>

      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.inputLabel}>username</label>
          <input
            type="text"
            id="username"
            className={styles.inputField}
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className={styles.error}>{errors.username}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input
            type="password"
            id="password"
            className={styles.inputField}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>

        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>REMEMBER ME</label>
        </div>

        {/* Sign In button - After successful login, user is navigated */}
        <button type="submit" className={styles.signInButton}>SIGN IN</button>
      </form>

      <p className={styles.signupPrompt}>
        Don't have an account? <Link to="/admin-register" className={styles.signupLink}>Sign up now</Link> {/* Updated Link */}
      </p>
    </section>
  );
}

export default LoginForm;
