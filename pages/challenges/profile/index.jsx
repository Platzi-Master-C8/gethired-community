
import Usersystem from '../../../components/challenges/usersystem/Usersystem'
import Header from '../../../components/security/header/Header'
import StreakAndRank from '../../../components/challenges/StreakAndRank/StreakAndRank'
import UserGraph from '../../../components/challenges/usergraph/Usergraph'
import Achievements from '../../../components/challenges/achievements/Achievements'
import Footer from '../../../components/challenges/footer/Footer'
import styled from '@emotion/styled'
import { useUser } from '@auth0/nextjs-auth0';
import Navbar from '../../../components/security/navbar/Navbar'
import fetch from 'isomorphic-fetch';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 18% 62% 20%;
  grid-template-rows: 5.5rem 25% 35% 33%;
  grid-template-areas:
    " header header header"
    " navbar minicards systemp"
    " navbar achievements systemp"
    " navbar graph .";
    @media (max-width: 1250px) {
    grid-template-columns: 25% 46% 29%;
  }
    @media (max-width: 1100px) {
    grid-template-columns: 23% 47% 30%;
  }
`;

  // .igraph {
  //   grid-area: graph;
  //   width: 75%;
  //   justify-self:center;
  //   align-self: center;
  // }
  // .ifooter {
  //   grid-area: footer;
  // }

export const getServerSideProps = async (params) => {
  const res = await fetch('https://cg-challenges.herokuapp.com/api/v1/challengers/1');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data},
  }
}

const Profile = (data) => {
  const { user } = useUser();
  let info = data.data.data;
  if (user) {
    if (info) {
    return (
      <Container>
        <Header />
        <Navbar  />
        <StreakAndRank  ranks={info.ranks} challenges={info.challenges} />
        <Usersystem  data={info} ranks={info.ranks} />
        <Achievements  goals={info.achievements.completed} />
        {/* <UserGraph  activity={info.activity} />
        <Footer /> */}
      </Container>
    );
  }
    else { return false}
  }else { return null}
};

export default Profile;
