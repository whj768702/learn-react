import React, { useState } from 'react';
const Search = (props) => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = event => {
  //   setSearchTerm(event.target.value);

  //   props.onSearch(event);
  // }

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" onChange={props.onSearch} />
      <p>
        Searching for <strong>{props.searchTerm}</strong>.
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
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = event => {
    console.log('value: ', event.target.value);
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm));

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  )
}

export default Road2React;