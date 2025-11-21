// src/modules/booking/bookingActions.js
export function updateBooking(payload) {
  return { type: 'BOOKING_UPDATE', payload };
}

export function resetBooking() {
  return { type: 'BOOKING_RESET' };
}
