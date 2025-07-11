import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
/* Then import it in your component */
import './WelcomePage.css';
const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="welcome-container"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green' // Assuming you want white text on the background
      }}
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} // Improves text readability
      >
        {t('welcome')}
      </motion.h1>
      
      <motion.div
        className="button-group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginTop: '20px' }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="primary-btn"
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(5px)',
            border: '1px solid white',
            padding: '10px 20px',
            margin: '0 10px'
          }}
        >
          <Link to="/auth" style={{ color: 'white', textDecoration: 'none' }}>{t('login')}</Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="secondary-btn"
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(5px)',
            border: '1px solid white',
            padding: '10px 20px',
            margin: '0 10px'
          }}
        >
          <Link to="/auth" style={{ color: 'white', textDecoration: 'none' }}>{t('signup')}</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomePage;