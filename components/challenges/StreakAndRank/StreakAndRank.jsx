import React from 'react';
import Image from 'next/image';
import rankLogo from '../../../public/icons/rank.svg';
import doneLogo from '../../../public/icons//done.svg';
import streakLogo from '../../../public/icons/streak.svg';
import styles from '../../../styles/StreakAndRank.module.scss';
import position from '../../../styles/Profile.module.scss';

const StreakAndRank = ({ ranks, challenges }) => {

  if (ranks && challenges) {
    return (
    <div className={position.iminicards}>
        <div className={styles.main_container}>

        <div className={styles.step__container}>
          <Image layout="fixed" className={styles.rank_icon} src={rankLogo} alt="ranks" />
          <p className={styles.rank_value}>{ranks ? ranks[1].next : []}</p>
          <p className={styles.rank_button}>Rank</p>
        </div>

        <div className={styles.step__container}>
          <Image layout="fixed" className={styles.done_icon} src={doneLogo} alt="ranks" />
          <p className={styles.done_value}>{challenges ? challenges.completed : []}</p>
          <p className={styles.done_button}>Done</p>
        </div>

        <div className={styles.step__container}>
          <Image layout="fixed" className={styles.streak_icon} src={streakLogo} alt="ranks" />
          <p className={styles.streak_value}>{challenges ? challenges.streak : []}</p>
          <p className={styles.streak_button}>Current streak</p>
        </div>

        </div>

    </div>
    )
  } else {
    return null;
  }
};

export default StreakAndRank;
