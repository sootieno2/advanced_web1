// tests/format.test.js
import { shortText } from '../src/utils/format.js';

test('shortText truncates long strings with ellipsis', () => {
  expect(shortText('abcdefghij', 5)).toBe('abcd…');
});

test('shortText returns empty string for non-strings', () => {
  expect(shortText(null)).toBe('');
});
