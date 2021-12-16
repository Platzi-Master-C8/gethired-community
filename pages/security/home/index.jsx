
import Header from '../../../components/security/header/Header'
import Navbar from '../../../components/security/navbar/Navbar'
import Footer from '../../../components/challenges/footer/Footer'
import styles from '../../../styles/Profile.module.scss';
import { useUser } from '@auth0/nextjs-auth0';


const Home = () => {
  const { user } = useUser();

  if (user) {
    return (
      <div className={styles.container}>
        <Header />
        <Footer />
      </div>
    )
  } else
    { return null; }

}
export default Home;