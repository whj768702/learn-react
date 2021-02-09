import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import './road2react.css';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, value);
    }
  }, [value]);

  return [value, setValue];
}

const Item = ({ item, onRemoveItem }) => {
  return (
    <div className='item'>
      <span style={{ width: '40%' }}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{ width: '30%' }}>{item.author}</span>
      <span style={{ width: '10%' }}>{item.num_comments}</span>
      <span style={{ width: '10%' }}>{item.points}</span>
      <span style={{ width: '10%' }}>
        <button type='button'
          onClick={() => onRemoveItem(item)}
          className='button button_small'>dismiss</button>
      </span>
    </div>
  )
};
const List = ({ list, onRemoveItem }) => list.map((item) => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />)

const InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id} className='label'>{children}</label>
      &nbsp;
      <input id={id} ref={inputRef} type={type}
        value={value} onChange={onInputChange} className='input' />
    </>
  );
}

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'STORIES_FETCH_SUCCES': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    }
    case 'STORIES_FETCH_FAILURE': {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case 'REMOVE_STORY': {
      return {
        ...state,
        data: state.data.filter(story => action.payload.objectID !== story.objectID)
      }
    }
    default: {
      throw new Error();
    }
  }
}

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const getAsynstories = async (query) => {
  const response = await axios.get(`${API_ENDPOINT}${query}`);
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
}

const Labelinput = () => <strong>search1:</strong>

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit} className='search-form'>
    <InputWithLabel
      id='search2'
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}>
      <Labelinput />
    </InputWithLabel>
    <button type='submit' disabled={!searchTerm} className='button button_large'>submit</button>
  </form>
);

const Road2React = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '');
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const [stories, dispatchStories] = useReducer(storiesReducer, { data: [], isLoading: false, isError: false });

  const handleFetchStories = useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    const result = await getAsynstories(searchTerm);
    if (result) {
      dispatchStories({
        type: 'STORIES_FETCH_SUCCES',
        payload: result.hits
      });
    } else {
      dispatchStories({
        type: 'STORIES_FETCH_FAILURE'
      });
    }
  }, [url]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item
    });
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  }

  return (
    <div>
      <h1>my hacker stories</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handleSearch} onSearchSubmit={handleSearchSubmit} />
      {stories.isError && <p>Something went wrong...</p>}
      {stories.isLoading ? (<p>Loading...</p>) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  )
}

export default Road2React;