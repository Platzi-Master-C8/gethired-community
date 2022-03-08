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
  grid-area: miniCards;
`;
export const FeatureBox = styled.div`
  width: 12rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;
export const RankButton = styled.p`
  background: linear-gradient(
    90deg,
    rgba(95, 100, 255, 0.7) 0%,
    rgba(174, 78, 255, 0.85) 100%
  );
  border-radius: 1rem;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
  height: 3rem;
  width: 10rem;
  text-align: center;
  padding-top: 0.6rem;
`;
export const DoneButton = styled(RankButton)`
  background: linear-gradient(90deg, #a2a5ee 0%, #585eff 100%); ;
`;
export const StreakButton = styled(RankButton)``;
export const RankValue = styled.p`
  color: rgba(174, 78, 255, 0.85);
  text-align: center;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;
export const DoneValue = styled(RankValue)`
  color: #555bff;
`;
export const StreakValue = styled(RankValue)`
  color: #555bff;
`;

const StreakAndRank = ({ ranks, challenges }) => {
  if (ranks && challenges) {
    return (
      <Container>
        <FeatureBox>
          <Image width={30} height={30} src={rankLogo} alt="ranks" />
          <RankValue>{ranks ? ranks.next.name : []}</RankValue>
          <RankButton>Rank</RankButton>
        </FeatureBox>

        <FeatureBox>
          <Image width={30} height={30} src={doneLogo} alt="ranks" />
          <DoneValue>{challenges ? challenges.completed : []}</DoneValue>
          <DoneButton>Done</DoneButton>
        </FeatureBox>

        <FeatureBox>
          <Image width={30} height={30} src={streakLogo} alt="ranks" />
          <StreakValue>{challenges ? challenges.streak : []}</StreakValue>
          <StreakButton>Current Streak</StreakButton>
        </FeatureBox>
      </Container>
    );
  } else {
    return null;
  }
};

export default StreakAndRank;
