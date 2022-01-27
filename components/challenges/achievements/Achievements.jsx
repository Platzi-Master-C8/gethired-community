import React from 'react';
import SectionGoals from './SectionGoals';
import Alert from './Alert';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  grid-area: achievements;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 47rem;
  max-width: 90rem;
  margin-top: 5rem;
`;

export const Title = styled.h1`
  display: inline-block;
  justify-self: center;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  padding: 10px;
  background-color: #5f64ff;
  background-image: linear-gradient(90deg, #5f64ff 0%, #ae4eff 100%);
`;

export const GoalsContainer = styled.div`
  margin: 20px auto;
`;

const Achievements = ({ goals }) => {
  if (goals) {
    return (
      <Wrapper>
          <Container>
            <Title>Achievements</Title>
            <GoalsContainer>
              {
                (goals.length) === 0 ? <Alert /> : <SectionGoals goals={goals} />
              }
            </GoalsContainer>
          </Container>
      </Wrapper>
    )
  }
  else {
    return null;
  }

}

export default Achievements;
