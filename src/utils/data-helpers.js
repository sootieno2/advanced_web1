// Return a destination by ID
export function getDestinationById(id, list) {
  return list.find(item => item.id === id) || null;
}

// Return the first N destinations without modifying original array
export function getFeaturedDestinations(list, count = 3) {
  return list.slice(0, count);
}

// Basic email validation
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
