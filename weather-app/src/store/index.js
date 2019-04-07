import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from '../reducers'

const initialState = {
  city: '',
  cities: {}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// By adding the __REDUX_DEVTOOLS_EXTENSION function we connect with the Chrome redux
// I use composerEnhancers to be able to use Redux dev tools and thunk at the same time
export const store = createStore(
  combinedReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
