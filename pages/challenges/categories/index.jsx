import React from 'react';
import styled from '@emotion/styled';
import { useUser } from '@auth0/nextjs-auth0';
import Header from '../../../components/security/header/Header';
import Navbar from '../../../components/security/navbar/Navbar';
import Link from 'next/link';


const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 18% 41% 41%;
grid-template-rows: 76px 40% 8% 10% 40%;
grid-template-areas:
  " header header header"
  " navbar introduction introduction"
  " navbar buscador ."
  " navbar botones ."
  " navbar retos retos2";
`;
const Introduction = styled.section`
width: 80vw;
height: 40vh;
display: flex;
justify-content: center;
border-bottom: 1px solid gray;
grid-area: introduction;
`;
const TextBox = styled.article`
width: 50%;
height: 100%;
padding: 2rem 0;
`;
const Paragraph = styled.p`
font-size: 1.8rem;
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
const Input = styled.input`
  grid-area: buscador;
  margin-top: 1rem;
  width: 105%;
  height: 70%;
  background-color: #F8F8F8;
  border-radius: 5px;
  font-size: 2rem;
  padding-left: 1rem;
  &:hover {
    background-color: white;
  }
`;
const InputButton = styled.button`
  grid-area: botones;
  width: 15rem;
  height: 4rem;
  border-radius: 5px;
  border: none;
  background-color: white;
  margin-left: 2rem;
  font-size: 1.4rem;
  &:hover {
    background-color: #A779FF;
    color: white;
  }
`;
const InputButtonCompleted = styled(InputButton)`
  position:relative;
  left: 18rem;
`;
const InputButtonProgress = styled(InputButton)`
  position:relative;
  left: 36rem;
`;

const BoxCard = styled.div`
  border-radius: 5px;
  background-color: #F8F8F8;
  padding-right: 0.5rem;
  grid-area: retos;
  box-shadow: 3px 3px #a19f9f;
  width: 90%;
  height: 150px;
  display:grid;
  grid-template-columns: 30% 50% 20%;
  grid-template-rows: 30%  25% 45%;
  grid-template-areas:
  " img title title"
  " img dificult botonCard"
  " img texto texto";
  transition: transform 0.3s;
  &:hover {
    transform:scale(1.1);
  }
`;
const BoxCardLeft = styled(BoxCard)`
  grid-area: retos;
  position:relative;
  top: 17rem;
`;
const BoxCardRigth = styled(BoxCard)`
  grid-area: retos2;
`;
const BoxCardRigthDown = styled(BoxCardRigth)`
  grid-area: retos2;
  position:relative;
  top: 17rem;
`;
const BoxImage = styled(Picture)`
  width:100%;
  height: 100%;
  border-radius: 5px;
  position:relative;
  grid-area: img;
`;

const TitleCard = styled(Paragraph)`
  padding: 1rem;
  font-size: 2.5rem;
`;

const DificultButton = styled.p`
  grid-area: dificult;
  font-size: 1.6rem;
  padding-top: 0.5rem;
  background-color: #bd1648;
  color: white;
  height: 3rem;
  width: 7rem;
  border-radius: 20px;
  text-align:center;
`;

const ButtonToChallenge = styled.button`
  grid-area:botonCard;
  cursor:pointer;
  border-radius: 20px;
  border: none;
  background-color: #A779FF;
  color: white;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const TextCard = styled(Paragraph)`
  position: relative;
  grid-area: texto;
  text-align: center;
  padding-top:1rem;
`;




const Categories = () => {
  const { user } = useUser();
  if (user) {
    return (
      <>
        <Container>
          <Navbar />
          <Header />
          <Introduction>
            <TextBox>
              <Title>Algorithms</Title>
              <Paragraph>In this category you will find excercises related to algorithms  from basics to advanced, including topics such as recursion, sorting, trees, data structure, Dijkstra, dynamic programming etc. In this page you can test your abilities solving and implementing algorithms.</Paragraph>
            </TextBox>
            <BoxImg>
              <Picture />
            </BoxImg>
          </Introduction>
          <Input placeholder='Buscar'/>
          <InputButton>Todos los ejercicios 45</InputButton>
          <InputButtonCompleted>Completados 5</InputButtonCompleted>
          <InputButtonProgress>En progreso 2</InputButtonProgress>
          <BoxCard>
            <BoxImage />
            <TitleCard>Algorithms</TitleCard>
            <DificultButton>Dificil</DificultButton>
            <Link href='/challenges/playground' passHref>
              <ButtonToChallenge>Resolver =</ButtonToChallenge>
            </Link>
            <TextCard>Genetic Algorithms are a useful tool</TextCard>
          </BoxCard>
          <BoxCardLeft>
            <BoxImage />
            <TitleCard>Algorithms</TitleCard>
            <DificultButton>Dificil</DificultButton>
            <Link href='/challenges/playground' passHref>
              <ButtonToChallenge>Resolver =</ButtonToChallenge>
            </Link>
            <TextCard>Genetic Algorithms are a useful tool</TextCard>
          </BoxCardLeft>
          <BoxCardRigth>
            <BoxImage />
            <TitleCard>Algorithms</TitleCard>
            <DificultButton>Dificil</DificultButton>
            <Link href='/challenges/playground' passHref>
              <ButtonToChallenge>Resolver =</ButtonToChallenge>
            </Link>
            <TextCard>Genetic Algorithms are a useful tool</TextCard>
          </BoxCardRigth>
          <BoxCardRigthDown>
            <BoxImage />
            <TitleCard>Algorithms</TitleCard>
            <DificultButton>Dificil</DificultButton>
            <Link href='/challenges/playground' passHref>
              <ButtonToChallenge>Resolver =</ButtonToChallenge>
            </Link>
            <TextCard>Genetic Algorithms are a useful tool</TextCard>
          </BoxCardRigthDown>
        </Container>
      </>
    );
  } else {
    return `ERROR`
  }
}

export default Categories
