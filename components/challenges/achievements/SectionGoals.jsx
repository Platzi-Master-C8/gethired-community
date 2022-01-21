import React from 'react';
import Card from './Card';
import styled from '@emotion/styled';

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 5.5rem;
  flex-wrap: wrap;
  @media (max-width: 1250px) {
    gap: 2.5rem;
  }
`;


const SectionGoals = ({ goals }) => {
  return (
      <SectionContainer>
        {
          goals.map((goal, index) => (
          <Card
            title={goal.name}
            img={goal.badge}
            description={goal.description}
            completed={true}
            key={index}
          />
          ))
        }
      </SectionContainer>
  );
}

export default SectionGoals;
