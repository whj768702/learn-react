import React, { memo } from 'react';

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

const List = ({ list, onRemoveItem }) => console.log('B:List') || list.map((item) => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />)

export default memo(List);