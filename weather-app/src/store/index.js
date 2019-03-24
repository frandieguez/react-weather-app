import { createStore } from 'redux';
import { city } from  '../reducers/city'

const initialState = {
  city: 'Madrid,es'
};

// By adding the __REDUX_DEVTOOLS_EXTENSION function we connect with the Chrome redux
export const store = createStore(
  city,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__()
);
