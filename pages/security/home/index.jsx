
import Header from '../../../components/challenges/header/Header'
import Footer from '../../../components/challenges/footer/Footer'
import styles from '../../../styles/Gridcontainer.module.scss';
import { useUser } from '@auth0/nextjs-auth0';


const Home = () => {
  const { user } = useUser();

  if (user) {
    (
      <div className={styles.gcontainer}>
        <Header />
      </div>
    )
  } else {
    return null;
  }
}
export default Home;