import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logop from '../../../public/icons/LogoPlataforma1.png';
import styles from '../../../styles/Header.module.scss';
import position from '../../../styles/Profile.module.scss';
import { useUser } from '@auth0/nextjs-auth0'


const Header = () => {
  const { user } = useUser();

  if (user) {
    return (
      <div className={position.iheader}>

        <header className={styles.header}>
          <div className={styles.logo}>
            <Link className="" href='/' passHref>
              <Image
                src={Logop}
                alt='Logo de la pagina'
                />
            </Link>
          </div>
          <nav className={styles.navBar}>
          <a href="/api/auth/login">Login</a>
          </nav>
      </header>
      </div>
    )
  }
  else { return null}

}

export default Header;
