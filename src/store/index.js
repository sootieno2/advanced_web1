// src/store/index.js
import rootReducer from '../tests/reducers.js';

function createStore(reducer, preloadedState = {}) {
  let state = preloadedState;
  const listeners = new Set();

  function getState() { return state; }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(cb => cb());
    return action;
  }

  function subscribe(cb) {
    listeners.add(cb);
    return () => listeners.delete(cb);
  }

  // initialize
  dispatch({ type: '@@INIT' });

  return { getState, dispatch, subscribe };
}

const initial = {
  tours: { list: [], loading: false, error: null },
  booking: { form: {} }
};

const store = createStore(rootReducer, initial);
export default store;
  