
import Usersystem from '../../../components/challenges/usersystem/Usersystem'
import Header from '../../../components/challenges/header/Header'
import Navbar from '../../../components/challenges/navbar/Navbar'
import StreakAndRank from '../../../components/challenges/StreakAndRank/StreakAndRank'
import UserGraph from '../../../components/challenges/usergraph/Usergraph'
import Achievements from '../../../components/challenges/achievements/Achievements'
import Footer from '../../../components/challenges/footer/Footer'
import styles from '../../../styles/Profile.module.scss';
import fetch from 'isomorphic-fetch';

export const getServerSideProps = async (params) => {
  const res = await fetch(` http://localhost:3500/data`)
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
  let info = data.data

  if (info) {
    return (
      <div className={styles.container}>
        <Header />
        <Navbar  />
        <StreakAndRank ranks={info.ranks} challenges={info.challenges} />
        <Usersystem  data={info} ranks={info.ranks} />
        <Achievements  goals={info.achievements} />
        <UserGraph  activity={info.activity} />
        <Footer />
      </div>
    );
  } else {
    return null;
   }
};

export default Profile;
