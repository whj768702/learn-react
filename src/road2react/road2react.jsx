import React, { memo, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import './road2react.css';

import List from './List/List';
import SearchForm from './SearchForm/SearchForm';

const useSemiPersistentState = (key, initialState) => {
  const isMounted = useRef(false);

  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      console.log('A');
      if (value) {
        localStorage.setItem(key, value);
      }
    }
  }, [value, key]);

  return [value, setValue];
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

const getAsynstories = async (url) => {
  const response = await axios.get(url);
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
}

const getLastSearchs = urls => Array.from(new Set(urls)).slice(-6, -1);
const getUrl = searchTerm => `${API_ENDPOINT}${searchTerm}`;

const Road2React = () => {
  console.log('B:Road2React');
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '');
  const [urls, setUrls] = useState([searchTerm]);

  const [stories, dispatchStories] = useReducer(storiesReducer, { data: [], isLoading: false, isError: false });

  const handleFetchStories = useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    const lastUrl = getUrl(urls[urls.length - 1]);

    const result = await getAsynstories(lastUrl);
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
  }, [urls]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = useCallback(item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item
    });
  }, []);

  const handleSearch = useCallback(event => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSearchSubmit = useCallback((event) => {
    setUrls(urls.concat(searchTerm));
    event.preventDefault();
  }, [searchTerm]);

  const handleLastSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setUrls(urls.concat(searchTerm));
  }

  const lastSearches = getLastSearchs(urls);

  return (
    <div>
      <h1>my hacker stories</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handleSearch} onSearchSubmit={handleSearchSubmit} />
      {lastSearches.map((searchTerm, index) => (
        <button key={searchTerm + index} type='button' onClick={() => handleLastSearch(searchTerm)}>{searchTerm}</button>
      ))}
      {stories.isError && <p>Something went wrong...</p>}
      {stories.isLoading ? (<p>Loading...</p>) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  )
}

export default Road2React;