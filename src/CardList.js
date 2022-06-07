import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const allRobotsCards = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    );
  });
  return <div>{allRobotsCards}</div>;
};

export default CardList;
