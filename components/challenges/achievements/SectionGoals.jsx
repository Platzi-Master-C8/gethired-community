import React from 'react';
import Card from './Card';
import styled from '@emotion/styled';

export const SectionContainer = styled.div`
  display: flex;
  text-align: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  @media (max-width: 1600px) {
    justify-content: space-evenly;
  }
`;

const SectionGoals = ({ goals }) => {
  return (
    <SectionContainer>
      {goals.map((goal, index) => (
        <Card
          title={goal.name}
          img={goal.badge}
          description={goal.description}
          completed={goal.is_complete}
          key={index}
        />
      ))}
    </SectionContainer>
  );
};

export default SectionGoals;
