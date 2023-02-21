import type { BookableItem, State, Action } from './types';

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_GROUP':
      return {
        ...state,
        group: action.payload,
        bookableIndex: 0
      };
    case 'SET_BOOKABLE':
      return {
        ...state,
        bookableIndex: action.payload
      }
    case 'TOGGLE_HAS_DETAILS':
      return {
        ...state,
        hasDetails: !state.hasDetails
      }
    case 'NEXT_BOOKABLE':
      const count = state.bookables.filter((b: BookableItem) => b.group === state.group).length;
      return {
        ...state,
        bookableIndex: (state.bookableIndex + 1) % count
      }
    default:
      return state;
  }
}