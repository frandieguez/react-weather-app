import { SET_CITY } from '../actions'
// In order to city be a pure function it must:
// - Dont alter the state with state.city = VALUE
// - Create a copy of the state with {...state, CHANGES_HERE }
export const city = (state = {}, action) => {

  switch (action.type) {
    case SET_CITY:
      return {...state, city: action.payload}
    default:
      break;
  }

  return state;
}
