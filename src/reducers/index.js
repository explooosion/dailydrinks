import { v1 as uuid } from 'uuid';
import _ from 'lodash';

const ADD_DRINK = 'ADD_DRINK';
const UPDATE_DRINK = 'UPDATE_DRINK';
const REMOVE_DRINK = 'REMOVE_DRINK';

export const addDrink = payload => ({ type: ADD_DRINK, payload });

export const updateDrink = payload => ({ type: UPDATE_DRINK, payload });

export const removeDrink = payload => ({ type: REMOVE_DRINK, payload });

export default function drinksReducers(state, action) {
  switch (action.type) {
    case ADD_DRINK:
      return { ...state, drinks: _.concat(state.drinks, { ...action.payload, id: uuid() }) };
    case UPDATE_DRINK:
      return { ...state, drinks: _.map(state.drinks, drink => drink.id === action.payload.id ? action.payload : drink) };
    case REMOVE_DRINK:
      return { ...state, drinks: _.filter(state.drinks, ({ id }) => id !== action.payload) };
    default:
      return state;
  }
}
