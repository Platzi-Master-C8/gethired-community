import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/icons/LogoPlataforma1.png';
import Avatar from '../../../public/icons/Avatar.png';

const Header = () => {
  return (
    <div className="item-header">
      <header className='header'>
      <div className='header-logo'>
        <a href='$'>
          <Image src={Logo} alt='Logo de la pagina' />
        </a>
      </div>
      <nav className='header-navBar'>
      </nav>
      <div className='header-photo'>
        <a href='#'><Image src={Avatar} alt='' /></a>
      </div>
    </header>
    </div>
  )
}

export default Header
