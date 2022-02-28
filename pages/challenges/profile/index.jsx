import Usersystem from '../../../components/challenges/usersystem/Usersystem';
import Header from '../../../components/security/header/Header';
import StreakAndRank from '../../../components/challenges/StreakAndRank/StreakAndRank';
import UserGraph from '../../../components/challenges/usergraph/Usergraph';
import Achievements from '../../../components/challenges/achievements/Achievements';
import styled from '@emotion/styled';
import { useUser } from '@auth0/nextjs-auth0';
import Navbar from '../../../components/security/navbar/Navbar';
import fetch from 'isomorphic-fetch';
import { useEffect, useState } from 'react';
import fetchUser from '../../../utils/helpers/fetchUser';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 24% 53% 29%;
  grid-template-rows: 5.5rem 12% 33% 30%;
  grid-template-areas:
    ' header header header'
    ' navbar minicards systemp'
    ' navbar achievements systemp'
    ' navbar graph .';
`;

const Profile = () => {
  const [challenger, setChallenger] = useState(null);
  useEffect(() => {
    const setUser = async () => {
      const user = await fetchUser();
      console.log(user);
      const challenger = await fetch('http://54.210.111.183/api/v1/profile', {
        method: 'GET',
        headers: {
          user: user.sub
        }
      }).then((res) => res.json());
      setChallenger(challenger.data);
    };

    setUser();
  }, []);

  if (challenger) {
    return (
      <Container>
        <Header />
        <Navbar />
        <StreakAndRank ranks={challenger.ranks} challenges={challenger.challenges} />
        <Usersystem data={challenger} ranks={challenger.ranks} />
        <Achievements goals={challenger.achievements} />
        <UserGraph activity={challenger.activity} />
      </Container>
    );
  } else {
    return 'loading perro';
  }
};

export default Profile;
