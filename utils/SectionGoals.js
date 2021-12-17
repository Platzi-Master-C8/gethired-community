import React from 'react';
import Card from './Card.js';
import styles from '../styles/Achievements.module.scss';

const SectionGoals = ({ goals }) => {
  return (
    <div>
      <div className= {styles.goals_container, styles.goals_container__cards}  >
        {
          goals.map((goal, index) => (
          <Card
            title={goal.name}
            img={goal.badge}
            description={goal.description}
            completed={goal.completed}
            key={index}
          />
          ))
        }
      </div>
    </div>
  );
}

export default SectionGoals;
