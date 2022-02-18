import React from 'react';
import Header from '../../../components/security/header/Header';
import Navbar from '../../../components/security/navbar/Navbar';
import styles from '../../../styles/Landing.module.scss';
import { CallToAction } from '../../../components/security/CallToAction';
import JoinToCommunity from '../../../components/security/JoinToCommunity';
import { useUser } from '@auth0/nextjs-auth0';

const LandingPage = () => {
  const { user } = useUser();
  if (!user) {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <JoinToCommunity styles={styles} />
          <CallToAction styles={styles} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Navbar />
        <div className={styles.container}>
          <JoinToCommunity styles={styles} />
          <CallToAction styles={styles} />
        </div>
      </>
    );
  }
};

export default LandingPage;
