import React from 'react';
import data from './static';
import { Select, Button, Checkbox } from 'antd';
import { useReducer } from 'react';
import reducer from './reducer';

const BookablesList = () => {
  const [state, dispatch] = useReducer(reducer, { group: 'Rooms', bookableIndex: 0, hasDetails: true, bookables: data.bookables })
  const {group, bookableIndex, bookables, hasDetails} = state;

  const bookablesInGroup = data.bookables.filter(b => b.group === group);

  const bookable = bookablesInGroup[bookableIndex];

  const changeBookable = (selectedIndex: number) => {
    dispatch({type: 'SET_BOOKABLE', payload: selectedIndex});
  }

  const nextBookable = () => {
    dispatch({type: 'NEXT_BOOKABLE'});
  }

  const toggleDetails = () => {
    dispatch({type: 'TOGGLE_HAS_DETAILS'});
  }

  const getUniqueValues = (arr: any[], key: string) => {
    const propValues = arr.map(item => item[key]);
    const uniqueValues = new Set(propValues);

    const uniqueValuesArr = [...uniqueValues];

    return uniqueValuesArr;
  }

  const groups = getUniqueValues(data.bookables, 'group').map(item => ({ label: item, value: item }));

  const changeGroup = (value: string) => {
    dispatch({type: 'SET_GROUP', payload: value});
  }

  return (
    <div className='flex'>
      <div className='w-1/2'>
        <Select style={{ width: 120 }} onChange={changeGroup} options={groups}></Select>
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
      </div>
      {bookable && (
        <div className='w-1/2'>
          <h2>{bookable.title}</h2>
          <span><Checkbox onChange={toggleDetails}>Show Details</Checkbox></span>
          <p>{bookable.notes}</p>
          {hasDetails && (
            <div>
              here is details
              {/* details */}
            </div>
          )}
          <div>
            <ul>
              {bookable.days.sort().map(d => <li key={d}>{data.days[d]}</li>)}
            </ul>
            <ul>
              {bookable.sessions.map(s => <li key={s}>{data.sessions[s]}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookablesList;