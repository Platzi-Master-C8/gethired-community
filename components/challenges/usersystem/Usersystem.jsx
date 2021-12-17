import React from 'react';
import styles from '../../../styles/Usersystem.module.scss';
import position from '../../../styles/Profile.module.scss';

const Usersystem = ({ data, ranks }) => {
  if (data && ranks) {
    return (
      <div className={position.isystem}>
         <div className={styles.containerp}>
          <div className={styles.first_circle}>
            <p className={styles.text}>{data.points}</p>
          </div>
          <p className={styles.text}>Points</p>
          <div className={styles.second_circle}>
            <p className={styles.text}>{ranks.next.required_points}</p>
          </div>
          <p className={styles.text}>Next Rank</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={position.isystem}>
         <div className={styles.containerp}>
          <div className={styles.first_circle}>
            <p className={styles.text}>ERROR</p>
          </div>
          <p className={styles.text}>Points</p>
          <div className={styles.second_circle}>
            <p className={styles.text}>ERROR</p>
          </div>
          <p className={styles.text}>Next Rank</p>
        </div>
      </div>
    );
  }
};


export default Usersystem;
