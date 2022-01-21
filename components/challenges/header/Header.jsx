import React from 'react';
import Link from 'next/link';
import Logop from '../../../public/icons/LogoPlataforma1.png';
import { useUser } from '@auth0/nextjs-auth0'
import styled from '@emotion/styled';
import Image from 'next/image';


const CotainerHeader = styled.div`
  grid-area: header;
`
const HeaderHome = styled.header`
  display: flex;
  width: 100%;
  height: 9.5vh;
  border-bottom: 3px solid #A779FF;
  justify-content: space-evenly;
  align-items: center;
`
const HeaderLogo = styled.div`
  width: 130px;
  height: 40px;
  margin-left: 44px;
`
const NavbarHome = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const ImageUser = styled.div`
  height: 50px;
  margin: 0px 80px 0px 10px;
  border-radius: 50%;
  & img {
    border-radius: 50%;
  }
`
const LoginButton = styled.div`
  margin-right: 50px;
  border: none;
  outline: none;
  background: linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%);;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Mulish', sans-serif;
  padding: 0.9rem 2.6rem;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
`
const LogoutButton = styled(LoginButton)`
  margin-right: 5px;
`

const Header = () => {
  const { user } = useUser();

  if (user) {
    return (
      <CotainerHeader >

        <HeaderHome >

          <HeaderLogo >
            <Link href='/' passHref>
              <Image
              src={Logop}
              alt='Logo de la pagina'
              />
            </Link>
          </HeaderLogo>

          <NavbarHome >
            <Link href="/api/auth/logout" passHref>
              <LoginButton >Logout</LoginButton>
            </Link>
            <ImageUser>
              <Image width={45} height={45} src = { user.picture } alt = { user.name } />
            </ImageUser>
          </NavbarHome>

        </HeaderHome>

      </CotainerHeader>

    )
  }

  return (
    <CotainerHeader >

      <HeaderHome >
        <HeaderLogo >
        </HeaderLogo>

        <NavbarHome >
          <Link href="/api/auth/login" passHref>
            <LogoutButton >Login</LogoutButton>
          </Link>
        </NavbarHome>

      </HeaderHome>
    </CotainerHeader>
  )
}

export default Header;