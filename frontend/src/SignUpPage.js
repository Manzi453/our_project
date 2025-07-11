import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="form-page"
    >
      <motion.div 
        className="form-container"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        <h1>{t('signup.title')}</h1>
        
        <form onSubmit={handleSubmit}>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="text"
              name="name"
              placeholder={t('signup.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              name="email"
              placeholder={t('signup.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="password"
              name="password"
              placeholder={t('signup.passwordPlaceholder')}
              value={formData.password}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="password"
              name="confirmPassword"
              placeholder={t('signup.confirmPasswordPlaceholder')}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('signup.submitButton')}
          </motion.button>
        </form>

        <p className="form-footer">
          {t('signup.haveAccount')} <Link to="/auth">{t('login')}</Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SignUpPage;