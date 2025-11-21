// src/utils/format.js
export function shortText(text, max = 30) {
  if (typeof text !== 'string') return '';
  return text.length > max ? text.slice(0, max - 1) + '…' : text;
}
