import { Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

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

const Item = ({ item, onRemoveItem }) => {
  return (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <button type='button' onClick={() => onRemoveItem(item)}>dismiss</button>
    </div>
  )
};
const List = ({ list, onRemoveItem }) => list.map((item) => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />)

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

const InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} ref={inputRef} type={type} value={value} onChange={onInputChange} />
    </>
  );
}

const Road2React = () => {
  // const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || 'React');
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const initialStories = [
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

  const [stories, setStories] = useState(initialStories);

  const handleRemoveStory = item => {
    const newStories = stories.filter(story => item.objectID !== story.objectID)

    console.log('new stories: ', newStories, item);
    setStories(newStories);
  }

  const handleSearch = event => {
    console.log('value: ', event.target.value);
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const LabelInput = () => <strong>Search1:</strong>

  return (
    <div>
      <h1>My Hacker Stories</h1>
      {/* <Search searchTerm={searchTerm} onSearch={handleSearch} /> */}
      <InputWithLabel
        id='search2'
        label='Search2'
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}>
        <LabelInput />
        {/* <strong>Search:</strong> */}
      </InputWithLabel>
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  )
}

export default Road2React;