import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../../../components/security/header/Header';
import Navbar from '../../../components/security/navbar/Navbar';
import Link from 'next/link';
import CategoryCard from '../../../components/challenges/categories/CategoryCard';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 18% 41% 41%;
  grid-template-rows: 55px 40% 55%;
  grid-template-areas:
    ' header header header'
    ' navbar body body'
    ' navbar body body';
`;
const Introduction = styled.section`
  width: 80vw;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
`;
const TextBox = styled.article`
  width: 50%;
  height: 100%;
  padding: 2rem 0;
`;
const Paragraph = styled.p`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 4.5rem;
  text-align: justify;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2.5rem;
`;
const BoxImg = styled.div`
  width: 50%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Picture = styled.img`
  width: 90%;
  height: 90%;
  background-image: url('https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg');
  background-size: cover;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
`;

const BoxImage = styled(Picture)`
  width: 100%;
  height: 100%;
  background-image: (${props => props.src});
  //border-radius: 5px;
`;
const ContainerBoxCards = styled.div`
  display: grid;
  margin: 2rem;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  place-items: center;

  @media only screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: 100%;
    gap: 4rem;
    height: 50rem;
  }
`;

const TitleCard = styled.p`
  font-size: 2.2rem;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
`;
const DifficultyButton = styled.p`
  width: 50%;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.difficulty === 'low' ? '#1c9b1c' : (props.difficulty === 'medium' ? '#aeb404' : '#ff0000')};
  border-radius: 2px;
  text-align: center;
`;

const ButtonToChallenge = styled.button`
  width: 45%;
  justify-self: flex-end;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  background: linear-gradient(to right, #5f64ff, #ae4eff);
  color: white;
  transition: transform 0.5s;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    transform: scale(1.1);
  }
`;
const TextCard = styled.p`
  position: relative;
  text-align: justify;
  font-size: 1.4rem;
  text-overflow: ellipsis;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: justify;

  & > * + * {
    margin-top: 1.5rem;
  }

`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: body;
`;
export const getServerSideProps = async () => {
  let categories;
  const serverData = await fetch('https://www.uthsocial.com/api/v1/challenges');
  const parsedData = await serverData.json();
  categories = parsedData.data;
  return {
    props: { categories }
  };
};

const imgStack = ['https://cc0.photo/wp-content/uploads/2015/11/Code-editor-on-MacBook-Air-980x651.jpg',
  'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_960_720.jpg'];

const Categories = ({ categories }) => {

  //Why I didn't use states? Idk, discover it by yourself :demon-face: :demon-face:

  let images = [...imgStack];
  const popImage = () => {
    const image = images.pop();
    if (images.length === 0) {
      images = [...imgStack];
    }
    return image;
  };

  if (categories) {
    return (
      <>
        <Container>
          <Header />
          <Navbar />
          <Body>

            <Introduction>
              <TextBox>
                <Title>Challenges</Title>
                <Paragraph>
                  Hello user, in this view you can see all the challenges to test
                  your skills, choose one by its difficulty and complete them all.
                </Paragraph>
              </TextBox>
              <BoxImg>
                <Picture />
              </BoxImg>
            </Introduction>
            <ContainerBoxCards>
              {categories.map((category) => (
                <CategoryCard key={category.name}>
                  <BoxImage src={popImage()} />
                  <CardBody>
                    <TitleCard>{category.name}</TitleCard>
                    <DifficultyButton difficulty={category.difficulty}>
                      {category.difficulty[0].toUpperCase() +
                        category.difficulty.slice(1)}
                    </DifficultyButton>
                    <TextCard>
                      {category.description.length > 120
                        ? category.description.substring(0, 120) + '...'
                        : category.description}
                    </TextCard>
                    <Link
                      href={{ pathname: `/challenges/playground/${category.id}` }}
                      passHref={true}
                    >
                      <ButtonToChallenge>Resolve</ButtonToChallenge>
                    </Link>
                  </CardBody>
                </CategoryCard>
              ))}
            </ContainerBoxCards>
          </Body>

        </Container>
      </>
    );
  } else {
    return `ERROR`;
  }
};

export default Categories;
