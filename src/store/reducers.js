// src/store/reducers.js
export default function rootReducer(state = {}, action = {}) {
  return {
    tours: toursReducer(state.tours, action),
    booking: bookingReducer(state.booking, action)
  };
}

export function toursReducer(state = { list: [], loading: false, error: null }, action = {}) {
  switch (action.type) {
    case 'TOURS_FETCH_START':
      return { ...state, loading: true, error: null };
    case 'TOURS_FETCH_SUCCESS':
      return { ...state, loading: false, list: action.payload };
    case 'TOURS_FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function bookingReducer(state = { form: {} }, action = {}) {
  switch (action.type) {
    case 'BOOKING_UPDATE':
      return { ...state, form: { ...state.form, ...action.payload } };
    case 'BOOKING_RESET':
      return { ...state, form: {} };
    default:
      return state;
  }
}
