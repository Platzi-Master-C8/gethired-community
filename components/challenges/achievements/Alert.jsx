import React from 'react';
import styled from '@emotion/styled';

export const StyledAlert = styled.div`
  border: 1px solid red;
  width: 100%;
  padding: 15px;
  margin: auto;
  text-align: center;
  background-color: #ff535323;
  color: #ff5353;
  border-radius: 5px;
  cursor: pointer;
`;

const Alert = (params) => {
  const deleteAlert = (e) => {
    if (e.target && e.target.tagName === 'DIV') {
      e.target.style.display = 'none';
    }
  };
  return (
    <div onClick={deleteAlert}>
      <StyledAlert>
        <span>Sorry! You have no Achievements yet</span>
      </StyledAlert>
    </div>
  );
};

export default Alert;
