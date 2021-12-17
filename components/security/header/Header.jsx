import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0'
import Logop from '../../../public/icons/LogoPlataforma1.png';
import styles from '../../../styles/Header.module.scss';
import position from '../../../styles/Profile.module.scss';
import styles2 from '../../../styles/Userdata.module.scss';



const Header = () => {

  const { user } = useUser();

  if(user)
  {
    return(
      <div className={position.iheader}>

      <header className={styles.header}>
        <div className={styles.logo}>

          <Link href='/' passHref>
              <Image
              src={Logop}
              alt='Logo de la pagina'
              />
          </Link>

        </div>
        <nav className={styles.navBar}>
        <a  className= {styles2.login_button} href="/api/auth/logout">Logout</a>
          <Image width={45} height={45} className = {styles2.img_profile} src = { user.picture } alt = { user.name } />
        </nav>
    </header>
    </div>

      )
    }

    return (
      <div className={position.iheader}>

      <header className={styles.header}>
        <div className={styles.logo}>

        </div>
        <nav className={styles.navBar}>
          <a className= {styles2.login_button} href="/api/auth/login">Login</a>
        </nav>
    </header>
    </div>
  )
}

export default Header;
