// src/ui/components/Form.js
export function createBookingForm(store) {
  const form = document.createElement('form');
  form.className = 'booking-form';
  form.innerHTML = `
    <div class="form-group">
      <label for="name">Full name</label>
      <input id="name" name="name" type="text" required>
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input id="email" name="email" type="email" required>
    </div>
    <div class="form-actions">
      <button type="submit" class="btn primary">Send request</button>
      <button type="reset" class="btn">Reset</button>
    </div>
  `;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
      name: form.name.value,
      email: form.email.value
    };
    store.dispatch({ type: 'BOOKING_UPDATE', payload: data });
    // quick feedback (could wire to aria-live)
    alert('Booking dispatched (demo)');
  });

  return form;
}
