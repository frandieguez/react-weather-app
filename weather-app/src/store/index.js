import { createStore } from 'redux';

// By adding the __REDUX_DEVTOOLS_EXTENSION function we connect with the Chrome redux
export const store = createStore(
  () => {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__()
);
