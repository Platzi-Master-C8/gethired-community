import React from 'react';
import Link from 'next/link';
import LogoP from '../../../public/icons/LogoPlataforma1.png';
import { useUser } from '@auth0/nextjs-auth0';
import styled from '@emotion/styled';
import Image from 'next/image';

const ContainerHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: span 2;
`;
const HeaderHome = styled.header`
  display: flex;
  height: 100%;
  border-bottom: 3px solid #a779ff;
  justify-content: space-evenly;
  align-items: center;
`;
const HeaderLogo = styled.div`
  margin-left: 40px;
`;
const NavbarHome = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;
const ImageUser = styled.div`
  margin-right: 40px;
  & img {
    border-radius: 50%;
  }
`;
const LoginButton = styled.div`
  border: 1px solid transparent;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(95, 100, 255, 0.7) 0%,
    rgba(174, 78, 255, 0.85) 100%
  );
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: 'Mulish', sans-serif;
  padding: 0.9rem 2.6rem;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
`;
const LogoutButton = styled(LoginButton)`
  margin-right: 40px;
`;

const Header = () => {
  const { user } = useUser();

  if (user) {
    return (
      <ContainerHeader>
        <HeaderHome>
          <HeaderLogo>
            <Link href="/" passHref>
              <Image src={LogoP} alt="Page logo" />
            </Link>
          </HeaderLogo>

          <NavbarHome>
            <Link href="/api/auth/logout" passHref>
              <LoginButton>Logout</LoginButton>
            </Link>
            <ImageUser>
              <Image
                width={45}
                height={45}
                src={user.picture}
                alt={user.name}
              />
            </ImageUser>
          </NavbarHome>
        </HeaderHome>
      </ContainerHeader>
    );
  }

  return (
    <ContainerHeader>
      <HeaderHome>
        <HeaderLogo></HeaderLogo>

        <NavbarHome>
          <Link href="/api/auth/login" passHref>
            <LogoutButton>Login</LogoutButton>
          </Link>
        </NavbarHome>
      </HeaderHome>
    </ContainerHeader>
  );
};

export default Header;
