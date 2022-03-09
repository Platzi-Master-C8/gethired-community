import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  padding-right: 0.5rem;
  box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  width: 100%;
  min-height: 15rem;
  margin: 0 auto;
  transition: transform 0.3s;
  display: grid;
  grid-template-columns: 1fr 2fr;

  &:hover {
    box-shadow: 0 0 8px 4px rgba(167, 121, 255, 0.5);
    transform: scale(1.02);
  }
`;

const CategoryCard = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default CategoryCard;
