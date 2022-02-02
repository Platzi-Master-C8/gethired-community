import React from 'react'
import Laptop from "../../../public/icons/laptop.png";
import JavaScript from "../../../public/icons/JavaScript.png";
import Clock from "../../../public/icons/clock.png";
import Image from 'next/image';
import styled from '@emotion/styled';

const ContainerCards = styled.div`
  grid-column: 2;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  /* width: 90%; */
`
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  font-weight: bold;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.63);
  margin: 30px 0;
`
const CardText = styled.p`
  background-color: white;
  font-size: 2rem;
  padding-top: 10px
`
export const CallToAction = ({ styles }) => {
  return (
    <ContainerCards>
      <Card>
        <CardText >Learn Online Whenever You Want</CardText>
        <Image src={Laptop} alt="laptop image" />
      </Card>
      <Card>
        <Image src={JavaScript} alt="laptop image" />
        <CardText>Learn Javascript by Solving Tasks</CardText>
      </Card>
      <Card>
        <CardText>Instant Verification with Testing</CardText>
        <Image src={Clock} alt="laptop image" />
      </Card>
    </ContainerCards>
  )
}
