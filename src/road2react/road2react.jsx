import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
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
};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT': {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case 'STORIES_FETCH_SUCCES': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: state.page === 0 ? action.payload.list : state.data.concat(action.payload.list),
      };
    }
    case 'STORIES_FETCH_FAILURE': {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case 'REMOVE_STORY': {
      return {
        ...state,
        data: state.data.filter(story => action.payload.objectID !== story.objectID)
      };
    }
    case 'STORIES_PAGE': {
      return {
        ...state,
        page: action.payload.page
      };
    }
    default: {
      throw new Error();
    }
  }
};

const API_BASE = 'https://hn.algolia.com/api/v1';
const API_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const getAsynstories = async (url) => {
  const response = await axios.get(url);
  if (response.status === 200) {
    return response.data;
  }
    return null;
};

const getLastSearchs = urls => Array.from(new Set(urls)).slice(-6, -1);
const getUrl = (searchTerm, page) => `${API_BASE}${API_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`;

const LastSearches = ({ lastSearches, onLastSearch }) => (
  <>
    {lastSearches.map((searchTerm, index) => (
      <button key={searchTerm + index} type='button' onClick={() => onLastSearch(searchTerm)}>{searchTerm}</button>
    ))}
  </>
);

const Road2React = () => {
  console.log('B:Road2React');
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '');
  const [urls, setUrls] = useState([searchTerm]);

  const [stories, dispatchStories] = useReducer(storiesReducer, { data: [], page: 0, isLoading: false, isError: false });

  const getStories = async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });
    console.log('fetch: ', stories.page);

    const lastUrl = getUrl(urls[urls.length - 1], stories.page);

    const result = await getAsynstories(lastUrl);
    if (result) {
      dispatchStories({
        type: 'STORIES_FETCH_SUCCES',
        payload: {
          list: result.hits,
        }
      });
    } else {
      dispatchStories({
        type: 'STORIES_FETCH_FAILURE'
      });
    }
  };

  const handleFetchStories = useCallback(() => getStories(), [urls]);

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
  };

  const lastSearches = getLastSearchs(urls);

  const handleMore = () => {
    console.log('stories more: ', stories.page);
    dispatchStories({ type: 'STORIES_PAGE', payload: { page: stories.page + 1 } });
  };

  return (
    <div>
      <h1>my hacker stories</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handleSearch} onSearchSubmit={handleSearchSubmit} />
      <LastSearches lastSearches={lastSearches} onLastSearch={handleLastSearch} />
      <List list={stories.data} onRemoveItem={handleRemoveStory} />
      {stories.isError && <p>Something went wrong...</p>}
      {stories.isLoading ? (<p>Loading...</p>) : (
        <button type='button' onClick={handleMore}>More</button>
      )}
    </div>
  );
};

export default Road2React;