import React from 'react'
import Image from 'next/image';
import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 25rem;
	height: 8rem;
	border-radius: .5rem;
	display: flex;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) 200ms;
  color: ${({ success }) => (success ? 'rgb(40, 189, 40)' : 'red')};
  filter: ${({ success }) => (success ? 'grayscale(0%)' : 'grayscale(100%)')};

	&:hover {
		cursor: pointer;
    transform: translateY(-5px);
	}
  @media (max-width: 1400px) {
    height: 10rem;
	  width: 30rem;
  }
  @media (max-width: 1270px) {
    height: 10rem;
	  width: 26rem;
  }
  @media (max-width: 1210px) {
    height: 8rem;
	  width: 20rem;
  }
`;

export const CardImg = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: .5rem 0 0 .5rem;
`;

export const MainContent = styled.section`
  width: 35rem;
  padding: .5rem .8rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1250px) {
	  width: 30rem;
    height: 8rem;
  }
`;

export const Title = styled.h3`
/* opacity: 0.8; */
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
	color: black;
  /* @media (max-width: 1250px) {
	  font-size: 1.5rem;
  }
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  } */
`;

export const Description = styled.p`
  width: 100%;
  line-height: 2;
  font-size: 1.5rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* @media (max-width: 1300px) {
	  font-size: 1.5rem;
  }
  @media (max-width: 1250px) {
	  font-size: 1.5rem;
  } */
`;


function Card({title, img, description, completed, date}) {
	return (
            <CardContainer success={completed}>
                <CardImg width= {150} height= {100} src={img} alt='description img' priority/>
                <MainContent>
                  <Title>{title}</Title>
                  {
                      completed ? <Description>Completed in {date}!</Description>
                          :
                          <Description>{description}</Description>
                  }
                </MainContent>
            </CardContainer>

    )
}

export default Card;
