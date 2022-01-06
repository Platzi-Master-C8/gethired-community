const getDiscussions = (API: any) => fetch(API)
  .then(res => res.json())
  .then(data => data)
export { getDiscussions };
