import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  padding-right: 0.5rem;
  box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  width: 100%;
  height: 15rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 35% 35%;
  grid-template-rows: 30% 25% 45%;
  grid-template-areas:
    ' img title title'
    ' img difficult buttonCard'
    ' img text text';
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CategoryCard = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default CategoryCard;
