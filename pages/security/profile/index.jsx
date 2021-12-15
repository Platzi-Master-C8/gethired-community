
import Header from '../../../components/security/header/Header'
import Navbar from '../../../components/security/navbar/Navbar'
import Footer from '../../../components/challenges/footer/Footer'
import styles from '../../../styles/Profile.module.scss';


const Profile = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}


export default Profile;