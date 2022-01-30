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
grid-template-rows: 76px 40% 8% 7% 43%;
grid-template-areas:
  " header header header"
  " navbar introduction introduction"
  " navbar buscador buscador"
  " navbar botones botones"
  " navbar containerCards containerCards";
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
font-size: 2rem;
letter-spacing: .1rem;
line-height: 4.5rem;
padding-left: 5rem;
`;
const Title = styled.h1`
text-align: center;
font-size: 4rem;
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
  width: 45%;
  height: 70%;
  background-color: #ffffff;
  border: 1px solid #ABA9A9;
  border-radius: 5px;
  font-size: 2rem;
  padding-left: 1rem;
  &:focus {
    background-color: #555BFF;
    color: white;
    &::placeholder {
      color: white;
    }
  }
  &::placeholder {
    color:black;
  }
  @media only screen and (max-width: 1024px) {
    width:65%;
  }
`;
const InputButton = styled.button`
  grid-area: botones;
  width: 15rem;
  height: 4rem;
  border-radius: 8px;
  border: none;
  background-color: white;
  margin-left: 2rem;
  font-size: 1.4rem;
  &:hover {
    background-color: #555BFF;
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

const ContainerBoxCards = styled.div`
  grid-area: containerCards;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 50% 50%;
  gap:  0 4rem;
  justify-content:space-evenly;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 25% 25% 25% 25%;
    gap:  2rem;
    height: 50rem;
  }
`;

const BoxCard = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  padding-right: 0.5rem;
  box-shadow: 0px 3px #a19f9f;
  width: 100%;
  height: 15rem;
  margin: 0 auto;
  grid-column:1/2;
  display:grid;
  grid-template-columns: 30% 35% 35%;
  grid-template-rows: 30%  25% 45%;
  grid-template-areas:
  " img title title"
  " img dificult botonCard"
  " img texto texto";
  transition: transform 0.3s;
  &:hover {
    transform:scale(1.1);
  }
  @media only screen and (max-width: 1024px) {
    grid-row: 1/2;
    grid-column: 1/2;
    height: 100%;
    width: 70%;
    margin: 0;
  }
`;
const BoxCardLeft = styled(BoxCard)`
  grid-column:2/2;
  @media only screen and (max-width: 1024px) {
    grid-row: 2/3;
    grid-column: 1/2;
    height: 100%;
    width: 70%;
    display:grid;
    justify-self:flex-end;
    margin: 0 3rem 0 0;
  }
`;
const BoxCardRigth = styled(BoxCard)`
  @media only screen and (max-width: 1024px) {
    grid-row: 4/5;
    grid-column: 1/2;
    height: 100%;
    width: 70%;
    display:grid;
    justify-self:flex-end;
    margin: 0 3rem 0 0;
  }
`;
const BoxCardRigthDown = styled(BoxCard)`
  grid-column: 2/3;
  @media only screen and (max-width: 1024px) {
    grid-row: 3/4;
    grid-column: 1/2;
    height: 100%;
    width: 70%;
  }
`;
const BoxImage = styled(Picture)`
  width:100%;
  height: 100%;
  border-radius: 5px;
  grid-area: img;
`;

const TitleCard = styled.p`
  grid-area: title;
  font-size: 2.5rem;
  text-align: center;
`;

const DificultButtonHard = styled.p`
  grid-area: dificult;
  width: 50%;
  margin: 0 0 0 1rem;
  font-size: 1.6rem;
  padding-top: 1rem;
  background-image: linear-gradient(to right, #FB1818, #FF5353);
  color: white;
  border-radius: 20px;
  text-align:center;
  @media only screen and (max-width: 1024px) {
    padding: 0.8rem;
  }
`;
const DificultButtonMedium = styled(DificultButtonHard)`
  background-image: linear-gradient(to right, #FBA618, #FF5353);
`;
const DificultButtonEasy = styled(DificultButtonHard)`
  background-image: linear-gradient(to right, #00FF38, #67FF4E);
`;

const ButtonToChallenge = styled.button`
  grid-area:botonCard;
  width: 50%;
  justify-self: flex-end;
  margin: 0 1rem 0 0;
  cursor:pointer;
  border-radius: 20px;
  border: none;
  background: linear-gradient(to right, #5F64FF, #AE4EFF);
  color: white;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const TextCard = styled.p`
  position: relative;
  grid-area: texto;
  text-align: center;
  padding-top:1rem;
  font-size: 2.2rem;
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
              <Title>Categorias</Title>
              <Paragraph>Hola usuario, en esta vista podras ver todos los retos que hay para poner a prueba tus habilidades, elige uno por su dificultad y a completarlos todos.</Paragraph>
            </TextBox>
            <BoxImg>
              <Picture />
            </BoxImg>
          </Introduction>
          <Input placeholder='Buscar'/>
          <InputButton>Todos los ejercicios 45</InputButton>
          <InputButtonCompleted>Completados 5</InputButtonCompleted>
          <InputButtonProgress>En progreso 2</InputButtonProgress>
          <ContainerBoxCards>
          <BoxCard>
            <BoxImage />
            <TitleCard>Algoritmos</TitleCard>
            <DificultButtonHard>Dificil</DificultButtonHard>
            <Link href='/challenges/playground' passHref>
              <ButtonToChallenge>Resolver =</ButtonToChallenge>
            </Link>
            <TextCard>La multiplicacion mas grande</TextCard>
          </BoxCard>
          <BoxCardLeft>
            <BoxImage />
            <TitleCard>Matematicas</TitleCard>
            <DificultButtonMedium>Medio</DificultButtonMedium>
            <Link href='/challenges/playground' passHref>
              <ButtonToChallenge>Resolver =</ButtonToChallenge>
            </Link>
            <TextCard>Despejando variables</TextCard>
          </BoxCardLeft>
          <BoxCardRigth>
            <BoxImage />
            <TitleCard>Logica</TitleCard>
            <DificultButtonHard>Dificil</DificultButtonHard>
            <Link href='/challenges/playground' passHref>
              <ButtonToChallenge>Resolver =</ButtonToChallenge>
            </Link>
            <TextCard>Manipulacion de arrays</TextCard>
          </BoxCardRigth>
          <BoxCardRigthDown>
            <BoxImage />
            <TitleCard>Algoritmos</TitleCard>
            <DificultButtonEasy>Facil</DificultButtonEasy>
            <Link href='/challenges/playground' passHref>
              <ButtonToChallenge>Resolver =</ButtonToChallenge>
            </Link>
            <TextCard>Fizz Buzz</TextCard>
          </BoxCardRigthDown>
          </ContainerBoxCards>
        </Container>
      </>
    );
  } else {
    return `ERROR`
  }
}

export default Categories;
