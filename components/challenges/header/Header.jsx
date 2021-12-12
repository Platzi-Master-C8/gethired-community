import React from 'react';
import Image from 'next/image';
import Logop from '../../../public/icons/LogoPlataforma1.png';
import styles from '../../../styles/Header.module.scss';
import position from '../../../styles/Profile.module.scss';

const Header = () => {
  return (
    <div className={position.iheader}>

      <header className={styles.header}>
        <div className={styles.logo}>
          <a className="" href='$'>
            <Image
              src={Logop}
              alt='Logo de la pagina'
              />
          </a>
        </div>
        <nav className={styles.navBar}>
        </nav>
    </header>
    </div>
  )
}

export default Header;
