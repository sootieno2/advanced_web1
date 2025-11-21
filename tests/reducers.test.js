// tests/reducers.test.js
import { toursReducer, bookingReducer } from '../src/store/reducers.js';

test('toursReducer handles TOURS_FETCH_SUCCESS', () => {
  const init = { list: [], loading: true, error: null };
  const action = { type: 'TOURS_FETCH_SUCCESS', payload: [{ id: '1', title: 'X' }] };
  const next = toursReducer(init, action);
  expect(next.loading).toBe(false);
  expect(next.list.length).toBe(1);
});

test('bookingReducer updates form', () => {
  const init = { form: {} };
  const action = { type: 'BOOKING_UPDATE', payload: { name: 'Sam' } };
  const next = bookingReducer(init, action);
  expect(next.form.name).toBe('Sam');
});
