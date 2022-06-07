import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './app.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  // empty array means this will only run a single time
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
    console.log('This run once');
  }, []);

  // only run if count changes AND at the beginning
  useEffect(() => {
    console.log(count);
  }, [count]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  const filterRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  if (robots.length === 0) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filterRobots} />;
      </Scroll>
    </div>
  );
}

export default App;
