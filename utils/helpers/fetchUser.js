const fetchUser = () => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem('access_token');
    if (typeof item !== 'undefined' && item !== null) {
      return new Promise(async (resolve, reject) => {
        const res = await fetch('https://ms-login.herokuapp.com/auth/user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + item
          }
        });
        const user = await res.json();
        if (!user) {
          reject('No user');
        }
        resolve(user);
      });
    }
  }
};

export default fetchUser;
