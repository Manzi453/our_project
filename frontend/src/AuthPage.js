import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AuthPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="auth-container"
    >
      <motion.div 
        className="auth-form"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        <h1>{t('auth.title')}</h1>
        <form onSubmit={handleLogin}>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              placeholder={t('auth.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="password"
              placeholder={t('auth.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('auth.loginButton')}
          </motion.button>
        </form>
        <p>
          {t('auth.createAccount')} <Link to="/signup">{t('signup')}</Link>
        </p>
        <p>
          {t('auth.farmerQuestion')} <Link to="/membership">{t('auth.requestMembership')}</Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AuthPage;