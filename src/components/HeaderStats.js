import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

// <Card
//   bg="secondary"
//   text="white"
//   className="text-center"
//   style={{ margin: '10px' }}
// >
//   <Card.Body>
//     <Card.Title>Cases</Card.Title>
//     <Card.Text>wow</Card.Text>
//   </Card.Body>
//   <Card.Footer>
//     <small>Last updated {lastUpdated}</small>
//   </Card.Footer>
// </Card>

const headerDataToComponents = (latest, lastUpdated) => {
  return (
    <>
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
    </>
  );
};

export default headerDataToComponents;
