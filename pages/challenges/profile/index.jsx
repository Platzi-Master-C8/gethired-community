
import Usersystem from '../../../components/challenges/usersystem/Usersystem'
import Header from '../../../components/challenges/header/Header'
import Navbar from '../../../components/challenges/navbar/Navbar'
import StreakAndRank from '../../../components/challenges/StreakAndRank/StreakAndRank'
import UserGraph from '../../../components/challenges/usergraph/Usergraph'
import Achievements from '../../../components/challenges/achievements/Achievements'
import Footer from '../../../components/challenges/footer/Footer'
import styles from '../../../styles/Profile.module.scss';

async function getStaticProps(context) {
  const res = await fetch(`http:ocalhost:3500/data`)
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

  if (data) {
    return (
      <div className={styles.container}>
        <Header />
        <Navbar  />
        <StreakAndRank ranks={data.ranks} challenges={data.challenges} />
        <Usersystem  data={data} ranks={data.ranks} />
        <Achievements  goals={data.achievements} />
        <UserGraph  activity={data.activity} />
        <Footer />
      </div>
    );
  } else {
    return null;
   }
};

export default Profile;
