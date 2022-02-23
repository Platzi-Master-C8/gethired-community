import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const CommunityContainer = styled.div`
  text-align: center;
`;
const Row1 = styled.div`
  padding-top: 1rem;
`;
const Row2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;
  margin-top: 3rem;
`;
const Row3 = styled.div``;
const JoinToCommunity = () => {
  return (
    <CommunityContainer>
      <Row1>
        <Image
          width={250}
          height={180}
          src="https://res.cloudinary.com/dckunlwcb/image/upload/v1639358145/Cloud-Networking_uhe4il.png"
          alt="networking image"
        />
      </Row1>
      <Row2>
        <Image
          width={300}
          height={180}
          src="https://res.cloudinary.com/dckunlwcb/image/upload/v1639358145/Cloud-Forum_awhirz.png"
          alt="challenges image"
        />
        <Image
          width={300}
          height={180}
          src="https://res.cloudinary.com/dckunlwcb/image/upload/v1639358145/Cloud-Challenges_evydar.png"
          alt="forum image"
        />
      </Row2>
      <Row3>
        <Image
          width={400}
          height={400}
          src="https://res.cloudinary.com/dckunlwcb/image/upload/v1639358145/main-asset_1_k27fr8.png"
          alt="laptop_girl image"
        />
      </Row3>
    </CommunityContainer>
  );
};

export default JoinToCommunity;
