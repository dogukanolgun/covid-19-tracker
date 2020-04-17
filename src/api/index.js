import axios from 'axios';

const getDataFromApi = (setLatest, setResults) => {
  axios
    .all([
      axios.get('https://corona.lmao.ninja/v2/all'),
      axios.get('https://corona.lmao.ninja/v2/countries')
    ])
    .then((responseArr) => {
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getDataFromApi;
