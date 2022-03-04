import React, { useContext } from 'react';
import Header from '../../../components/security/header/Header';
import Navbar from '../../../components/security/navbar/Navbar';
import styles from '../../../styles/Landing.module.scss';
import { CallToAction } from '../../../components/security/CallToAction';
import JoinToCommunity from '../../../components/security/JoinToCommunity';
import UserProvider from '../../../Providers/UserProvider';

const LandingPage = () => {
  const user = useContext(UserProvider);
  if (!user) {
    return (
      <>
        <Header user={user} />
        <div className={styles.container}>
          <JoinToCommunity styles={styles} />
          <CallToAction styles={styles} />
        </div>
      </>
    );
  } else {
    console.log(user);
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
