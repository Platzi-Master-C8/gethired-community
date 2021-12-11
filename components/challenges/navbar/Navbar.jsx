import React from 'react';
import Image from 'next/image';
import Avatar from '../../icons/Avatar.png';
import Forum from '../../icons/forum.svg';
import Challenges from '../../icons/challenges.svg';
import Profile from '../../icons/profile.svg';



const NavBar = () => {
  return (
    <div className="item-navbar">
      <aside className='navBar'>
      <div className='navBar-user'>
        <a href='#'>Name Data</a>
        <Image src={Avatar} alt='' />
      </div>
      <div className='navBar-menu'>
        <ul>
          <li>
            <a href='#'><Image id='img-icon' src={Forum} alt='' /><p className='navBar-menu__text'>Foro</p></a>
          </li>
          <li>
            <a href='#'><Image id='img-icon' src={Challenges} alt='' /><p className='navBar-menu__text'>Desafios</p></a>
          </li>
          <li>
            <a href='#'><Image id='img-icon' src={Profile} alt='' /><p className='navBar-menu__text'>Perfil</p></a>
          </li>
        </ul>
      </div>
    </aside>
    </div>
  )
}

export default NavBar
