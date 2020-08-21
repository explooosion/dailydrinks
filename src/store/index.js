import { createContext } from 'react';
import { v1 as uuid } from 'uuid';

export const initialState = {
  drinks: [
    { id: uuid(), name: 'coffee', price: 45, notes: 'no sugar' },
    { id: uuid(), name: 'juice', price: 25, notes: 'weight loss' },
    { id: uuid(), name: 'latte', price: 60, notes: 'no sugar weight loss' },
  ]
};

export default createContext(initialState);
