const callApi = (apiUrl) =>
  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong when calling API');
      }
    })
    .then((data) => data)
    .catch((error) => {
      alert(`There was an error: ${error}`);
    });

export { callApi };
