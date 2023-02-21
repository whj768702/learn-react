type BookableItem = {
  id: number;
  group: string;
  title: string;
  notes: string;
  sessions: number[];
  days: number[];
}

type State = {
  group: string;
  bookableIndex: number;
  hasDetails: boolean;
  bookables: BookableItem[];
}
type Action = {
  type: 'SET_GROUP' | 'SET_BOOKABLE' | 'TOGGLE_HAS_DETAILS' | 'NEXT_BOOKABLE';
  payload?: any;
}

export type {
  BookableItem,
  State,
  Action,
}