
import Usersystem from '../../../components/challenges/usersystem/Usersystem'
import Header from '../../../components/challenges/header/Header'
import Navbar from '../../../components/challenges/navbar/Navbar'
import StreakAndRank from '../../../components/challenges/StreakAndRank/StreakAndRank'
import UserGraph from '../../../components/challenges/usergraph/Usergraph'
import Achievements from '../../../components/challenges/achievements/Achievements'
import Footer from '../../../components/challenges/footer/Footer'
import styles from '../../../styles/Profile.module.scss';
import fetch from 'isomorphic-fetch';
import { useUser } from '@auth0/nextjs-auth0';



export const getServerSideProps = async (params) => {
  const res = await fetch(` https://cg-challenges.herokuapp.com/api/v1/challengers/1`)
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
  
  const {user} = useUser();
  if (user) {
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
