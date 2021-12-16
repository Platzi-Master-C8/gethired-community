
import Header from '../../../components/security/header/Header'
import Navbar from '../../../components/security/navbar/Navbar'
import Footer from '../../../components/challenges/footer/Footer'
import styles from '../../../styles/Profile.module.scss';
import { useUser } from '@auth0/nextjs-auth0';


async function getStaticProps(context) {
  const res = await fetch(`http:localhost:3500/data`)
  const data = await res.json()
  
  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { data },
  }
}

const Profile = (data) => {
  console.log(data)
  const {user} = useUser();
  
  if (data) {
    if(user)
    {
      return (
        <div className={styles.container}>
            <Header />
            <Navbar  />

            <Footer />
        </div>
      );

    }

    return (
      <div className={styles.container}>
          <Header />
          <Footer />
      </div>
    );

  } else {
    return null;
   }
};

export default Profile;