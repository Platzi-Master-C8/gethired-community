
import Usersystem from '../../../components/challenges/usersystem/Usersystem'
import Header from '../../../components/security/header/Header'
import StreakAndRank from '../../../components/challenges/StreakAndRank/StreakAndRank'
import UserGraph from '../../../components/challenges/usergraph/Usergraph'
import Achievements from '../../../components/challenges/achievements/Achievements'
import Footer from '../../../components/challenges/footer/Footer'
import styles from '../../../styles/Profile.module.scss';
import { useUser } from '@auth0/nextjs-auth0';
import Navbar from '../../../components/security/navbar/Navbar'
import fetch from 'isomorphic-fetch'



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
  const { user } = useUser();
  let info = data.data.data
  if (user) {
    if (info) {
    return (
      <div className={styles.container}>
        <Header />
        <Navbar  />
        <StreakAndRank ranks={info.ranks} challenges={info.challenges} />
        <Usersystem  data={info.data} ranks={info.ranks} />
        <Achievements  goals={info.achievements.completed} />
        <UserGraph  activity={info.activity} />
        <Footer />
      </div>
    );
  }
    else { return false}
  }else { return null}
};

export default Profile;
