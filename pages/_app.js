import '../styles/globals.scss';
import React from 'react';
import UserProvider from '../Providers/UserProvider';

let auth0 = {
  domain: 'https://gethired.us.auth0.com',
  response_type: 'token',
  client_id: '9IKIwhKs44cPB0VceKTaVHZnXRSd2zUJ',
  redirect_uri: ''
};

function MyApp ({ Component, pageProps }) {
  let [user, setUser] = React.useState(null);
  React.useEffect(async () => {
    // auth0.redirect_uri = window.location.origin;
    if (window.location.hash) {
      const urlParams = new URLSearchParams(window.location.hash.replace('#', ''));
      const accessToken = urlParams.get('access_token');
      if (accessToken) {
        localStorage.setItem('access_token', accessToken);
        window.location = window.location.origin;
        return;
      }
    }

    if (localStorage.getItem('access_token') && !user) {
      try {
        // Getting the user info from Auth0 directly
        const userReq = await fetch(
          `${auth0.domain}/userinfo`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
          }
        );
        const userData = await userReq.json();
        // console.log(userData);
        // console.log(await userReq.json());
        // Signup on our database - Return data is not used
        fetch('https://ms-login.herokuapp.com/auth/sign_up', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });

        // Loging on our database - Return data is not used
        const signReq = await fetch('https://ms-login.herokuapp.com/auth/sign_in', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        const signData = await signReq.json();
        setUser({ user: userData, id: signData.id });
      } catch (err) {
        console.log(err);
        localStorage.removeItem('access_token');
      }
    }

  }, []);//Deps weren't set, so this was being run multiple times, we just need to run this when load

  return (
    <UserProvider.Provider value={user}>
      <Component {...pageProps} />
    </UserProvider.Provider>

  );

}

export default MyApp;
