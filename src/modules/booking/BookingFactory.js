// src/modules/booking/BookingFactory.js
export function createBooking({ name = '', email = '', destination = '', message = '' } = {}) {
  return {
    id: Date.now().toString(36),
    name: String(name).trim(),
    email: String(email).trim(),
    destination: String(destination),
    message: String(message).trim(),
    createdAt: new Date().toISOString()
  };
}
