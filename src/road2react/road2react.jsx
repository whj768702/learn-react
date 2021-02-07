import { Input } from 'antd';
import React, { useEffect, useState } from 'react';

const Search = ({ searchTerm, onSearch }) => {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" onChange={onSearch} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </>
  );
}

const Item = ({ title, url, author, num_comments, points }) => (
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
);
const List = ({ list }) => list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />)

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

const InputWithLabel = ({ id, label, value, type = 'text', onInputChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
  &nbsp;
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </>
)

const Road2React = () => {
  // const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || 'React');
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

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
      {/* <Search searchTerm={searchTerm} onSearch={handleSearch} /> */}
      <InputWithLabel id='search2' label='Search2' value={searchTerm} onInputChange={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  )
}

export default Road2React;