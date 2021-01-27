import React from 'react';
import PropTypes from 'prop-types';

function Test({ number, contents }) {
  return (
  <h2>{number}. This is {contents}</h2>
  );
}

const numbers = [
  {number: 1, contents: "Test1"}, 
  {number: 2, contents: "Test2"}, 
  {number: 3, contents: "Test3"}, 
  {number: 4, contents: "Test4"}, 
  {number: 5, contents: "Test5"}
];

function NumberMap({ number, contents }) {
  return (
    <Test key={number} number={number} contents={contents} />
  );
}

NumberMap.propTypes = {
  contents: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>Title</h1>
      {numbers.map(NumberMap)}
    </div>
  );
}

export default App;
