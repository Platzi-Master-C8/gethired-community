import React from 'react'
import styled from '@emotion/styled'
import Header from '../../../components/security/header/Header'
import Navbar from '../../../components/security/navbar/Navbar'
import { useUser } from '@auth0/nextjs-auth0';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 18% 63% 17%;
  grid-template-rows: 76px 20% 60% 33%;
  grid-template-areas:
    " header header header"
    " navbar minicards systemp"
    " navbar achievements systemp"
    " navbar graph .";
`;

const ContainerBox = styled.section`
  width: 80vw;
  height: 40vh;
  display: ${props => props.display};
  justify-content: center;
  border-bottom: 1px solid gray;
`;

const TextBox = styled.article`
width: 50%;
height: 100%;
padding: 2rem 0;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  letter-spacing: .1rem;
  line-height: 2.5rem;
`;


const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2.5rem;
`;

const BoxImg = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Picture = styled.img`
  width: 70%;
  height: 80%;
  background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1639763358/5DaysOfCode_kohn4t.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Categories = () => {
  const { user } = useUser();

  if (user) {
    return (
      <>
        <Container>
        <Navbar />
        <Header />

          <ContainerBox display="flex">
            <TextBox>
              <Title>Algorithms</Title>
              <Paragraph>In this category you will find excercises related to algorithms  from basics to advanced, including topics such as recursion, sorting, trees, data structure, Dijkstra, dynamic programming etc. In this page you can test your abilities solving and implementing algorithms.</Paragraph>
            </TextBox>
            <BoxImg>
              <Picture />
              </BoxImg>
          </ContainerBox>
          
          </Container>
      </>
    );
  } else {
    return `ERROR`
  }

}

export default Categories;
