import React, { useState } from 'react';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
}

const List = props => {
  return props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ))
}

const Road2React = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ];
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  )
}

export default Road2React;