// tests/reducers.test.js
import { toursReducer, bookingReducer } from '../src/store/reducers.js';

test('toursReducer handles TOURS_SUCCESS', () => {
  const init = { tours: [], loading: true, error: null };
  const action = { type: 'TOURS_SUCCESS', payload: [{ id: '1', title: 'X' }] };
  const next = toursReducer(init, action);

  expect(next.loading).toBe(false);
  expect(next.error).toBe(null);
  expect(next.tours.length).toBe(1);
  expect(next.tours[0].id).toBe('1');
});

test('bookingReducer updates form', () => {
  const init = { form: {} };
  const action = { type: 'BOOKING_UPDATE', payload: { name: 'Sam' } };
  const next = bookingReducer(init, action);

  expect(next.form.name).toBe('Sam');
});
