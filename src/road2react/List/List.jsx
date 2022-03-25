import { sortBy } from 'lodash';
import React, { memo, useState } from 'react';
import '../road2react.css';

const SortArrow = ({ sort, currentKey }) => {
  if (sort.sortKey === currentKey) {
    return (<span>{sort.isReverse ? '升' : '降'}</span>);
  } else {
    return (<></>);
  }
};

const ColumnHeader = ({ sort, onSort }) => {
  const handleSort = (key) => {
    onSort(key);
  };
  console.log('sort: ', sort);

  return (
    <div style={{ display: 'flex' }}>
      <span style={{ width: '40%' }}>
        <button type='button' onClick={() => handleSort('TITLE')}> Title </button>
        <SortArrow sort={sort} currentKey='TITLE' />
      </span>
      <span style={{ width: '20%' }}>
        <button type='button' onClick={() => handleSort('AUTHOR')}>Author</button>
        <SortArrow sort={sort} currentKey='AUTHOR' />
      </span>
      <span style={{ width: '20%' }}>
        <button type='button' onClick={() => handleSort('COMMENT')}>Comments</button>
        <SortArrow sort={sort} currentKey='COMMENT' />
      </span>
      <span style={{ width: '10%' }}>
        <button type='button' onClick={() => handleSort('POINT')}>Points</button>
        <SortArrow sort={sort} currentKey='POINT' />
      </span>
      <span style={{ width: '10%' }}>Actions</span>
    </div>
  );
};
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
  );
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
  const [sort, setSort] = useState({
    sortKey: 'NONE',
    isReverse: false
  });

  const handleSort = (key) => {
    const isReverse = sort.sortKey === key && !sort.isReverse;
    setSort({ sortKey: key, isReverse: isReverse });
  };
  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse ? sortFunction(list).reverse() : sortFunction(list);

  return (
    <div>
      <ColumnHeader sort={sort} onSort={handleSort} />
      {sortedList.map((item) => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      )}
    </div>
  );
};

export default memo(List);