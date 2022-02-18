import React from 'react';

import styles from '../../../styles/Landing.module.scss';
import { useUser } from '@auth0/nextjs-auth0';
import Header from '../../../components/challenges/header/Header';
import NavBar from '../../../components/challenges/navbar/Navbar';
import styled from '@emotion/styled';
import JoinToCommunity from '../../../components/challenges/mainHome/JoinToCommunity';
import { CallToAction } from '../../../components/challenges/mainHome/CallToAction';

const ContainerHome = styled.div`
  display: grid;
  grid-template-columns: 230px minmax(1000px, 1fr);
  grid-template-rows: 64px auto;
  /* grid-template-areas:
  " header header "
  " navbar main"
  " navbar main."; */
`;
const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  background-image: url('../../../assets/background.png');
`;

const Home = () => {
  const { user } = useUser();
  if (!user) {
    return (
      <>
        <ContainerHome>
          <Header />
          <Main>
            <JoinToCommunity styles={styles} />
            <CallToAction styles={styles} />
          </Main>
        </ContainerHome>
      </>
    );
  } else {
    return (
      <>
        <ContainerHome>
          <Header />
          <NavBar />
          <Main>
            <JoinToCommunity />
            <CallToAction />
          </Main>
        </ContainerHome>
      </>
    );
  }
};

export default Home;
