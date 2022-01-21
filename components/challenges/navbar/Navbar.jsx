import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../../../public/icons/Avatar.png';
import Forum from '../../../public/icons/forum.svg';
import Challenges from '../../../public/icons/challenges.svg';
import Profile from '../../../public/icons/profile.svg';
import { useUser } from '@auth0/nextjs-auth0';
import styled from '@emotion/styled';

const ContainerAsideNavbar = styled.div`
  grid-area: navbar;
`
const AsideNavbar = styled.aside`
  width: 210px;
  height: 100vh;
  position: absolute;
  z-index: 2;
  background-color: #fff;
`
const NavbarUser = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #A779FF;
  `
const NavbarUserName = styled.div`
  display: inline-block;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`
const NavbarAvatarProfile = styled.div`
  /* className={styles.avatar_profile} */
`
const NavbarMenu = styled.div`
  font-size: 1.8rem;
`
const NavbarMenuList = styled.ul`
  list-style: none;
`
const NavbarMenuItem = styled.li`
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%);;
    color: white;
  }
`
const NavbarMenuLink = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const NavbarMenuText = styled.p`
  width: 110px;
`


const NavBar = () => {

  const { user } = useUser();

  if (user) {

    return (
      <ContainerAsideNavbar>
        <AsideNavbar>

          <NavbarUser>

            <Link href='/' passHref>
              <NavbarUserName >{user.name}</NavbarUserName>
            </Link>

            <NavbarAvatarProfile >
              <Image layout="fixed" src={Avatar} alt='' />
            </NavbarAvatarProfile>

          </NavbarUser>

          <NavbarMenu >
            <NavbarMenuList>

              <NavbarMenuItem>
                <Link href='/networking' passHref>
                  <NavbarMenuLink >
                    <Image src={Forum} alt='forum' />
                    <NavbarMenuText>Forum</NavbarMenuText>
                  </NavbarMenuLink>
                </Link>
              </NavbarMenuItem>

              <NavbarMenuItem>
                <Link href='/challenges/categories' passHref>
                  <NavbarMenuLink >
                    <Image src={Challenges} alt='challange' />
                    <NavbarMenuText>Challenges</NavbarMenuText>
                  </NavbarMenuLink>
                </Link>
              </NavbarMenuItem>

              <NavbarMenuItem>
                <Link href='/challenges/profile' passHref>
                  <NavbarMenuLink >
                    <Image src={Profile} alt='profile' />
                    <NavbarMenuText>Profile</NavbarMenuText>
                  </NavbarMenuLink>
                </Link>
              </NavbarMenuItem>

            </NavbarMenuList>
          </NavbarMenu>

        </AsideNavbar>
      </ContainerAsideNavbar>
    )

  } else { return null }

}

export default NavBar;

