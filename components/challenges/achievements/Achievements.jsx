import React from 'react';
import SectionGoals from '../../../utils/SectionGoals';
import Alert from '../../../utils/Alert';
import styles from '../../../styles/Achievements.module.scss';
import position from '../../../styles/Profile.module.scss';

const Achievements = ({ goals }) => {
  if (goals) {
    return (
      <div className={position.iachievements}>
        <main className={styles.main}>
          <section className={styles.goals_wrapper}>
            <h1 className={styles.goals_wrapper__title}>Achievements</h1>
            <div className={styles.goals_container}>
              {
                (goals.length) === 0 ? <Alert /> : <SectionGoals goals={goals} />
              }
            </div>
          </section>
        </main>
      </div>
    )
  }
  else {
    return null;
  }

}

export default Achievements;
