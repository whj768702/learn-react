import React from 'react';
import data from './static';
import { Select, Button } from 'antd';
import { useState } from 'react';

const BookablesList = () => {
  const [group, setGroup] = useState('rooms');
  const bookablesInGroup = data.bookables.filter(b => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);

  const changeBookable = selectedIndex => {
    setBookableIndex(selectedIndex);
    console.log(bookableIndex);
  }

  const nextBookable = () => {
    setBookableIndex(i => (i + 1) % bookablesInGroup.length);
  }

  const groups = [...new Set(data.bookables.map(b => b.group))].map(item=>({label:item, value:item}));

  const handleOnChange = (value)=> {
    setGroup(value);
  }
  return (
    <>
      <Select style={{width: 120}} onChange={handleOnChange} options={groups}></Select>
      <div className='flex flex-col gap-y-1'>
        {bookablesInGroup.map((b, i) => (
          <span key={b.id} className={['w-fit', bookableIndex === i ? 'bg-red-600' : undefined].join(' ')} >
            <Button onClick={() => changeBookable(i)}>{b.title}</Button>
          </span>
        ))}
      </div>
      <div className='mt-2'>
        <Button onClick={nextBookable}>Next</Button>
      </div>
    </>
  );
}

export default BookablesList;