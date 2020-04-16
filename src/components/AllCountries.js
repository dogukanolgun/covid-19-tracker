import React from 'react';
import Card from 'react-bootstrap/Card';

const countriesToComponents = (filterCountries) =>
  filterCountries.map((data, index) => {
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

export default countriesToComponents;
