import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Columns from 'react-columns';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import moment from 'moment';

const App = () => {
  const [latest, setLatest] = useState('');
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');

  useEffect(() => {
    axios
      .all([
        axios.get('https://corona.lmao.ninja/all'),
        axios.get('https://corona.lmao.ninja/countries')
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = moment(date).format('h:mm:ss a').toString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ''
      ? item.country.toLowerCase().startsWith(searchCountries.toLowerCase())
      : item;
  });

  const countries = filterCountries.map((data, index) => {
    return (
      <Card
        key={index}
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: '10px' }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases: {data.cases}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

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
      <CardDeck>
        <Card
          bg="secondary"
          text="white"
          className="text-center"
          style={{ margin: '10px' }}
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>{latest.cases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text={'white'}
          className="text-center"
          style={{ margin: '10px' }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>{latest.deaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text={'white'}
          className="text-center"
          style={{ margin: '10px' }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>{latest.recovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
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
      <Columns queries={queries}>{countries}</Columns>
    </div>
  );
};

export default App;
