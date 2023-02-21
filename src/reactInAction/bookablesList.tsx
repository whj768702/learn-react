import React from 'react';
import data from './static';
import { Button } from 'antd';
import { useState } from 'react';

const BookablesList = () => {
  const group = 'Rooms';
  const bookablesInGroup = data.bookables.filter(b =>b.group===group);
  const  [bookableIndex, setBookableIndex]= useState(1);

  const changeBookable = selectedIndex =>  {
    setBookableIndex(selectedIndex);
    console.log(bookableIndex);
  }
  return (
    <ul>
      {bookablesInGroup.map((b, i) => (
        <li key={b.id} className={i===bookableIndex?'bg-red-600': undefined}>
          <Button onClick={()=>changeBookable(i)}>{b.title}</Button>
        </li>
      ))}
    </ul>
  );
}

export default BookablesList;