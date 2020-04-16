import React, { useEffect, useState } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Columns from 'react-columns';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import getDataFromApi from './api/index';
import countriesToComponents from './components/AllCountries';
import headerDataToComponents from './components/HeaderStats';
import moment from 'moment';

const App = () => {
  const [latest, setLatest] = useState('');
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');

  useEffect(() => {
    getDataFromApi(setLatest, setResults);
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = moment(date).format('h:mm:ss a').toString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ''
      ? item.country.toLowerCase().startsWith(searchCountries.toLowerCase())
      : item;
  });

  const allCountries = countriesToComponents(filterCountries);
  const globalStats = headerDataToComponents(latest, lastUpdated);

  let queries = [
    {
      columns: 2,
      query: 'min-width: 500px'
    },
    {
      columns: 3,
      query: 'min-width: 1000px'
    }
  ];

  return (
    <div>
      <br />
      <h2 style={{ textAlign: 'center' }}>Covid-19 Live Stats</h2>
      <br />
      <CardDeck>{globalStats}</CardDeck>
      <br />
      <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Control
            type="text"
            placeholder="Search for countries"
            onChange={(e) => setSearchCountries(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Columns queries={queries}>{allCountries}</Columns>
    </div>
  );
};

export default App;
