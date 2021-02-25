import { sortBy } from 'lodash';
import React, { memo, useState } from 'react';
import '../road2react.css';

const ColumnHeader = ({ onSort }) => {
  const handleSort = (key) => {
    onSort(key);
  }

  return (
    <div style={{ display: 'flex' }}>
      <span style={{ width: '40%' }}>
        <button type='button' onClick={() => handleSort('TITLE')}>Title</button>
      </span>
      <span style={{ width: '30%' }}>
        <button type='button' onClick={() => handleSort('AUTHOR')}>Author</button>
      </span>
      <span style={{ width: '10%' }}>
        <button type='button' onClick={() => handleSort('COMMENT')}>Comments</button>
      </span>
      <span style={{ width: '10%' }}>
        <button type='button' onClick={() => handleSort('POINT')}>Points</button>
      </span>
      <span style={{ width: '10%' }}>Actions</span>
    </div>
  );
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
const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENT: list => sortBy(list, 'num_comments').reverse(),
  POINT: list => sortBy(list, 'points').reverse(),
};
const List = ({ list, onRemoveItem }) => {
  console.log('B:List');
  const [sort, setSort] = useState('NONE');

  const handleSort = (key) => {
    setSort(key);
  }
  const sortFunction = SORTS[sort];
  const sortedList = sortFunction(list);

  return (
    <div>
      <ColumnHeader onSort={handleSort} />
      {sortedList.map((item) => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      )}
    </div>
  )
}

export default memo(List);