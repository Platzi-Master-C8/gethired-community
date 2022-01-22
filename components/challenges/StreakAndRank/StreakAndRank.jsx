import React from 'react';
import Image from 'next/image';
import rankLogo from '../../../public/icons/rank.svg';
import doneLogo from '../../../public/icons//done.svg';
import streakLogo from '../../../public/icons/streak.svg';
import styled from '@emotion/styled';


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  grid-area: minicards;
`;

export const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  @media (max-width: 1210px) {
    width: 12rem;
    height: 12rem;
  }
`;

export const RankButton = styled.p`
  background: linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%);;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.7rem;
  height:  3.6rem;
  width: 13.8rem;
  text-align: center;
  padding-top: 5px;
  @media (max-width: 1210px) {
    font-size: 1.5rem;
    height:  3rem;
    width: 12rem;
    line-height: 1.5rem;
  }
`;

export const DoneButton = styled(RankButton)`
  background: linear-gradient(90deg, #A2A5EE 0%, #585EFF 100%);;
  height:  38px;
  padding-top: 7px;
`;

export const StreakButton = styled(RankButton)`
  height:  38px;
  width: 150px;
  padding-top: 7px;
`;

export const RankValue = styled.p`
  color: rgba(174, 78, 255, 0.85);
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: 1210px) {
    font-size: 1.5rem;
  }
`;

export const DoneValue = styled(RankValue)`
  color: #555BFF;
`;

export const StreakValue = styled(RankValue)`
color: #555BFF;
`;



const StreakAndRank = ({ ranks, challenges }) => {

  if (ranks && challenges) {
    return (
      <Container>

        <FeatureBox>
          <Image width={50} height={50}  src={rankLogo} alt="ranks" />
          <RankValue>{ranks ? ranks.next.name : []}</RankValue>
          <RankButton>Rank</RankButton>
        </FeatureBox>

        <FeatureBox>
          <Image width={50} height={50}  src={doneLogo} alt="ranks" />
          <DoneValue>{challenges ? challenges.completed : []}</DoneValue>
          <DoneButton>Done</DoneButton>
        </FeatureBox>

        <FeatureBox>
          <Image width={50} height={50}  src={streakLogo} alt="ranks" />
          <StreakValue>{challenges ? challenges.streak : []}</StreakValue>
          <StreakButton>Current streak</StreakButton>
        </FeatureBox>

      </Container>
    )
  } else {
    return null;
  }
};

export default StreakAndRank;