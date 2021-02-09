import React, { useEffect, useReducer, useRef, useState } from 'react';

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
  const response = await fetch(`${API_ENDPOINT}${query}`);
  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
}

const Road2React = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '');
  const [stories, dispatchStories] = useReducer(storiesReducer, { data: [], isLoading: false, isError: false });

  useEffect(async () => {
    if (searchTerm === '') return;

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
  }, [searchTerm]);

  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item
    });
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const Labelinput = () => <strong>search1:</strong>

  return (
    <div>
      <h1>my hacker stories</h1>
      <InputWithLabel
        id='search2'
        label='search2'
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}>
        <Labelinput />
      </InputWithLabel>
      <hr />
      {stories.isError && <p>Something went wrong...</p>}
      {stories.isLoading ? (<p>Loading...</p>) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  )
}

export default Road2React;