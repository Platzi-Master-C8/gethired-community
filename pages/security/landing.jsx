import React from "react";
import Header from "../../components/challenges/header/Header";
import styles from "../../styles/Landing.module.scss";
import { CallToAction } from "../../components/security/CallToAction";
import JoinToCommunity from "../../components/security/JoinToCommunity";


const LandingPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}> 
      <JoinToCommunity styles={styles}/>     
      <CallToAction styles={styles}/>
      </div>
    </>
  );
};

export default LandingPage;
