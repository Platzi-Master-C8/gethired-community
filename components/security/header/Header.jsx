import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logop from '../../../public/icons/LogoPlataforma1.png';
import styles from '../../../styles/Header.module.scss';
import position from '../../../styles/Profile.module.scss';
import styles2 from '../../../styles/Userdata.module.scss';
import UserProvider from '../../../Providers/UserProvider';

let auth0 = {
  domain: 'https://gethired.us.auth0.com',
  response_type: 'token',
  client_id: '9IKIwhKs44cPB0VceKTaVHZnXRSd2zUJ',
  redirect_uri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://gethired-community-c8.vercel.app/'//Use environment variables later
};
const Header = () => {
  const user = useContext(UserProvider);
  if (user) {
    return (
      <div className={position.iheader}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href='/' passHref>
              <Image src={Logop} alt='Logo de la pagina' />
            </Link>
          </div>
          <nav className={styles.navBar}>
            <div onClick={
              () => {
                window.location.href = `
									${auth0.domain}/v2/logout?
									client_id=${auth0.client_id}&
									returnTo=${auth0.redirect_uri}
								`;
                localStorage.removeItem('access_token');
              }
            } className={styles2.login_button}>Logout
            </div>

            <div className={styles2.img_container}>
              <Image
                src={user.picture || 'https://via.placeholder.com/150'}
                width={40}
                height={40}
                className={styles2.img_avatar}
                alt={user.name || ''}
              />
            </div>
          </nav>
        </header>
      </div>
    );
  }

  return (
    <div className={position.iheader}>
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <nav className={styles.navBar}>
          <div onClick={
            () => {
              window.location.href = `
								${auth0.domain}/authorize?
								response_type=${auth0.response_type}&
								client_id=${auth0.client_id}&
								scope=openid%20profile%20email&
								redirect_uri=${auth0.redirect_uri}
							`;
            }
          } className={styles2.login_button}>Login
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
