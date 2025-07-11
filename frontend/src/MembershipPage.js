import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MembershipPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    farmName: '',
    location: '',
    size: '',
    crops: '',
    email: '',
    phone: ''
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
        <h1>{t('membership.title')}</h1>
        <p className="subtitle">{t('membership.subtitle')}</p>
        
        <form onSubmit={handleSubmit}>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="text"
              name="farmName"
              placeholder={t('membership.farmNamePlaceholder')}
              value={formData.farmName}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="text"
              name="location"
              placeholder={t('membership.locationPlaceholder')}
              value={formData.location}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <div className="form-row">
            <motion.div whileHover={{ scale: 1.02 }} className="form-col">
              <input
                type="text"
                name="size"
                placeholder={t('membership.sizePlaceholder')}
                value={formData.size}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="form-col">
              <input
                type="text"
                name="crops"
                placeholder={t('membership.cropsPlaceholder')}
                value={formData.crops}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              name="email"
              placeholder={t('membership.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="tel"
              name="phone"
              placeholder={t('membership.phonePlaceholder')}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
          >
            {t('membership.submitButton')}
          </motion.button>
        </form>

        <p className="form-footer">
          {t('membership.alreadyMember')} <Link to="/dashboard">{t('membership.loginInstead')}</Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MembershipPage;