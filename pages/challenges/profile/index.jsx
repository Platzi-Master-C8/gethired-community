import UserSystem from '../../../components/challenges/userSystem/UserSystem';
import Header from '../../../components/security/header/Header';
import StreakAndRank from '../../../components/challenges/StreakAndRank/StreakAndRank';
import UserGraph from '../../../components/challenges/userGraph/UserGraph';
import Achievements from '../../../components/challenges/achievements/Achievements';
import styled from '@emotion/styled';
import { useUser } from '@auth0/nextjs-auth0';
import Navbar from '../../../components/security/navbar/Navbar';
import { useContext, useEffect, useState } from 'react';
import UserProvider from '../../../Providers/UserProvider';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 24% 53% 29%;
  grid-template-rows: 5.5rem 12% 33% 30%;
  grid-template-areas:
    ' header header header'
    ' navbar miniCards sysTemp'
    ' navbar achievements sysTemp'
    ' navbar graph .';
`;

const Profile = () => {
  const [challenger, setChallenger] = useState(null);
  const user = useContext(UserProvider);

  useEffect(() => {
    if (user) {
      const getChallenger = async () => {
        const res = await fetch('http://54.210.111.183/api/v1/profile', {
          method: 'GET',
          headers: {
            user: user.sub
          }
        });
        const data = await res.json();
        setChallenger(data.data);
      };
      getChallenger().catch((err) => console.log(err)); //Fallback
    }
  }, [user]);

  if (challenger) {
    return (
      <Container>
        <Header />
        <Navbar />
        <StreakAndRank
          ranks={challenger.ranks}
          challenges={challenger.challenges}
        />
        <UserSystem data={challenger} ranks={challenger.ranks} />
        <Achievements goals={challenger.achievements} />
        <UserGraph activity={challenger.activity} />
      </Container>
    );
  }
  return 'Loading...';
};

export default Profile;
