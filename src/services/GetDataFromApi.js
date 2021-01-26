const GetDataFromApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((users) => {
        return {
          id: users.id,
          name: users.name,
          status: users.status,
          species: users.species,
          gender: users.gender,
          origin: users.origin,
          location: users.location.name,
          episode: users.episode,
          img: users.image,
        };
      });
    });
};
export default GetDataFromApi;
