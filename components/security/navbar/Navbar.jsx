import React from 'react';
import Image from 'next/image';
import Avatar from '../../../public/icons/Avatar.png';
import Forum from '../../../public/icons/forum.svg';
import Challenges from '../../../public/icons/challenges.svg';
import Profile from '../../../public/icons/profile.svg';
import styles from '../../../styles/Navbar.module.scss';
import position from '../../../styles/Profile.module.scss';
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';

const NavBar = () => {

  const {user} = useUser();

  if(user) {

    return (
      <div className={position.inavbar}>
        <aside className={styles.navBar}>
  
          <div className={styles.navBar_user}>
  
            <Link toclLink tossName={styles.navBar_user_name} href='#'> {user.name} </Link>
            <div className={styles.avatar_profile}>
            <Image layout="fixed"  src={Avatar} alt='' />
            </div>

          </div>

          <div className={styles.navBar_menu}>
            <ul>
              <li>
                <Link className={styles.navBar_menu_link} href='/networking' passHref><Image  src={Forum} alt='' /><p className={styles.navBar_menu__text}>Forum</p></Link>
              </li>
              <li>
                <Link className={styles.navBar_menu_link} href='/challenges/playground' passHref><Image  src={Challenges} alt='' /><p className={styles.navBar_menu__text}>Challenges</p></Link>
              </li>
              <li>
                <Link className={styles.navBar_menu_link} href='/challenges/profile' passHref><Image  src={Profile} alt='' /><p className={styles.navBar_menu__text}>Profile</p></Link>
              </li>
            </ul>
          </div>

        </aside>
      </div>
    )

  } else {return null}

}

export default NavBar;
