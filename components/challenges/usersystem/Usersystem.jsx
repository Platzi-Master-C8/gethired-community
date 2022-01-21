import React from 'react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  grid-area: systemp;
  justify-self: center;
`;

export const SystemContainer = styled.div`
  width: 30rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1250px) {
    height: 50rem;
  }
`;

export const PointsCircle = styled.div`
   width: 20rem;
   height: 20rem;
   border-radius: 50%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: 4rem solid #555BFF;
   margin-bottom: .5rem;
   @media (max-width: 1250px) {
    height: 18rem;
	  width: 18rem;
  }
 `;

export const RankCircle = styled(PointsCircle)``;

export const Text = styled.p`
  background-color: white;
  font-size: 2rem;
  padding: 1rem 0;
`;


const Usersystem = ({ data, ranks }) => {
  if (data && ranks) {
    return (
      <Wrapper>
        <SystemContainer>
          <PointsCircle>
            <Text>{data.points}</Text>
          </PointsCircle>
          <Text>Points</Text>
          <RankCircle>
            <Text>{ranks.next.required_points}</Text>
          </RankCircle>
          <Text>Next Rank</Text>
        </SystemContainer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <SystemContainer>
          <PointsCircle>
            <Text>ERROR</Text>
          </PointsCircle>
          <Text>Points</Text>
          <RankCircle>
            <Text>ERROR</Text>
          </RankCircle>
          <Text>Next Rank</Text>
        </SystemContainer>
      </Wrapper>
    );
  }
};


export default Usersystem;
