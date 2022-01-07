import React from 'react';
import position from '../../../styles/Profile.module.scss';
import styles from '../../../styles/Footer.module.scss'
const Footer = () => {
  return (
    <div className={position.ifooter}>
          <div className={styles.footer_container}>
          <p className={styles.description}>Platzi Master C8 ❤️ </p>
        </div>
    </div>
  )
}

export default Footer;
