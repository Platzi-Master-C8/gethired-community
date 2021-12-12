import React from 'react';
import styles from '../../../styles/Usersystem.module.scss';
import position from '../../../styles/Profile.module.scss';

const Usersystem = ({ data, ranks }) => {
  if (data && ranks) {
    let dataP = data.points;
    return (
      <div className={position.isystem}>
         <div className={styles.container}>
          <div className={styles.first_circle}>
            <p className={styles.text}>{dataP}</p>
          </div>
          <p className={styles.text}>Points</p>
          <div className={styles.second_circle}>
            <p className={styles.text}>{ranks[1].required_points}</p>
          </div>
          <p className={styles.text}>Next Rank</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};


export default Usersystem;
