const getDiscussions = (API: any) => fetch(API, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
  },
})
  .then(res => res.json())
  .then(data => data)
export { getDiscussions };
