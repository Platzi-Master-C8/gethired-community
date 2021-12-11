import React from 'react';
import Card from './Card.js';

const SectionGoals = ({ goals }) => {
  return (
    <div>
      <div className="goals-container goals-container--cards">
        {
          goals.map((goal, index) => (
          <Card
            title={goal.title}
            img={goal.img}
            description={goal.description}
            completed={goal.completed}
            date={goal.date}
            key={index}
          />
          ))
        }
      </div>
    </div>
  );
}

export default SectionGoals;
